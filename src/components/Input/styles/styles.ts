import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerInput:{
        width:'100%',
    },
    wrapperInput:{
        width:'100%',
        height:46,
        backgroundColor:'#fff',
        borderWidth:1,
        borderRadius:4,
        borderColor:'#f8f8f8',

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    input:{
        width:'100%',
        height:46,

        borderWidth:1,
        borderRadius:4,
        backgroundColor:'#fff',
        borderColor:'#f8f8f8'
    },
    label:{
        color:'#fff'
    },
    btnCancel:{
        marginRight:4
    }
})

export { styles };