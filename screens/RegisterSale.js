import React from 'react';
import { Text,View, StyleSheet } from 'react-native'

export default function RegisterSale(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registrar venta:</Text>
      <Text style={styles.text}>{props.navigation.getParam('data', 'Error')}</Text>
    </View>
  );
}

RegisterSale.navigationOptions = {
  title: 'Registrar venta',
  headerTitleStyle: {
    marginTop: -26
  },
  headerStyle: {
    height: 32
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});