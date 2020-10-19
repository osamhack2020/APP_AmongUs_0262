import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native'

export default class LoadingScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
                <Button title="Move to LoginScreen" onPress={this.props.navigation.navigate('Login')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})