import React from 'react';

import { StyleSheet, Dimensions} from 'react-native';

import Constants from 'expo-constants';
import { red, white } from 'ansi-colors';

let width = Dimensions.get('window').width;

let height = Dimensions.get('window').height-Constants.statusBarHeight;

export default StyleSheet.create({
  

  container: {
    flex:1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#313024',
    flexDirection: "row",
    
    
  },
  colContainer: {
    flex:1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#313024',

    
    
  },
  bigPicure: {
    flex: 5,
    flexDirection: 'row', 
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight
  },

  lyricHolder: {
    flex: 5,
    flexDirection: 'row', 
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    
  },
  toolBar: {
    flex:1
  },
  songButton: {
    margin: 5,
    resizeMode: 'stretch'
  },
  imageBackground: {
    flex:1,
    width:'100%'

  },
  hairline: {
    
    backgroundColor: '#A2A2A2',
    height: 2,
    width: "100%"
  },
  
  instructionText: {
        
    fontFamily:'paytone-one-regular',
    color: 'red',
    
    marginBottom: 5
  },
  semiTrans: {
backgroundColor: 'rgba(255, 255, 255, 0.5)',
margin:20, 
  },
  songTextCym:{
    fontFamily:'paytone-one-regular',
    fontSize: 30,
    padding: 10,
    color: "black",
    textAlign: "center"
  },
  songTextEng:{
    fontFamily:'paytone-one-regular',
    fontSize: 30,
    padding: 10,
    color: "red",
    textAlign: "center"
  },
  instructionSubText: {
    
    
    fontFamily:'paytone-one-regular',
    color: 'black',
    
    
    
    marginBottom: 5,
    
  },
    

 lightText: {
  color: '#faeb00',
  textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: '#000',
 },

 darkText: {
  color: '#111'
 },
 cameraHolder: {
  flex:1,
  flexDirection: 'row',
  
},
 camera: {
  
  flex:1,
  resizeMode: 'contain'
  
},
cameraItem: {
  flex:1
},
 
instructions: {
   flex:2,
   backgroundColor: 'white',
   color: 'black',
   borderRadius: 10,
   padding: 5,
   margin:5,
   justifyContent: "space-around"
   
 },
 buttons: {
  flex:3,
  
  
},
 

 darkBlue: {
   backgroundColor: '#1b313e', 
   
 },

 lightYellow: {
  backgroundColor: '#f2ed6a',
 
},
brownyGreen: {
  backgroundColor: '#313024',
  
},
orange: {
  backgroundColor: '#e57700',
  color: '#faeb00',

},

notselected: {
  borderColor: '#313024',
},

selected: {
 borderColor: 'red'
},


  listHolder: {
    flex:1,
   
     
    padding: 5,
    backgroundColor: 'black'
   
  },

  mainHolder: {
    flex:2

  },


  padtop: {
    width:"100%"
  },

  listItems: {
    
    flex:1,
    
    margin:5,
    padding: 5,
 
    
    

  },

  listImage: {

    flex:1,
    

  },

  listCirlce: {

    flex:1,
    

  },

  lilicon: {
    
    width:50,
    height: 50,
    
    resizeMode: "contain"
  },
  
  listText: {
    fontFamily:'paytone-one-regular',
    
    
  },

  grid: {
    flex:1, 
  },
 gridRow: {
    flex:1,
    flexDirection: "row",
 },
 
gridItem: {
  flex:1,},



  buttonBackImage:{
    
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
imageFrame: {

  padding:0,
  margin:0,
  height: "100%",
    width: "100%",
  resizeMode: "contain"

},
  framedImage:{
    padding:0,
    margin:0,
    height:"100%",
    width: "100%",
    resizeMode: "contain"
  },
  framedStill:{
    padding:0,
    margin:0,
    height:"100%",
    width: "100%",
    resizeMode: "contain"
  },




  });