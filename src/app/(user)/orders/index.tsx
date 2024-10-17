import { View, FlatList, Pressable } from 'react-native';
import orders from '@assets/data/orders';
import OrderListItem from '@/components/OrderListItem';
import { Order } from '@/types';
import { Link } from 'expo-router';

const OrderListItemClickable = (item: Order) => {
  return (
    <Link href={`./orders/${item.id}`} asChild style={{width: '100%'}}>
      <Pressable>
        <OrderListItem order={item} />
      </Pressable>
    </Link>
  )
}

export default function MenuScreen() {
  return (
    <FlatList 
      data={orders} 
      renderItem={({item}) => OrderListItemClickable(item)}
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}}
    />
  );
}
