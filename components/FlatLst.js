import { View, Text, ImageBackground, Image } from 'react-native'

const FlatLst = () => {
  return (
    <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 18, overflow: 'hidden' ,padding: 18}}>
      <ImageBackground style={{width: '100%', height: 240, borderRadius: 18, overflow: 'hidden'}} source={require('../assets/imgDogCard.png')}>
        <View style={{padding: 18, justifyContent: 'space-between', flexDirection: 'column', flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, color: '#fff'}}>Until 26.09</Text>
            <Image source={require('../assets/Icon_Like.png')} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 999}}>
            <Image source={require('../assets/Ava.png')}/>
            <Text style={{marginHorizontal: 4, fontSize: 18, color: '#fff'}}>Anderson G.</Text>
            <Image source={require('../assets/Icon_Verify.png')}/>
        </View>
        </View>
      </ImageBackground>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 28}}>
        <Text style={{fontSize: 24, width: '80%'}}>Go for a walk and feed the dog</Text>
        <Image style={{width: 36, height: 36}} source={require('../assets/Icon_Chat.png')}/>
      </View>
    </View>
  )
}

export default FlatLst