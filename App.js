// import React, { useState, useEffect } from 'react';
// import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
// //import { Provider } from 'react-redux';
// //import Navigation from './src/components/navigation';
// import Colors from './src/helpers/Colors';
// import { store, persist } from './src/reducers';
// //import MenuTile from './src/components/common/MenuTile';
// //import MenuOptions from './src/components/common/MenuOptions';
import MapView from 'react-native-maps';

// //import NavigationBar from 'react-native-navigation-bar';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.white,
//   },
// });

// export default function App() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     persist(() => {
//       setReady(true);
//     });
//   });

//   const loading = (
//     <View style={styles.container}>
//       <ActivityIndicator />
//     </View>
//   );

//   const loaded = (
//     <View>
//       <MapView
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//     </View>
//     //<Text>Dupa</Text>
//     /*<Provider store={store}>
//       <Navigation />
//     </Provider>*/
//   );

//   return ready ? loaded : loading;
// }
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/components/navigation';
import Colors from './src/helpers/Colors';
import { store, persist } from './src/reducers';


import MapService from './src/services/MapService';

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

  const loaded = (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );

  return ready ? loaded : loading;
}

/*
<MapView style={{ flex: 1 }} region={{ latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
        //onLayout={this.onMapLayout}
        //annotations={MapService.getLocations('Gliwice')}
        showsUserLocation={true}
      >
        {MapService.getLocations('Gliwice').map((marker) => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
                key={marker.key}
              />
        ))}
      </MapView>
*/