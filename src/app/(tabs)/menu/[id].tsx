import { Stack, useLocalSearchParams } from "expo-router"
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@components/Button";

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() == id);

  if (!product) {
    return <Text>Product not found</Text>
  }

  const addToCart = () => {
    console.warn('adding to cart')
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}} />
      <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} resizeMode="contain" />

      <Text>Select size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => {setSelectedSize(size)}}
            style={[styles.size, {backgroundColor: selectedSize == size ? 'lightgray' : 'white'}]} 
          >
            <Text style={[styles.sizeText, {color: selectedSize == size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
export default ProductDetailsScreen;