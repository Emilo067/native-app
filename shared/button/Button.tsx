import {Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet, Text} from "react-native";
import {Colors, Fonts, Radius} from "../tokens";

export const Button = (props: PressableProps & {text: string}) => {
    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary]
    })


    const fadeIn = (e :GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start()
        props.onPressIn && props.onPressIn(e)
    }

    const fadeOut = (e :GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true
        }).start()
        props.onPressOut && props.onPressOut(e)
    }
    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View style={{...styles.btn, backgroundColor: color}}>
                <Text style={styles.text}>{props.text}</Text>
            </Animated.View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    btn: {
       justifyContent: 'center',
        alignItems: "center",
        borderRadius: Radius.r10,
        height: 58,
        backgroundColor: Colors.primary
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f18
    }
})
