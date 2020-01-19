import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

import IconButton from '../components/IconButton';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';


export default class RoutesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            region: {}
        }
    }

    async componentDidMount() {
        let { coords } = await Location.getCurrentPositionAsync({});
        this.setState({
            region: {
                latitude: coords.latitude,
                longitude: coords.longitude
            },
            isLoading: false
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Rutas',
        headerTitleStyle: {
            marginTop: -26
        },
        headerStyle: {
            height: 32
        },
        headerRight: (
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
                {
                    !this.state.isLoading &&
                    <WebView
                        // originWhitelist={['*']}
                        source={{ uri: 'https://ws-tortilleria.herokuapp.com/route' }}//{{ html: '<h1>Hello world</h1>' }}
                        containerStyle={styles.map}
                    />
                }
                <ActivityIndicator
                    style={styles.activityIndicator}
                    size='large'
                    color={Colors.tintColor}
                    animating={this.state.isLoading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    activityIndicator: {
        flex: 1
    }
});
