import {StatusBar} from 'expo-status-bar';
import {Button, Dimensions, Image, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const width = Dimensions.get('window').width
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                    <Image resizeMode={'contain'} style={styles.logo} source={require('./assets/logo.png')}/>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}>Email</TextInput>
                    <TextInput style={styles.input}>Пароль</TextInput>
                    <Button title={'Войти'}/>
                </View>
                    <Button title={'Восстановить пароль'}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: Dimensions.get('screen').height,
        flex: 1,
        justifyContent: 'center',
        padding: 55,
        backgroundColor: '#16171D'
    },
    content: {
        gap: 50
    },
    inputWrapper: {
        gap: 16
    },
    input: {
      backgroundColor: 'gray'
    },
    text: {
        textAlign: 'center',
        color: 'blue',
    },
    logo: {
        width: 220,
        height: 100,
}
});
