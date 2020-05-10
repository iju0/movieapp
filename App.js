import React, {useState} from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native'
import Stack from './navigation/Stack'



/**
 * 
 * image 타입이 string 인 경우 imageURL 로 판단 imageURL 을 이미지화로 할 수 있는 Image.prefetch() 를 이용하여 캐시화를 합니다.
 * image 타입이 string 이 아닌경우 모듈 처리로 판단 > Asset.fromModule 를 이용하여 불러온뒤 downloadAsync 로 캐시화를 합니다.
 */
const cacheImage = images =>
  images.map(image => {
    if (typeof image === 'string') {
      // prefetch() : imageURL 를 디바이스 메모리에 올려 캐시 처리합니다.
      return Image.prefetch(image)
    } else {
      // 앱 내 지정된 경로의 이미지를 불러와 캐시화를 합니다. require('...') 
      return Asset.fromModule(image).downloadAsync
    }
  })

const cacheFonts = fonts => (
  // Font.loadAsync() : 정적인 폰트나 원격 리소스의 폰트를 불러와 Text 컴포넌트에 사용할 수 있도록 제공
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)])
)
  

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const loadAssets = async () => {

    const images = cacheImage([
      "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
      require("./assets/splash.png")
    ])
    
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font])
    // 모든 프로미스를 처리합니다.
    return Promise.all([...images, ...fonts])
  }

  const onFinish = () => setIsReady(true)

  return (
    isReady ? (
      <>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
        <StatusBar barStyle="light-content"/>
      </>
    )
    : (
      <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />
    )
  );
}









