import * as React from 'react';
import { Button,Dimensions, Image, View, TouchableOpacity, ImageBackground, Text, ScrollView, AsyncStorage, TouchableHighlight, StyleSheet} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { createAppContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as Font from 'expo-font'
import * as ImageManipulator from 'expo-image-manipulator';
import styles from './styles';
import { Audio } from 'expo-av';

const STORAGE_KEY = 'SymudSelog'


class GardenScreen extends React.Component {
  static navigationOptions = {
    header: null
}


  state = {
    image: null,item: 'glaswellt / grass', location: 'home', width: Dimensions.get('window').width, height: Dimensions.get('window').height-Constants.statusBarHeight,max: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height)
    ,itemHeight: {height: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 6}, listText: {fontSize: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 40}
  };

  constructor (props) {
    super(props);
    this.audioPlayer = new Audio.Sound();
  }
  async componentDidMount() {
  await Font.loadAsync({
    'paytone-one-regular': require('./assets/fonts/RifficFree-Bold.ttf'),
   
  });
  this.setState({ fontLoaded: true });

  console.log(this.props.route.params.location)
  this.setState({location: this.props.route.params.location})
  this.getPermissionAsync();
  this.load(this.props.route.params.first);

  //  
}


onLayout = (e) => {
  this.setState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-Constants.statusBarHeight,
    max: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height),
    itemHeight: {height: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 4},
    listText: {fontSize: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 50}
  
  })
}

  render() {

    const gardenstyles = StyleSheet.create({
     
      instructionsText: {
        fontSize: this.state.max/40,
      },
      instructionsSubText: {
        fontSize: this.state.max/40,
      },
    
    });
    

   
    
   

    let { image } = this.state;

    return (
      <View onLayout={this.onLayout} style={ [styles.container, styles.brownyGreen]}>
        <View style={styles.listHolder}>
          <ScrollView>
            
            {this.state.fontLoaded && this.state.location === "garden" ? ( <ListItem height={this.state.itemHeight} itemname="glaswellt / grass" imagename= {require('./assets/images/glaswellt.png')} soundfile={require('./assets/sounds/Glaswellt.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)} /> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? ( <ListItem height={this.state.itemHeight} itemname="blodau / flowers" imagename= {require('./assets/images/blodau.png')} soundfile={require('./assets/sounds/Blodau.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)} /> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="llygaid y dydd / daisy" imagename= {require('./assets/images/llygadydydd.png')} soundfile={require('./assets/sounds/LlygaidyDydd.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText}  goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="dant y llew / dandelion" imagename= {require('./assets/images/dantyllew.png')} soundfile={require('./assets/sounds/DantyLlew.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="gwenynen / bee" imagename= {require('./assets/images/gwenyn.png')} soundfile={require('./assets/sounds/Gwenynen.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="morgrugyn / ant" imagename= {require('./assets/images/morgrugyn.png')} soundfile={require('./assets/sounds/Morgrugyn.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="titw tomos las / blue tit" imagename= {require('./assets/images/titwtomoslas.png')} soundfile={require('./assets/sounds/TitwTomos.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="robin goch / robin" imagename= {require('./assets/images/robingoch.png')} soundfile={require('./assets/sounds/RobinGoch.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="cennin Pedr / daffodils" imagename= {require('./assets/images/cenninpedr.png')} soundfile={require('./assets/sounds/CenninPedr.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="pry genwair / earthworm" imagename= {require('./assets/images/prygenwair.png')} soundfile={require('./assets/sounds/PryGenwair.mp3')}  backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "garden" ? (<ListItem height={this.state.itemHeight} itemname="draenog / hedgehog" imagename= {require('./assets/images/draenog.png')} soundfile={require('./assets/sounds/Draenog.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText}goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            
            
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="pysgodyn / fish" imagename= {require('./assets/images/pysgodyn.png')} soundfile={require('./assets/sounds/Pysgodyn.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="gwymon / seaweed" imagename= {require('./assets/images/gwymon.png')} soundfile={require('./assets/sounds/Gwymon.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="pwrs y fôr-forwyn / mermaid's purse" imagename= {require('./assets/images/pwrsyfôr-forwyn.png')} soundfile={require('./assets/sounds/PwrsyFor-forwyn.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="sglefren fôr / jellyfish" imagename= {require('./assets/images/sglefrenfôr.png')} soundfile={require('./assets/sounds/SglefrenFor.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="gwylan / seagull" imagename= {require('./assets/images/gwylan.png')} soundfile={require('./assets/sounds/Gwylan.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="clustog Fair / sea pink (mary's pillow)" imagename= {require('./assets/images/clustogfair.png')} soundfile={require('./assets/sounds/ClustogFair.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="cragen / shell" imagename= {require('./assets/images/cragen.png')} soundfile={require('./assets/sounds/Cragen.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="cranc / crab" imagename= {require('./assets/images/cranc.png')} soundfile={require('./assets/sounds/Cranc.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="moresg / marram grass" imagename= {require('./assets/images/moresg.png')} soundfile={require('./assets/sounds/Moresg.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="tonnau / waves" imagename= {require('./assets/images/tonnau.png')} soundfile={require('./assets/sounds/Tonnau.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "seaside" ? (<ListItem height={this.state.itemHeight} itemname="tywod / sand" imagename= {require('./assets/images/tywod.png')} soundfile={require('./assets/sounds/Tywod.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }

            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="coeden / tree" imagename= {require('./assets/images/coeden.png')} soundfile={require('./assets/sounds/Coeden.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="sycamorwydden / sycamore" imagename= {require('./assets/images/sycamorwydden.png')} soundfile={require('./assets/sounds/Sycamorwydden.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="celynnen / holly" imagename= {require('./assets/images/celynnen.png')} soundfile={require('./assets/sounds/Celynnen.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="derwen / oak" imagename= {require('./assets/images/derwen.png')} soundfile={require('./assets/sounds/Derwen.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="onnen / ash" imagename= {require('./assets/images/onnen.png')} soundfile={require('./assets/sounds/Onnen.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="pinwydden / pine" imagename= {require('./assets/images/pinwydden.png')} soundfile={require('./assets/sounds/Pinwydden.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="collen / hazelnut" imagename= {require('./assets/images/collen.png')} soundfile={require('./assets/sounds/Collen.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="tylluan / owl" imagename= {require('./assets/images/tylluan.png')} soundfile={require('./assets/sounds/Tylluan.mp3')} backgroundColour={styles.darkBlue} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="cnocell y coed / woodpecker" imagename= {require('./assets/images/cnocellycoed.png')} soundfile={require('./assets/sounds/CnocellyCoed.mp3')} backgroundColour={styles.lightYellow} textSize={this.state.listText} textColour={ styles.darkText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            {this.state.fontLoaded && this.state.location === "woods" ? (<ListItem height={this.state.itemHeight} itemname="chwilen / beetle" imagename= {require('./assets/images/chwilen.png')} soundfile={require('./assets/sounds/Chwilen.mp3')} backgroundColour={styles.orange} textSize={this.state.listText} textColour={ styles.lightText} goDetailsFunction = {this.goDetails.bind(this)}/> ) : null }
            </ScrollView>
          </View>
          <View style={styles.mainHolder}>
          <View style={styles.instructions}>
             {this.state.fontLoaded ? (<Text style={[styles.instructionText, gardenstyles.instructionsText]}>Clicia ar lun i glywed yr enw. Chwilia amdanynt a beth am dynnu llun o’r pethau hyn ar dy gamera?</Text>) : null }
             {this.state.fontLoaded ? (<Text style={[styles.instructionSubText, gardenstyles.instructionsSubText]}>Click on the pictures to hear the names in Welsh. Can you find them and take a picture of them with your camera?</Text>) : null }
              </View> 
            <View style={styles.buttons}> 
              <View style={[styles.grid] }>      
                <View style={styles.gridRow}>
                  <View style={styles.gridItem}>
                    <TouchableOpacity onPress={this._takePicture}> 
                      <Image source={require('./assets/images/takepic.png')} style={styles.framedImage}/>
                      </TouchableOpacity>
                      </View>
                    <View style={styles.gridItem}>
                      <TouchableOpacity onPress={this._choosePicture} >
                        <Image source={require('./assets/images/hal.png')} style={styles.framedImage}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                <View style={styles.gridRow}>
                  <View style={styles.gridItem}>
                    <TouchableOpacity onPress={this._goBack}>
                      <Image source={require('./assets/images/goback.png')} style={styles.framedImage}/>
                      </TouchableOpacity>
                    </View>
                  <View style={styles.gridItem}>
                    <TouchableOpacity onPress={this._goBig}>
                      {image &&
                      <ImageBackground resizeMode= 'contain' source={{ uri: image }} style={styles.framedStill} >
                        <Image source={require('./assets/images/yellowframe.png')} style={styles.imageFrame} />  
                        </ImageBackground> } 
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
      
      
      
      
      </View>
    );
  }

  getPermissionAsync = async () => {
    // if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { status2 } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      // if (status2 !== 'granted') {
      //   alert(status2+' Sorry, we need camera permissions to make this work!');
      // }
    // }
  }

  _goBack = () => {
    this.props.navigation.navigate('Home');
  }

  _goBig = () => {
    this.props.navigation.navigate('Details',{imagename: this.state.image, location: this.state.location})
  }
   goDetails(item,soundfile) {

   
    
    //this.props.navigation.navigate('Details', {item: item, imagename: imagename, soundfile: soundfile});
    this.setState({item:item})
    this.load(item)
    this.playSound(soundfile)
  
  
    
  
   }
  
   playSound = async (soundfile) => {
      
    //const { sound } = await Audio.Sound.createAsync(soundfile, { shouldPlay: true, isLooping: false, volume: 0.6 });
          
    //this.sound = sound;

    await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(soundfile);
  await this.audioPlayer.playAsync();
  
  }
  _takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
    });
  
  
    console.log(result);
  
    if (!result.cancelled) {
      const asset = await MediaLibrary.createAssetAsync(result.uri);
      const album = await MediaLibrary.getAlbumAsync('SymudSelog')
      if( album === null) {
        let albumCreated = await MediaLibrary.createAlbumAsync('SymudSelog', asset,false);
        if (albumCreated) {
          //MediaLibrary.getAssetsAsync(album);
        } else {
          //handle album creation error
        }
     
      } else {
        let assetAdded = await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        if (assetAdded === true) {
          //MediaLibrary.getAssetsAsync(album);
        } else {
          // handle asset add error
        }
      }
      //this.setState({ image: result.uri });
      this.save(result.uri)
      
    }
  
  };
  
  
  _choosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
  
    
  
    console.log(result);
  
    if (!result.cancelled) {
      
      var smallest = Math.min(result.height, result.width)
     
      console.log(smallest)
      var originX=0
      var originY=0
      if(result.height == smallest) {
        console.log("Landscape")
        
        originX=(result.width /2)  - (result.height /2) 
      } else {
        console.log("Portrait")
        
        originY=(result.height /2) - (result.width / 2) 
        
      }
      const crop = {
       
        originX: originX,
        originY: originY,
        width: smallest,
        height: smallest,
      };
  
     
      const manipResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ crop }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );
      const asset = await MediaLibrary.createAssetAsync(manipResult.uri);
      const album = await MediaLibrary.getAlbumAsync('SymudSelog')
      if( album === null) {
        let albumCreated = await MediaLibrary.createAlbumAsync('SymudSelog', asset,false);
        if (albumCreated) {
          //MediaLibrary.getAssetsAsync(album);
        } else {
          //handle album creation error
        }
     
      } else {
        let assetAdded = await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        if (assetAdded === true) {
          //MediaLibrary.getAssetsAsync(album);
        } else {
          // handle asset add error
        }
      }
      this.setState({ image: manipResult.uri });
  
      this.save(manipResult.uri)
    
      //this.setState({ image: result.uri });
    }
  };

  load = async (item) => {
    try {
      const name = await AsyncStorage.getItem(item)

      if (name !== null) {
        console.log(name)
        this.setState({image: name})
      }  else  {
        this.setState({image: null})
      }
    } catch (e) {
      console.error('Failed to load .')
    }
  }

  save = async (name) => {
    console.log(this.state.item)
    
    try {
      await AsyncStorage.setItem(this.state.item, name)

      this.setState({image: name})
    } catch (e) {
      console.error('Failed to save name.')
    }
  }
  
}



class ListItem extends React.Component {

 

 

  render() {
    
    return (
      <TouchableHighlight onPress={() => this.props.goDetailsFunction(this.props.itemname, this.props.soundfile)}>
                  
        <View style={[styles.listItems,this.props.height, this.props.backgroundColour]}>

          <ImageBackground resizeMode='contain' source={require('./assets/images/cirlce.png')} style={styles.listCirlce}>

            <ImageBackground resizeMode='contain' source={this.props.imagename} style={styles.listImage}>

            <Text style={[styles.listText, this.props.textColour, this.props.textSize]}>{this.props.itemname}</Text>
{/* 
              <ImageBackground source={require('./assets/tickbox.png')} style={styles.lilicon}>

              <Image source={require('./assets/tick.png')} style={styles.lilicon} />

              </ImageBackground> */}

              </ImageBackground>

            </ImageBackground>

            </View>
        
        

        </TouchableHighlight>

    )
  }


  
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
}
  state = {
    image: null,
  };
async componentDidMount () {
  // await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
  // if (Math.max( Dimensions.get('window').width,  Dimensions.get('window').height == Dimensions.get('window').height)) {
  //   await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT);
  //   } else {
  //     await ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
  //   }
}
  render() {
    let { image } = this.state;

    return (
      <View style={ styles.container}>
        <View style={[styles.grid] }>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Garden', {location: "garden", first:"glaswellt / grass"});}}>
                <Image source={require('./assets/images/ynyrardd.png')} style={styles.buttonBackImage} />
                </TouchableOpacity>
              </View>
            <View style={styles.gridItem}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Garden', {location: "seaside", first: "pysgodyn / fish"});}}>
                <Image source={require('./assets/images/arytraeth.png')} style={styles.buttonBackImage}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Garden', {location: "woods", first: "coeden / tree"});}}>
                  <Image source={require('./assets/images/amdroircoed.png')} style={styles.buttonBackImage}/>
                  </TouchableOpacity>
                </View>
              <View style={styles.gridItem}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('SongChoice')}}>
                <Image source={require('./assets/images/caneuonchwarae.png')} style={styles.buttonBackImage}/>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
    );
  }
  
}

class SongChoiceScreen extends React.Component {
  static navigationOptions = {
    header: null
}
constructor(props)
{
  super(props);

  this.audioPlayer = new Audio.Sound();

}

  //const { state } = this.props.navigation;
state = {image: this.props.route.params.imagename, 
itemHeight: {height: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 7},
itemWidth: {width: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 7}}
 
componentDidMount() {
  //console.log( this.props.route.params.item)
  
}

onLayout = (e) => {
  this.setState({
    
   
    itemHeight: {height: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 7},
    itemWidth: {width: Math.max( Dimensions.get('window').width,  Dimensions.get('window').height) / 7}
  
  })
}
  render() {
    let { image } = this.state;
    

    return (
      <View style={styles.bigPicure}>
        <ImageBackground resizeMode="cover" source={require('./assets/images/playground.png')} style={styles.imageBackground} >
        <View onPress={this._goBack} style={styles.lyricHolder}>
        <TouchableOpacity onPress={() => this._goSong(require('./assets/sounds/Llanfairpwll.mp3'), "llanfairpg")}>
            <Image source={require('./assets/images/llanfairpg.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goSong(require('./assets/sounds/Sgipioffitrwydd.mp3'), "sgipo")}>
            <Image source={require('./assets/images/sgipo.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goSong(require('./assets/sounds/Anfonaislythyr.mp3'), "anfonaislythyr")}>
            <Image source={require('./assets/images/anfonaislythyr.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._goSong(require('./assets/sounds/Bethwelaistti.mp3'), "bethwelaist")}>
          <Image source={require('./assets/images/bethwelaist.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goSong(require("./assets/sounds/Pasio'rbêl.mp3"), "pasiorbel")}>
            <Image source={require('./assets/images/pasiorbel.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goSong(require('./assets/sounds/Pwysyddmlaen.mp3'), "pwysyddmlaen")}>
            <Image source={require('./assets/images/pwysyddmlaen.png')} style={[styles.songButton, this.state.itemHeight, this.state.itemWidth]}/>
            </TouchableOpacity>
          
          </View>
        <TouchableOpacity onPress={this._goBack} style={styles.toolBar}>
          <Image source={require('./assets/images/goback.png')} style={styles.framedImage}/>
          </TouchableOpacity> 
          </ImageBackground>
      </View>
    );
  }



  
  _goSong(e,s) {
    console.log(e)
    this.props.navigation.navigate('Songs', {song: e, songname: s});
  }



  _goBack = async () => {
    await this.audioPlayer.unloadAsync()
    this.props.navigation.navigate('Home');
  }

  

  
}
class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null
}
  state = {
    
  };

  
  //const { state } = this.props.navigation;
state = {image: this.props.route.params.imagename }
 
componentDidMount() {
  //console.log(this.props.navigation.getParam('itme'))
}


  render() {
    let { image } = this.state;

    return (
      <View style={styles.colContainer}>
        <View onPress={this._goBack} style={styles.bigPicure}>
          <ImageBackground resizeMode="contain" source={{uri:image }} style={styles.imageBackground} >
            <Image source={require('./assets/images/yellowframe.png')} style={styles.framedImage}/>
            </ImageBackground>
          </View>
        <TouchableOpacity onPress={this._goBack} style={styles.toolBar}>
        <Image source={require('./assets/images/goback.png')} style={styles.framedImage}/>
          </TouchableOpacity> 
      </View>
    );
  }



  
  playSound = async () => {
    
    const { sound } = await Audio.Sound.createAsync(this.state.soundfile, { shouldPlay: true, isLooping: false, volume: 0.6 });
          
    this.sound = sound;

  }
  _goBack = () => {
    this.props.navigation.navigate('Garden',{location: this.props.route.params.location});
  }

  

  
}

class SongScreen extends React.Component {
  static navigationOptions = {
    header: null
}
  state = {
    
  };
constructor (props) {
  super(props);
  this.audioPlayer = new Audio.Sound();
}
  
  //const { state } = this.props.navigation;
state = {image: this.props.route.params.song }
 
componentDidMount = async () => {
  await Font.loadAsync({
    'paytone-one-regular': require('./assets/fonts/PaytoneOne-Regular.ttf'),
   
  });
  this.setState({ fontLoaded: true });
  this.setState({ location: this.props.route.params.songname})
  console.log(this.props.route.params.song)
  try {
    await this.audioPlayer.unloadAsync()
    await this.audioPlayer.loadAsync(this.props.route.params.song);
    await this.audioPlayer.playAsync();
  } catch (err) {
    console.warn("Couldn't Play audio", err)
  }
}


  render() {
    let { image } = this.state;
    

  return (
    <View style={styles.bigPicure}>
      <ImageBackground resizeMode="cover" source={require('./assets/images/playground.png')} style={styles.imageBackground} >
      <View style={styles.lyricHolder}>
        <ScrollView style={styles.semiTrans}>
        {this.state.fontLoaded && this.state.location === "pwysyddmlaen" ? (<Text style={styles.songTextCym}>
          Un, dau, tri,{"\n"}
          mam yn dal y pry!{"\n"}
          Pry wedi marw,{"\n"}
          mam yn crio’n arw!{"\n"}
          Allan â ti!
        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "pwysyddmlaen" ? (<Text style={styles.songTextEng}>
          One, two, three,{"\n"}
          mum catches a fly!{"\n"}
          The fly is dead,{"\n"}
          mum cries terribly!{"\n"}
          Out you go!
        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "bethwelaist" ? (<Text style={styles.songTextCym}>
          Draenog welais i yn yr ardd. Beth welaist ti?{"\n"}
          Gwenynen a draenog welais i yn yr ardd. Beth welaist ti?{"\n"}
          Dant y llew, gwenynen a draenog welais i yn yr ardd. Beth welaist ti?{"\n"}
          Robin goch, dant y llew, gwenynen a draenog welais i yn yr ardd. Beth welaist ti?{"\n"}
          Cennin Pedr, robin goch, dant y llew, gwenynen a draenog welais i yn yr ardd. Beth welaist ti?{"\n"}
          Sbwriel, cennin Pedr, robin goch, dant y llew, gwenynen a draenog welais i yn yr ardd.{"\n"}
          Ych-a-fi! Cofiwch glirio’ch sbwriel!{"\n"}
          {"\n"}
          Chwilen welais i yn y goedwig. Beth welaist ti?{"\n"}
          Derwen a chwilen welais i yn y goedwig. Beth welaist ti?{"\n"}
          Tylluan, derwen a chwilen welais i yn y goedwig. Beth welaist ti?{"\n"}
          Celynnen, tylluan, derwen a chwilen welais i yn y goedwig. Beth welaist ti?{"\n"}
          Pinwydden, celynnen, tylluan, derwen a chwilen welais i yn y goedwig. Beth welaist ti?{"\n"}
          Sbwriel, pinwydden, celynnen, tylluan, derwen a chwilen welais i yn y goedwig.{"\n"}
          Ych-a-fi! Cofiwch glirio’ch sbwriel!{"\n"}
          {"\n"}
          Gwymon welais i ar lan y môr. Beth welaist ti?{"\n"}
          Cragen a gwymon welais i ar lan y môr. Beth welaist ti?{"\n"}
          Cranc, cragen a gwymon welais i ar lan y môr. Beth welaist ti?{"\n"}
          Tywod, cranc, cragen a gwymon welais i ar lan y môr. Beth welaist ti?{"\n"}
          Tonnau, tywod, cranc, cragen a gwymon welais i ar lan y môr. Beth welaist ti?{"\n"}
          Sbwriel, tonnau, tywod, cranc, cragen a gwymon welais i ar lan y môr.{"\n"}
          Ych-a-fi! Cofiwch glirio’ch sbwriel!{"\n"}
        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "bethwelaist" ? (<Text style={styles.songTextEng}>
          A hedgehog is what I saw in the garden. What did you see?{"\n"}
          A bee and a hedgehog is what I saw in the garden. What did you see?{"\n"}
          A dandelion, bee and hedgehog is what I saw in the garden. What did you see?{"\n"}
          A robin, dandelion, bee and hedgehog is what I saw in the garden. What did you see?{"\n"}
          A daffodil, robin, dandelion, bee and hedgehog is what I saw in the garden. What did you see?{"\n"}
          Rubbish, a daffodil, robin, dandelion, bee and hedgehog is what I saw in the garden.{"\n"}
          Ych-a-fi (gross!) Remember to clear your rubbish!{"\n"}
          {"\n"}
          A beetle is what I saw in the woods. What did you see?{"\n"}
          An oak and a beetle is what I saw in the woods. What did you see?{"\n"}
          An owl, oak and a beetle is what I saw in the woods. What did you see?{"\n"}
          A holly tree, owl, oak and a beetle is what I saw in the woods. What did you see?{"\n"}
          A pine tree, holly tree, owl, oak and a beetle is what I saw in the woods. What did you see?{"\n"}
          Rubbish, a pine tree, holly tree, owl, oak and a beetle is what I saw in the woods.{"\n"}
          Ych-a-fi! (gross!) Remember to clear your rubbish!{"\n"}
          {"\n"}
          Seaweed is what I saw at the seashore. What did you see?{"\n"}
          A shell and seaweed is what I saw at the seashore. What did you see?{"\n"}
          A crab, shell and seaweed is what I saw at the seashore. What did you see?{"\n"}
          Sand, a crab, shell and seaweed is what I saw at the seashore. What did you see?{"\n"}
          Waves, sand, a crab, shell and seaweed is what I saw at the seashore. What did you see?{"\n"}
          Rubbish, waves, sand, a crab, shell and seaweed is what I saw at the seashore.{"\n"}
          Ych-a-fi! (gross!) Remember to clear your rubbish{"\n"}

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "llanfairpg" ? (<Text style={styles.songTextCym}>
          Llan-fair-{"\n"}
          pwll-gwyn-gyll-{"\n"}
          go-ger-{"\n"}
          y-chwyrn-dro-bwll-{"\n"}
          llan-ty-sil-io-{"\n"}
          go-go-goch!{"\n"}
          {"\n"}
          Llan-fair-{"\n"}
          pwll-gwyn-gyll-{"\n"}
          go-ger-{"\n"}
          y-chwyrn-dro-bwll-{"\n"}
          llan-ty-sil-io-{"\n"}
          go-go-goch!{"\n"}
          {"\n"}
          Llan-fair-{"\n"}
          pwll-gwyn-gyll-{"\n"}
          go-ger-{"\n"}
          y-chwyrn-dro-bwll-{"\n"}
          llan-ty-sil-io-{"\n"}
          go-go-goch!{"\n"}

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "llanfairpg" ? (<Text style={styles.songTextEng}>
          Pronounce:{"\n"}
          llan-vire-{"\n"}
          pooll-guin-gill-{"\n"}
          go-ger-{"\n"}
          u-queern-draw-booll-{"\n"}
          llan-du-sil-yaw-{"\n"}
          go-go-goch!{"\n"}
          {"\n"}
          Words:{"\n"}
          {"\n"}
          Church-Mary-{"\n"}
          pool-white-hazel-{"\n"}
          be-side-{"\n"}
          the-fierce-whirl-pool-{"\n"}
          saint-Ty-sil-io-{"\n"}
          go-go-red!{"\n"}
          {"\n"}
          Meaning:{"\n"}
          The church of St. Mary in the hollow of white hazel trees near the rapid whirlpool by the church of Tysilio near the red cave. 

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "anfonaislythyr" ? (<Text style={styles.songTextCym}>
          Anfonais lythyr at fy ffrind{"\n"}
          ac ar y ffordd fe’i collais.{"\n"}
          Mae rhywun wedi’i godi o{"\n"}
          a’i roi o yn ei boced.{"\n"}
          Nid y fi, nid y fi, nid y fi…
        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "anfonaislythyr" ? (<Text style={styles.songTextEng}>
          I sent a letter to my friend{"\n"}
          and on the way I lost it.{"\n"}
          One of you have taken it{"\n"}
          and put it in your pocket.{"\n"}
          Not me, not me, not me….{"\n"}
        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "sgipo" ? (<Text style={styles.songTextCym}>
          Sgip, sgip, sgipio dwy droed.{"\n"}
          Sgip, sgip, sgipio dwy droed.{"\n"}
          Sgip, sgip, sgipio dwy droed.{"\n"} 
          Troi a throi a neidio.{"\n"}
          {"\n"}
          Sgip, sgip, sgip am yn ail.{"\n"}
          Sgip, sgip, sgip am yn ail.{"\n"}
          Sgip, sgip, sgip am yn ail.{"\n"}
          Troed dde, troed chwith, troed dde.{"\n"}
          {"\n"}
          Hop, hop, hopian troed dde.{"\n"}
          Hop, hop, hopian troed dde.{"\n"}
          Hop, hop, hopian troed dde.{"\n"}
          Hopian ar y droed dde.{"\n"}
          {"\n"}
          Hop, hop, hopian troed chwith.{"\n"}
          Hop, hop, hopian troed chwith.{"\n"}
          Hop, hop, hopian troed chwith.{"\n"}
          Hopian ar y droed chwith.{"\n"}
          {"\n"}
          Ffrind, ffrind, sgipio efo ffrind.{"\n"}
          Ffrind, ffrind, sgipio efo ffrind.{"\n"}
          Ffrind, ffrind, sgipio efo ffrind.{"\n"}
          Gweithio gyda’n gilydd.{"\n"}

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "sgipo" ? (<Text style={styles.songTextEng}>
          Skip, skip, two feet skipping.{"\n"}
          Skip, skip, two feet skipping.{"\n"}
          Skip, skip, two feet skipping.{"\n"}
          Turning, turning, jumping.{"\n"}
          {"\n"}
          Skip, skip, skip take it in turn.{"\n"}
          Skip, skip, skip take it in turn.{"\n"}
          Skip, skip, skip take it in turn.{"\n"}
          Right foot, left foot, right foot.{"\n"}
          {"\n"}
          Hop, hop, right foot hop.{"\n"}
          Hop, hop, right foot hop.{"\n"}
          Hop, hop, right foot hop.{"\n"}
          Hopping on the right foot.{"\n"}
          {"\n"}
          Hop, hop, left foot hop.{"\n"}
          Hop, hop, left foot hop.{"\n"}
          Hop, hop, left foot hop.{"\n"}
          Hopping on the left foot.{"\n"}
          {"\n"}
          Friends, friends, skipping with a friend.{"\n"}
          Friends, friends, skipping with a friend.{"\n"}
          Friends, friends, skipping with a friend.{"\n"}
          Working well together.

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "pasiorbel" ? (<Text style={styles.songTextCym}>
          Taflu’r bêl yn ôl a ’mlaen.{"\n"}
          Taflu, dal, dychwelyd.{"\n"}
          Pan fo’n mynd yn hawdd i mi,{"\n"}
          rhaid i mi newid patrwm.{"\n"}
          {"\n"}
          Bowns ymlaen a bowns yn ôl.{"\n"}
          Mae’r bêl yn dal i fownsio.{"\n"}
          Bowns ymlaen a bowns yn ôl.{"\n"}
          Rhaid i ni nawr gyflymu.{"\n"}
          {"\n"}
          Un llaw nawr i daflu’r bêl{"\n"}
          ac un llaw i’w ddychwelyd.{"\n"}
          Llaw dde sydd yn well i mi{"\n"}
          ond ella chwith i chdithau.{"\n"}
          {"\n"}
          Cicio nôl a chicio mlaen.{"\n"}
          Cawn arfer fel pêl-droedwyr.{"\n"}
          Cic troed dde a chic troed chwith,{"\n"}
          i basio dros dîm Cymru!{"\n"}

        </Text>) : null }
        {this.state.fontLoaded && this.state.location === "pasiorbel" ? (<Text style={styles.songTextEng}>
          Throw the ball here back and forth.{"\n"}
          Throw, catch and return it.{"\n"}
          When it is too easy for me,{"\n"}
          I will change the pattern.{"\n"}
          {"\n"}
          Bouncing forward and then back.{"\n"}
          The ball it is still bouncing.{"\n"}
          Bouncing forward and then back.{"\n"}
          We’ll have to now speed up.{"\n"}
          {"\n"}
          One hand now to throw the ball{"\n"}
          and one hand to return it.{"\n"}
          For me the right hand suits me best{"\n"}
          but maybe left for you.{"\n"}
          {"\n"}
          Kicking back and kicking forth.{"\n"}
          We’ll practice like footballers.{"\n"}
          Kick with the right and kick with the left,{"\n"}
          to pass the ball for team Wales!

        </Text>) : null }
        </ScrollView>

 
        
      </View>
      <TouchableOpacity onPress={this._goBack} style={styles.toolBar}>
        <Image source={require('./assets/images/goback.png')} style={styles.framedImage}/>
      </TouchableOpacity> 
      </ImageBackground>
    </View>
  );
}

playSound1 = async () => {
  try {
    await this.audioPlayer.unloadAsync()
    await this.audioPlayer.loadAsync(require("./assets/sounds/Anfonaislythyr.mp3"));
    await this.audioPlayer.playAsync();
  } catch (err) {
    console.warn("Couldn't Play audio", err)
  }
}

playSound2 = async () => {
try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(require("./assets/sounds/Bethwelaistti.mp3"));
  await this.audioPlayer.playAsync();
} catch (err) {
  console.warn("Couldn't Play audio", err)
}
}

playSound3 = async () => {
try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(require("./assets/sounds/Llanfairpwll.mp3"));
  await this.audioPlayer.playAsync();
} catch (err) {
  console.warn("Couldn't Play audio", err)
}
}

playSound4 = async () => {
try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(require("./assets/sounds/Pasio'rbêl.mp3"));
  await this.audioPlayer.playAsync();
} catch (err) {
  console.warn("Couldn't Play audio", err)
}
}

playSound5 = async () => {
try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(require("./assets/sounds/Pwysyddmlaen.mp3"));
  await this.audioPlayer.playAsync();
} catch (err) {
  console.warn("Couldn't Play audio", err)
}
}

playSound6 = async () => {
try {
  await this.audioPlayer.unloadAsync()
  await this.audioPlayer.loadAsync(require("./assets/sounds/Sgipioffitrwydd.mp3"));
  await this.audioPlayer.playAsync();
} catch (err) {
  console.warn("Couldn't Play audio", err)
}
}



_goBack = async () => {
  try {
    await this.audioPlayer.unloadAsync()
  } catch (err) {
    console.warn("Couldn't Play audio", err)
  }
  this.props.navigation.navigate('SongChoice');
}
}

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//     Garden: GardenScreen,
//     SongChoice: SongChoiceScreen,
//     Songs: SongScreen
//   },
//   {
//     initialRouteName: 'Home',
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
// }
// );


const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false,headerShown: false }}
      
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="Garden"
        component={GardenScreen}
        initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="SongChoice"
        component={SongChoiceScreen}
        initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="Songs"
        component={SongScreen}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
  );
}
//const AppContainer = createAppContainer(RootStack);

function App() {
  return (
    <NavigationContainer>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}

export default App;
// export default class App extends React.Component {

//   async componentDidMount() {
//     Audio.setAudioModeAsync({

//       allowsRecordingIOS: false,
    
//       interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    
//       playsInSilentModeIOS: true,
    
//       shouldDuckAndroid: true,
    
//       interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,

//       playThroughEarpieceAndroid: false,

//       staysActiveInBackground: false
    
//       });
//   }
  
//   render() {
//     return <AppContainer />;
//   }
// }
