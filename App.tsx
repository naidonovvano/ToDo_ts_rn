import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";
import { gStyles } from "./style";
import { TodoProvider } from "./app/utils";
import { Header } from "./app/components/Header/Header";
import { TodoList } from "./app/components/TodoList/TodoList";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          ArvoRegular: require("./assets/font/Arvo-R.ttf"),
          ArvoBold: require("./assets/font/Arvo-B.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <SafeAreaProvider
      onLayout={onLayoutRootView}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        style="auto"
      />
      <TodoProvider>
        <View style={gStyles.container}>
          <ImageBackground
            source={require("./assets/wall.png")}
            resizeMode="cover"
            style={gStyles.wallpaper}
          >
            <Header />
            <TodoList />
          </ImageBackground>
        </View>
      </TodoProvider>
    </SafeAreaProvider>
  );
}
