import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1",
        padding: 10,
        borderRadius: 10
    },
    image: {
        borderRadius: 10,
        backgroundColor: "white"
    },
    info: {
        flex: 1,
        marginTop: 5,
        justifyContent: "space-between"
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "gray"
    },
    condition: {
        fontSize: 16,
        fontWeight: "bold",
        color: "red"
    }
});