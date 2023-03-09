import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles/styles';
import { ImageAdvancedProps } from './types';

export function Avatar (props:ImageAdvancedProps) {
    return (
        <View style={styles.container}>
            <Image source={props.source} alt="Foto de perfil"  style={styles.image}/>
        </View>
    )
}