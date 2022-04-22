import React, {useState} from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import FlatListBasics from './FlatListBasics'
import ImagePickerExample from './ImagePickerExample'

const IMAGES = {
  image1: require('./assets/img1.jpg'),
  image2: require('./assets/img1.jpg'),
  image3: require('./assets/img1.jpg'),
  image4: require('./assets/img1.jpg'),
  image5: require('./assets/img1.jpg'),
  image6: require('./assets/img1.jpg'),
  image7: require('./assets/img1.jpg'),
};



function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to our Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
      <Text>Conference</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Contacts')}
        style={{ backgroundColor: 'plum', padding: 10 }}
      >
       <Text>Contacts</Text>
      </Pressable>
    </View>
  );
}

function Conference({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Conference Details</Text>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ backgroundColor: 'plum', padding: 10 }}
      >
       <Text>Home</Text>
      </Pressable>
    </View>
  );
}

function Contacts({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Our Story</Text>

      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={{ backgroundColor: 'plum', padding: 10 }}
      >
       <Text>Home</Text>
      </Pressable>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conference" component={ImagePickerExample} />
        <Stack.Screen name="Contacts" component={FlatListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
