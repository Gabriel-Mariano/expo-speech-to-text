import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View,  FlatList } from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Empty } from '../components/Empty';
import { Input }  from '../components/Input';
import { dataUsers } from '../data/data';
import { styles } from './styles/main';

type MainProps = {
    speechs:string[],
    startSpeechToText:()=> any,
    stopSpeechToText:()=> any,
}

export default function Main({ speechs, startSpeechToText, stopSpeechToText }:MainProps) {
    const [text, setText] = useState('');
    const [speech, setSpeech] = useState([]);
    const [users, setUsers] = useState(dataUsers);
    const [startedAnimation, setStartedAnimation] = useState(false);

    useEffect(()=> {
        validateSpeech();
    },[speechs]);

    useEffect(()=> {
        usersSearch(text)
    },[text])

    const validateSpeech = () => {
        if(speechs.length > 0 ) {
            const lastIndex = speechs[speechs.length - 1];

            const newText = text+' '+lastIndex;
            const updatedSpeech = speech;

            updatedSpeech.push(lastIndex)
        
            setText(newText);
            setSpeech(updatedSpeech);
           
        } else {
            const changedSpeech = speechs.join(" ");
        
            setText(changedSpeech);
            setSpeech(speechs);
        }
    };

    const onHandleText = (text:string) => {
       setText(text);

       const chagedText = text.split(" ");

       const updatedSpeech = [];

       for(let i = 0; i < chagedText.length; i++){
            if(speech[i] === chagedText[i]){
                updatedSpeech.push(speechs[i])
            }
        }
       
       setSpeech(updatedSpeech);
    }

    const clearInput = () => {
        setText('');
        setSpeech([]);
    }

    const usersSearch = useCallback((text:string)=> {
        if(text){
            const treatedText = text.trim();
            const filterUsers = users.filter((user)=> {
                const name = user.name?.toUpperCase();
                const textUpperCase = treatedText.toUpperCase();

                return name!.indexOf(textUpperCase) > -1;
            })

            setUsers(filterUsers);
        } else {
            setUsers(dataUsers)
        }
    },[text]);

    const handleOnPressIn = () => {
        setStartedAnimation(true);
        startSpeechToText();
    }

    const handleOnPressOut = () => {
        setStartedAnimation(false);
        stopSpeechToText();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input 
                    label='Pesquise por um usuário'
                    value={text} 
                    onChangeText={onHandleText}
                    clearInput={clearInput}
                />
            </View>
            <View style={styles.contentList}>
                <FlatList
                    data={users}
                    keyExtractor={(user)=> user.id}
                    style={{ backgroundColor:'#fff', height:'100%'}}
                    ListEmptyComponent={<Empty/>}
                    renderItem={({ item })=> 
                        <Card 
                            avatar={item.avatar}
                            title={item.name} 
                            description={item.career} 
                        />
                    }
                />   
            </View>
            <Button 
                startedAnimantion={startedAnimation}
                onPressIn={handleOnPressIn} 
                onPressOut={handleOnPressOut}
            />
        </View>
    )
}