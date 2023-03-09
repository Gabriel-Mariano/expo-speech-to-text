import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { CardProps } from './types';
import { styles } from './styles/styles';
import { Avatar } from '../Avatar';

export function Card (props:CardProps) {
    const { title, description, avatar, ...rest } = props;
    return (
        <TouchableOpacity {...rest} style={rest.style ?? styles.container}>
            <Avatar source={avatar}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
} 