import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:60,

        backgroundColor:'#bba3ea',
        position:'absolute',
        bottom:0,
        right:0,
        marginVertical:30,
        marginHorizontal:40,

        justifyContent:'center',
        alignItems:'center',

        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0  },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    }
})

export { styles }