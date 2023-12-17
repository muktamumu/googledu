import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, VStack, HStack,Divider } from "native-base";

const App = () => {
  const [data, setData] = useState([]);

  const searchUser = async (t) => {
    const url = `https://v2.result.du.ac.bd/api/googleSearch?reg=${t}`;
    const result = await axios.get(url);
    if (result) {
      setData(result.data.data[0])
    }
  }

  return (
    <NativeBaseProvider>
      <Box h={'850'} w={'380'} bg={"#ecfeff"} mt={"5"}>
        {/* <ImageBackground
        source={require('./assets/Component/image/Cblur.png')}
        style={styles.bgImg}
      /> */}
        <View style={{ flex: 1 }}>
          <Box h={'230'} w={'220'} bg='#FFFFFF' alignSelf={'center'} mt={'10'} borderRadius={'5'}>
            <Text style={{ fontSize: 30, alignSelf: 'center', fontWeight: 'bold', color: '#000e21', marginTop: 10 }}>Login</Text>

            <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>Registration Number :</Text>
            <TextInput
              style={{ borderColor: "blue", borderWidth: 1, margin: 15, fontSize: 29, borderRadius: 5, marginTop: 20, alignItems: 'center' }}
              placeholder={'Search'}
              defaultValue='201631628'
              onChangeText={(text) => searchUser(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                borderRadius: 5,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>
          </Box>
          <Box h={'100'} w={'350'} bg='#164e63' alignSelf={'center'} mt={'10'} borderRadius={'5'}>
            <VStack  space={2}  mt={3}>
              <HStack>
            <Image style={styles.image} source={{ uri: 'https://v2.result.du.ac.bd/assets/student.png' }} />
            <VStack alignItems="flex-start" borderColor={'#000'}>
            {data && (<Text style={styles.text}>{data.ADMITTED_STUDENT_NAME || "Name Loading..."}</Text>)}
            <Text style={styles.text}> {data.SUBJECTS_TITLE_EN || "Name Loading..."}</Text>
            </VStack>
            </HStack>
            </VStack>
          </Box>
          <Box  h={'350'} w={'350'} bg='#fff' alignSelf={'center'} mt={'10'} borderRadius={'5'}>
            <VStack alignItems="flex-start" >
          <Text style={styles.text2}> Registration: {data.ADMITTED_STUDENT_REG_NO || "Name Loading..."}</Text>
          <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
          <Text style={styles.text2}> Exam Roll:  {data.EXAM_ROLL_PM || "Name Loading..."}</Text>
                <Text style={styles.text2}> Registration: {data.ADMITTED_STUDENT_REG_NO || "Name Loading..."}</Text>
                <Text style={styles.text2}> Father Name: {data.ADMITTED_STUDENT_FATHERS_N || "Name Loading..."}</Text>
                <Text style={styles.text2}> Mother Name:  {data.ADMITTED_STUDENT_MOTHERS_N || "Name Loading..."}</Text>
                <Text style={styles.text2}> Department: {data.SUBJECTS_TITLE_EN || "Name Loading..."}</Text>
                <Text style={styles.text2}> Hall: {data.hall_title_en || "Name Loading..."}</Text>
                </VStack>
          </Box>




          {/* <HStack alignItems="center" mt={"2"} ml={"5"} >

            <Image source={require('./assets/Component/image/logo.png')} style={{ height: 100, width: 80, alignItems: 'center' }} />

            <Text style={{ fontSize: 25, color: '#000e21', marginLeft: 8, fontWeight: 'bold' }}>University of Dhaka</Text>

          </HStack> */}
          {/* <VStack space={2} alignItems="center" mt={5}>
            <HStack >
              <Image style={styles.image} source={{ uri: 'https://v2.result.du.ac.bd/assets/student.png' }} />
              <VStack alignItems="flex-start" borderColor={'#000'}>
                {data && (<Text style={styles.text}> Name: {data.ADMITTED_STUDENT_NAME || "Name Loading..."}</Text>)}
                <Text style={styles.text}> {data.STUDENT_BANGLA_NAME || "Name Loading..."}</Text>
                <Text style={styles.text}> Gurdian Name:  {data.GURDIAN_NAME || "Name Loading..."}</Text>

                <Text style={styles.text}> Exam Roll:  {data.EXAM_ROLL_PM || "Name Loading..."}</Text>
                <Text style={styles.text}> Registration: {data.ADMITTED_STUDENT_REG_NO || "Name Loading..."}</Text>
                <Text style={styles.text}> Father Name: {data.ADMITTED_STUDENT_FATHERS_N || "Name Loading..."}</Text>
                <Text style={styles.text}> Mother Name:  {data.ADMITTED_STUDENT_MOTHERS_N || "Name Loading..."}</Text>
                <Text style={styles.text}> Department: {data.SUBJECTS_TITLE_EN || "Name Loading..."}</Text>
                <Text style={styles.text}> Hall: {data.hall_title_en || "Name Loading..."}</Text>
                <Text style={styles.text}> Nationality: {data.NATIONALITY || "Name Loading..."}</Text>
                <Text style={styles.text}> Religion: {data.RELIGION || "Name Loading..."}</Text>
              </VStack>
            </HStack>
          </VStack> */}
        </View>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    width: 395,
    height: 855,
    left: 0,
    top: -4,
    position: 'absolute',
  },
  text: {
    marginTop: 5,
    marginRight: 20,
    marginLeft: 5,
    color: "#fff",
  
    width: 250,
    height: 25,
    marginTop: 10
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',

    marginLeft: 10
  },
  text2: {

    marginRight: 20,
    marginLeft: 80,
    color: "#000",
    width: 250,
    height: 25,
    marginTop: 10,
    alignItems:'center',
    
  

  },
});

export default App;
