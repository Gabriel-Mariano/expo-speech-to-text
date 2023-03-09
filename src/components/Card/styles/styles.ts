import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:85,

        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',

        borderRadius:4,
        backgroundColor:"#f8f8f8",

        paddingHorizontal:10,
        marginVertical:5
        
    },
    content:{
        marginLeft:12
    },
    title:{
        fontWeight:'bold'
    },
    description:{
        color:"#4F4F4F",
        marginTop:2,
        fontSize:12
    }
})

export { styles };