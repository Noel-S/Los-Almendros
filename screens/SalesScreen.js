import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import IconButton from '../components/IconButton';

export default class SalesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Ventas',
      headerTitleStyle: {
        marginTop: -26
      },
      headerStyle: {
        height: 32
      },
      headerRight:(
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
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ flex: 1, textAlignVertical: 'center' }}>Ventas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
