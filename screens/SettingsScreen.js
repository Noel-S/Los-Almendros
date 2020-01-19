import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import IconButton from '../components/IconButton';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Información',
    headerTitleStyle: {
      marginTop: -26
    },
    headerStyle: {
      height: 32
    },
    headerRight: () => (
      <IconButton
        buttonType='circle'
        iconColor='black'
        size={38}
        onPress={() => navigation.navigate('Help')}
      />
    ),
    headerRightContainerStyle: {
      marginTop: -26,
      marginRight: 8
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Salir'
          buttonStyle={styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 265,
    borderRadius: 10,
    margin: 5,
    marginBottom: 50,
    backgroundColor: Colors.tintColor,
},
});
