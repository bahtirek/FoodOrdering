import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';


const CreateProductScreen = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const resetFields = () => {
    setName('');
    setPrice('');
  }

  const validateInput = () => {
    setErrors('');
    if(!name) {
      setErrors('Name is required');
      return false;
    }
    if(!price) {
      setErrors('Price is required');
      return false;
    }
    if(isNaN(parseFloat(price))) {
      setErrors('Price is not a number');
      return false;
    }
    return true;
  }

  const onCreate = () => {
    if(!validateInput()) return;

    console.warn('adding product', name);

    resetFields()
  }


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Create new item'}} />
      <Image source={{uri: image || defaultPizzaImage}} style={styles.image} />
      <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="name" 
        style={styles.input} 
      />

      <Text style={styles.label}>Price($)</Text>
      <TextInput 
        value={price}
        onChangeText={setPrice}
        placeholder="9.99" 
        style={styles.input} 
        keyboardType="numeric" 
      />
      <Text style={styles.error}>{errors}</Text>
      <Button text='Create' onPress={onCreate} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
  error: {
    color: 'red'
  },
  image: {
    alignSelf: 'center',
    width: '50%',
    aspectRatio: 1
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.light.tint,
    marginBottom: 10
  }
})

export default CreateProductScreen;