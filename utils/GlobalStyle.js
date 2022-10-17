import { StyleSheet } from "react-native";

export default GlobalStyle = StyleSheet.create({

    non_center_screen: {
        flex: 1,
        backgroundColor: 'white',
    },

    horizontal_center_screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',

    },


    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    default_text: {
        color: "black",
        fontSize: 18,
        fontWeight: "900",
        marginTop: 20,
        marginBottom: 40,
    },
    default_page_header_text: {
        color: "black",
        fontSize: 18,
        fontWeight: "900",
    },

    roundContainer: {
        borderRadius: 20,
        backgroundColor: 'white',
        height: '15%',
        elevation: 8,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    horizontal_view: {
        flex: 1,
        flexDirection: "row",

    },

})