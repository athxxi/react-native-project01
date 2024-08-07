import { useState } from 'react';
import { 
   StyleSheet, Text, SafeAreaView , View, Image, Touchable,
   Touchabl, SafeAreaVieweOpacity, TouchableOpacity, TouchableHighlight ,
   Dimensions,StatusBar,Platform,FlatList,Button,
  } from 'react-native';

import PersonalData from './generated.json'

const {width: screenWidth , height: screenHeight} = Dimensions.get('screen');

export default function App() {


  const [selectedItem, setSelectedItem] = useState(null);

  const close = () => setSelectedItem(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.touchableFlatList}>
            <View style={styles.viewInsideFlatList}>
            <Image source={{uri: item.picture}} style={styles.imageFlatList}/>
              <View style={styles.viewDetailsFlatList}>
                  <Text style={styles.textNameFlatList}>{item.name}</Text>
                  <Text style={styles.textCompanyFlatList}>{item.company}</Text>
              </View>
            </View>
    </TouchableOpacity>
  );

                  /*<Text>Age : {item.age}</Text>
                  <Text>Email : {item.email}</Text>*/


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9290c3'} barStyle={'dark-content'}/>

      {
        selectedItem && 
        <View style={styles.viewAtTop}>
            <View style={styles.viewImageButton}>
              <View style={{flex:1 }}><Image source={{uri: selectedItem.picture}} style={styles.imageAtTop}/></View>
              <TouchableOpacity onPress={close} style={styles.closeButton}><Text style={{color: "rgba(83,92,145,1)",fontWeight: "bold"}}>X</Text></TouchableOpacity>
            </View>
              <View style={styles.viewTopInside}>
                <View style={styles.viewTextBox}>
                  <Text style={styles.textNameTop}>{selectedItem.name}</Text>
                  <Text style={styles.textDetails}>Company : {selectedItem.company}</Text>
                  <Text style={styles.textDetails}>Age : {selectedItem.age}</Text>
                  <Text style={styles.textDetails}>Gender : {selectedItem.gender}</Text>
                  <Text style={styles.textDetails}>Email : {selectedItem.email}</Text>
                  <Text style={styles.textDetails}>Phone : {selectedItem.phone}</Text>
                  <Text style={styles.textDetails}>Address : {selectedItem.address}</Text>
                </View>
              </View>
        </View>
      }

      <FlatList 
        data={PersonalData}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={styles.list}
      />

    </SafeAreaView>
  );
}

//[#9290c3] [#535c91] [#1b1a55] [070f2b]
  
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: '#9290c3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    padding: 0,
    alignSelf: 'center'
  },
  touchableFlatList:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewDetailsFlatList:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: 30
    /*marginVertical: 5,
    borderWidth: 5,
    borderColor: '#00ffff',
    borderRadius: 10,
    backgroundColor: '#ffff00',
    width: screenWidth-10,
    height: screenHeight/4,
    */
  },
  viewAtTop:{
    marginVertical: 5,
    borderWidth: 5,
    borderColor: 'rgba(27,26,85,0.8)',
    borderRadius: 10,
    backgroundColor: 'rgba(83,92,145,0.6)',
    width: screenWidth-10,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewInsideFlatList:{ 
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 3,
    borderColor: 'rgba(27,26,85,0.8)',
    borderRadius: 10,
    backgroundColor: 'rgba(83,92,145,0.6)',
    width: screenWidth-20,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  imageAtTop:{
    borderColor: 'rgba(27,26,85,1)',
    borderWidth: 5,
    borderRadius: 15,
    /*borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,*/
    alignSelf: 'center',
    width: 120,
    height: 120,
    margin: 10,
    marginStart: 40
  },
  imageFlatList:{
    width: 100,
    height: 100,
    margin: 20,
    borderColor: 'rgba(27,26,85,0.8)',
    borderWidth: 2,
    borderRadius: 15,
  },
  closeButton:{
    marginTop: 10,
    marginEnd: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(27,26,85,1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20
},
viewTopInside:
{
  marginHorizontal: 20,
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
viewImageButton:{
  flexDirection: 'row'
},
viewTextBox:{
  flexDirection: 'column',
  height: 100,
  width: screenWidth-50, 
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
//text
textNameTop: {
  alignSelf: 'center' ,
  fontWeight: "bold", 
  fontStyle: 'italic',
  fontSize: 20,
  color: '#070f2b',
},
textNameFlatList: {
  //alignSelf: 'flex-end' ,
  fontWeight: "bold", 
  fontStyle: 'italic',
  fontSize: 20,
  color: '#070f2b',
},
textCompanyFlatList: {
  //alignSelf: 'flex-end' ,
  fontWeight: "bold", 
  fontSize: 16,
  color: '#070f2b',
},
textDetails: {
  //alignSelf: 'flex-end' , 
  fontSize: 14,
  fontWeight: "bold", 
  color: '#070f2b',
}
});