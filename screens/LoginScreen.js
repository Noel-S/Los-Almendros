import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Button, Header } from 'react-native-elements';
import IconButton from '../components/IconButton';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: '',
            user: '',
            visible: false
        }
    }

    _check() {
        return this.state.user != '' && this.state.pass != '';
    }

    _no() {
        Alert.alert('Atención', 'Escriba el nombre de usuario y la contraseña.')
    }

    _login() {
        this.props.navigation.navigate('App', { id: 1 });
    }

    render() {
        return (
            <View style={styles.container} >
                <Header
                    containerStyle={styles.header}
                    centerComponent={{ 
                        text: 'Tortilleria los almendros', 
                        style: { color: '#fff', fontSize: 20, fontWeight: '600' } 
                    }}
                    rightComponent={
                        <IconButton
                            buttonType='circle'
                            iconColor='white'
                            size={38}
                            onPress={() => this._check() ? this.props.navigation.navigate('HelpLogin') : this._no()}
                        />
                    }
                />
                <Ionicons
                    name={'md-contact'}
                    size={150}
                    color='black'
                />
                <TextInput
                    style={styles.input}
                    placeholder='usuario'
                    value={this.state.user}
                    onChangeText={(user) => this.setState({user})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='contraseña'
                    secureTextEntry={true}
                    value={this.state.pass}
                    onChangeText={(pass) => this.setState({pass})}
                />
                <Button
                    title='Entrar'
                    buttonStyle={styles.button}
                    onPress={() => this._check() ? this._login() : this._no()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        textAlign: 'center',
        fontSize: 16,
        borderColor: '#bababa',
        borderWidth: 1,
        borderRadius: 10,
        width: 265,
        margin: 5
    },
    button: {
        height: 40,
        width: 265,
        borderRadius: 10,
        margin: 5,
        marginBottom: 50,
        backgroundColor: Colors.tintColor
    },
    header: {
        height: 64,
        paddingTop: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        elevation: 4
    },
});