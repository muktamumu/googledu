import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export default function B({ title, Press }) {



    return (
        <TouchableOpacity
            style={{
                backgroundcolor: 'black',
                borderRadius: 10,
                alignItems: 'center',
                wadth: 300,
                paddingVertical: 10,
                marginVertical: 20,
                marginTop:30,

            }}
            onPress={Press}>
                <Text style={{fontSize:28,color:'white'}}>{title}</Text>


        </TouchableOpacity>

    );
}