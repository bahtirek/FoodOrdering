import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Order } from '../types';
import { Link, useSegments } from 'expo-router';


type OrderListItemProps = {
  order: Order
}

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Order #{order.id}</Text>
        <Text style={styles.price}>{order.created_at}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
    </View>
  );
}

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5
  },
  price: {
    color: 'gray',
  },
  status: {
    fontWeight: '600'
  },
});
