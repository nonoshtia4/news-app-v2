import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAweSome } from "@expo/vector-icons";

export const ClipButton = ({ onPress, enabled }) => {
    const name = enabled ? "bookmak" : "bookmark-o";
    return {
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <FontAweSome name={name} size={40} color="salmon" />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
});
