import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { styles } from './styles/styles';
import { InputProps } from './types/index.d';

export function Input({ label, clearInput, ...rest }:InputProps) {
    const renderCancel = () => {
        return (
            <TouchableOpacity style={styles.btnCancel} onPress={clearInput}>
                <MaterialIcons name="cancel" size={18} color="#c8b6e4" />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.wrapperInput}>
                <TextInput {...rest} style={[rest.style ?? styles.input, {
                    width:rest.value.length ? '90%' : '100%'
                }]}/>
                {!rest.value.length
                    ? null
                    : renderCancel()
                }
            </View>
            
        </View>
    )
}