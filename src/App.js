import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

import SideMenu from 'react-native-side-menu';
import menu from './components/menu/menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

  const loaded = (
    <Provider store={store}>
      <SideMenu menu={menu}>
        <Navigation />
      </SideMenu>
    </Provider>
  );

  return ready ? loaded : loading;
}
