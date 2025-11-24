import {Image, StyleSheet, View, Text} from 'react-native';
import {Input} from "../shared/ínput/Input";
import {Button} from "../shared/button/Button";
import {Colors, Gaps} from "../shared/tokens";
import {useEffect, useState} from "react";
import {ErrorNotification} from "../shared/ErrorNotification/ErrorNotification";
import {Link} from "expo-router";

export default function Index() {
    const [error, setError] = useState<string | undefined>()
const alert = () => {
    setError('Неверный логин либо пароль')
}

useEffect(() => {
    const timerId = setTimeout(() => {
        setError(undefined)
    }, 3000)
    return () => {
        clearTimeout(timerId)
    }
}, [error])

    return (
        <>
        <View style={styles.container}>
            <ErrorNotification error={error}/>
            <View style={styles.content}>
                    <Image resizeMode={'contain'} style={styles.logo} source={require('../assets/logo.png')}/>
                <View style={styles.inputWrapper}>
                   <Input placeholder={'Email'}/>
                   <Input isPassword placeholder={'Password'}/>
                    <Button text={'Войти'} onPress={alert}/>
                </View>
                <Link href={'/restore'}><Text>Восстановить пароль</Text></Link>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: Dimensions.get('screen').height,
        flex: 1,
        justifyContent: 'center',
        padding: 55,
        backgroundColor: Colors.black
    },
    content: {
        gap: Gaps.g50
    },
    inputWrapper: {
        gap: Gaps.g16
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
