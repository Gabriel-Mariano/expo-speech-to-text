import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles/styles';
import { ButtonProps } from './types';
import LottieView from 'lottie-react-native';


export function Button ({ startedAnimantion, ...rest }:ButtonProps) {
    const animation = useRef(null);

    useEffect(()=> {
        if(startedAnimantion) {
            animation.current?.play();
        } else {
            animation.current?.reset();
        }
    },[startedAnimantion])

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <LottieView
                ref={animation}
                style={{
                    width:60,
                    height:60,
                    borderRadius:60,
                    backgroundColor:'#bba3ea',
                }}
                
                source={require('../../assets/animation/record.json')}
            />
            {/* <MaterialCommunityIcons name='microphone' size={28} color="#fff" /> */}
        </TouchableOpacity>
    )
}