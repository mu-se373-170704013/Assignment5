import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Image1 from './assets/1.jpeg';
import Image2 from './assets/2.jpeg';
import Image3 from './assets/3.jpeg';
import Image4 from './assets/4.jpeg';
import Image5 from './assets/5.jpeg';

const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [savedData, setSavedData] = useState([]);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={{
          backgroundColor: 'orange',
          borderRadius: 15,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30,
        }}
        onPress={() => {
          const nextID = image + 1;
          setImage(nextID);
          setSavedData([...savedData, {id: nextID, name: 'Person ' + nextID}]);
        }}>
        <Text style={{}}>ADD IMAGE</Text>
      </Pressable>
      <View
        style={{
          width: '25%',
          aspectRatio: 1,
          borderRadius: 100,
          overflow: 'hidden',
          borderWidth: 1,
          marginBottom: 20,
        }}>
        {image && (
          <Image
            source={
              image % 5 == 1
                ? Image1
                : image % 5 == 2
                ? Image2
                : image % 5 == 3
                ? Image3
                : image % 5 == 4
                ? Image4
                : Image5
            }
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </View>

      <Pressable
        style={{
          backgroundColor: 'orange',
          borderRadius: 15,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate('Next', {source: image})}>
        <Text>OPEN NEXT PAGE </Text>
      </Pressable>

      <ScrollView style={{width: '100%'}}>
        {savedData.map(item => (
          <>
            <View
              style={{
                padding: 5,
                borderBottomWidth: 1,
                borderBottomColor: 'rgb(200,200,200)',
              }}>
              <Text style={{textAlign: 'center'}}>{item.name}</Text>
            </View>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Next = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  const image = route?.params?.source;
  return (
    <View style={{flex: 1}}>
      {image && (
        <ImageBackground
          source={
            image % 5 == 1
              ? Image1
              : image % 5 == 2
              ? Image2
              : image % 5 == 3
              ? Image3
              : image % 5 == 4
              ? Image4
              : Image5
          }
          style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable
              style={{
                backgroundColor: 'orange',
                borderRadius: 15,
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text>GO TO THE FIRST PAGE</Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: 'yellow',
                borderRadius: 25,
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 30,
                width: 50,
                aspectRatio: 1,
              }}
              onPress={() => setVisible(!visible)}>
              <Text>. . .</Text>
            </Pressable>
          </View>
          {visible && (
            <View
              style={{
                width: 100,
                height: 150,
                backgroundColor: 'white',
                position: 'absolute',
                borderWidth: 1,
                borderColor: 'gray',
                right: 0,
              }}>
              <Pressable
                onPress={() => setVisible(false)}
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>SETTINGS</Text>
              </Pressable>
              <Pressable
                onPress={() => setVisible(false)}
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>ABOUT</Text>
              </Pressable>
              <Pressable
                onPress={() => setVisible(false)}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>QUIT</Text>
              </Pressable>
            </View>
          )}
        </ImageBackground>
      )}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Next" component={Next} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
