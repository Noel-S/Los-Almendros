import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerScreen(props) {
  const [scanned, setScanned] = useState(false);
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    // alert(`Los datos del código han sido leídos:\n${data}`);
    props.navigation.navigate('RegisterSale', { data: data });
  };
  return (
    <View style={styles.container}>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.reader}
      />
      <TouchableNativeFeedback
        onPress={() => setScanned(false)}
      >
        <View style={styles.readButton} >
          <Text style={styles.text}>Escanear de nuevo</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

ScannerScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  reader: {
    position: 'absolute', 
    top: -11, 
    bottom: 0, 
    left: 0, 
    right: 0 
  },
  readButton: {
    backgroundColor: '#2f95dc', 
    height: 60, 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
});
