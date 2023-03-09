import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { styles } from './styles/styles';

export function Empty () {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Nenhum usuário encontrado</Text>
            <FontAwesome5 name="user-slash" size={24} color="#CFCFCF" />
        </SafeAreaView>
    )
}