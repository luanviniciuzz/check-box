import React, {useState, useEffect} from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CheckBox = ({options = [], onChange, multiple = false}) => {

    const [selected, setSelected] = useState([]);

    function toggle(id){
        let index = selected.findIndex(i => i === id);
        let arr_selecteds = [...selected]
        if(index !== -1){
            arr_selecteds.splice(index, 1)
        }else{
            multiple ? arr_selecteds.push(id) : arr_selecteds = [id]
        }

       setSelected(arr_selecteds)
    }

    useEffect(() => {onChange(selected)},[selected])
    return(
        <View style={styles.container}>
            {options.map((op, index)  => {
                return(
                    <View key={index} style={styles.option_container}>
                        <TouchableOpacity  style={[styles.touch,{
                            backgroundColor: selected.findIndex(i => i === op.id) !== -1 ? '#74b9ff': 'white'
                        }]} onPress={() => toggle(op?.id)}>
                            {
                                selected.findIndex(i => i === op.id) !== -1 ? (<MaterialCommunityIcons name="check-bold" color={"white"} size={20}/>) : null
                            }
                        </TouchableOpacity>
                        <Text style={styles.op_text}>{op?.text}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default CheckBox
const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    option_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    touch:{
        height:22,
        width:22,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"blue",
        borderWidth:1

    },
    op_text:{
        marginLeft:15,
        color:'green',
        fontSize:16,
        fontWeight:"600"
    }
})