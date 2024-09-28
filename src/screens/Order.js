import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from "../global/MyIcon";

const Order = () => {
  const [time, setTime] = useState(20)
  const addTime = () => {
    setTime(time + 10)
  }
  const substractTime = () => {
    if (time === 0) {
      return
    }
    setTime(time - 10)
  }
  const Header = () => {
    return (
      <View style={styles.headerContainer} >
        <Text style={styles.newOrder}>1 new order</Text>
        <AntDesign name='close' size={45} color='black' />
      </View>
    )
  }
  const OrderBy = () => {
    return (
      <View style={styles.orderByContainer} >
        <View style={styles.orderByTopRow} >
          <Text style={styles.text}>ID: 5541</Text>
          <Text style={styles.text}>11:30 PM</Text>
        </View>
        <Text style={styles.text}>Order by Harsh Ghai</Text>
      </View>
    )
  }
  const CustomerBox = () => {
    return (
      <View style={styles.custBox} >
        <Text style={styles.text}>Customer Box</Text>
      </View>
    )
  }
  const BillItem = ({ quantity, name, price }) => {
    return (
      <View style={styles.billItemRow} >
        <Text style={styles.text}>{`${quantity} X ${name}`}</Text>
        <Text style={styles.text}>{`Rs ${price}`}</Text>
      </View>
    )
  }
  const Bill = () => {
    const items = [
      {
        id: '1',
        quantity: 1,
        name: 'Cold Coffee',
        price: 60
      },
      {
        id: '2',
        quantity: 1,
        name: 'Ice Tea',
        price: 60
      },
    ]
    const total = items?.map(i => i.quantity * i.price)?.reduce((a, b) => a + b, 0)
    return (
      <View>
        <View style={styles.billItemsContainer}>
          {items?.map(item =>
            <BillItem key={item.id} quantity={item?.quantity} name={item?.name} price={item?.price} />
          )}
        </View>
        <View style={[styles.billTotalRow, { paddingTop: 30 }]}>
          <View style={styles.billTotalLeftRow}>
            <Text style={styles.text}>Total bill </Text>
            <View style={styles.paidBg} >
              <Text style={[styles.text, { fontSize: 14 }]}>Paid</Text>
            </View>
          </View>
          <Text style={styles.text}>{`Rs ${total}`}</Text>
        </View>
      </View>
    )
  }
  const Button = ({ onPress, style = {}, textStyle = {}, isIcon = false, Icon = <View />, title = '' }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]} >
        {isIcon ?
          Icon
          :
          <Text style={[styles.text, textStyle]}>{title}</Text>
        }
      </TouchableOpacity>
    )
  }

  const Timer = () => {
    return (
      <>
      <Text style={[styles.text, {fontSize: 14, marginBottom: 10, marginTop: 90, marginLeft: 10}]} >Set food prep time</Text>
        <View style={styles.timerRow} >
          <Button onPress={substractTime} isIcon Icon={<AntDesign name='minus' size={20} color='black' />} style={{ flex: 1.5, borderBottomRightRadius: 0, borderTopRightRadius: 0, }} />
          <Button title={`${time} minutes`} style={{ flex: 6, borderRadius: 0, borderLeftWidth: 1, borderRightWidth: 1, borderLeftColor: 'black', borderRightColor: 'black', }} />
          <Button onPress={addTime} isIcon Icon={<AntDesign name='plus' size={20} color='black' />} style={{ flex: 1.5, borderBottomLeftRadius: 0, borderTopLeftRadius: 0, }} />
        </View>
      </>
    )
  }
  const ActionButtons = () => {
    return (
      <View style={styles.actionButtonsRow}>
        <Button title='Reject' style={{ width: '35%' }} textStyle={{fontSize: 16}} />
        <Button title='Accept' style={{ width: '60%' }} textStyle={{fontSize: 16}} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.mainView}>
          <OrderBy />
          <CustomerBox />
          <Bill />
          <Timer />
          <ActionButtons />
        </View>
      </ScrollView>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: '100%',
    backgroundColor: 'rgba(128,128,128, 0.4)',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  newOrder: {
    color: 'black',
    fontSize: 32,
    fontWeight: '700'
  },
  mainView: {
    padding: 30,
    paddingTop: 15,
  },
  orderByContainer: {
    width: '100%',
    paddingBottom: 10,
    borderBlockColor: 'black',
    borderBottomWidth: 1
  },
  orderByTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700'
  },
  custBox: {
    height: 100,
    marginTop: 10,
    backgroundColor: 'rgba(128,128,128, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  billItemsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBlockColor: 'black',
    borderBottomWidth: 1
  },
  billItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  billTotalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  billTotalLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paidBg: {
    paddingVertical: 0.5,
    paddingHorizontal: 18,
    marginLeft: 10,
    borderRadius: 6,
    backgroundColor: 'rgba(128,128,128, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 20,
    backgroundColor: 'rgba(128,128,128, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  actionButtonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})