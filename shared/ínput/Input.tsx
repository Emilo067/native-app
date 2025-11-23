import {Pressable, StyleSheet, TextInput, TextInputProps, View} from "react-native";
import {Colors, Radius} from "../tokens";
import {useState} from "react";
import EyeOpened from "../../assets/icons/eye-opened";
import EyeClosed from "../../assets/icons/eye-closed";

export const Input = (props: TextInputProps & {isPassword?: boolean}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <View>
            <TextInput
                secureTextEntry={props.isPassword && !isPasswordVisible}
                style={styles.input}
                placeholderTextColor={Colors.gray}
                {...props}
            />
            {props.isPassword && <Pressable onPress={()=> setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>
                {isPasswordVisible ? <EyeOpened/> : <EyeClosed/>}
            </Pressable>}
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
        lineHeight: 1.2,
        color: Colors.gray
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18
    }
})
