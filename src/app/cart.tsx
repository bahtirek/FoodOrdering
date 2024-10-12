import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";

import { useCart } from "@/providers/CartProvider";
import CartListItem from "@/components/CartListItem";
import Button from "@/components/Button";

const CartScreen = () => {
  const {items, total} = useCart();
  return (
    <View style={styles.container}>
      <FlatList 
        data={items} 
        renderItem={({item}) => <CartListItem cartItem={item} />} 
        contentContainerStyle={{gap: 10}}
      />
      <View style={styles.cartFooter}>
        <Text style={styles.total}>Total: {total}</Text>
        <Button text="Checkout" />
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  cartFooter: {
    padding: 10,
    marginTop: 'auto'
  }
})

export default CartScreen;