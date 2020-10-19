import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

export default class LoginScreen extends React.Component {

    state = { email: '', password: '', errorMessage: null }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage &&
                    <Text style={
                        { color: 'red' }
                    }>
                        {this.state.errorMessage}
                    </Text>}
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <Button //title="Login" onPress={this.handleLogin} 
                    title='Sign in' onPress={this.props.navigation.navigate('Main')}
                />
                <Button
                    title='Sign Up'
                    //onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
})