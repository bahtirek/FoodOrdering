import { Stack, useLocalSearchParams, } from "expo-router"
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import orders from "@assets/data/orders";
import { PizzaSize } from "@/types";
import OrderListItem from "@/components/OrderListItem";
import OrderItemDetails from "@/components/OrderItemDetails";

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const OrderDetailsScreen = () => {
  const {id} = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() == id);

  if (!order) {
    return <Text>Order not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: `Order #${order.id}`}} />

      <OrderListItem order={order} />

      <FlatList 
        data={order.order_items} 
        renderItem={({item}) => <OrderItemDetails product={item} />}
        contentContainerStyle={{gap: 10, marginTop: 10}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500'
  },
})
export default OrderDetailsScreen;