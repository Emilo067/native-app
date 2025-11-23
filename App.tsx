import {Button, Image, StyleSheet, View} from 'react-native';
import {Input} from "./shared/ínput/Input";
import {Colors, Gaps} from "./shared/tokens";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                    <Image resizeMode={'contain'} style={styles.logo} source={require('./assets/logo.png')}/>
                <View style={styles.inputWrapper}>
                   <Input placeholder={'Email'}/>
                   <Input placeholder={'Password'}/>
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
