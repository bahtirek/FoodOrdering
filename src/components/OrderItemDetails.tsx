import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Colors from '@constants/Colors';
import { OrderItem } from '../types';
import { useSegments } from 'expo-router';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: OrderItem;
}

const OrderItemDetails = ({ product }: ProductListItemProps) => {

  const segments = useSegments();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{product.products.name}</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.price}>${product.products.price}</Text>
            <Text>Size: 
              <Text style={styles.size}>{product.size}</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.quantity}>{product.quantity}</Text>
      </View>
    </View>
  );
}

export default OrderItemDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5
  },
  price: {
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginRight: 20,
  },
  quantity: {
    fontWeight: '600',
    paddingHorizontal: 10
  },
  image: {
    width: '20%',
    aspectRatio: 1,
    marginRight: 10
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  size: {
    fontWeight: 'bold',
    marginLeft: 10,
  }
});
