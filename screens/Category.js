import { Image, ImageBackground } from 'react-native'
import { View, Text } from 'react-native'

const Category = () => {
  return (
    <View style={{borderRadius: 32, overflow: 'hidden'}}>
      <ImageBackground style={{width: '100%', height: 397, borderRadius: 32, overflow: 'hidden'}} source={require('../assets/imgFlowers1.png')}>
       <View style={{justifyContent: 'space-between', flex:1, marginVertical: 44, paddingHorizontal: 32}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={require('../assets/Iicon_Back.png')}/>
                <Image source={require('../assets/iconShare.png')}/>
            </View>
           <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row',gap: 12,paddingHorizontal: 14, alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 999}}>
                    <Image style={{width: 32, height: 32}} source={require('../assets/Ava.png')}/>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{marginHorizontal: 4, fontSize: 18, color: '#fff'}}>Anderson G.</Text>
                            <Image source={require('../assets/Icon_Verify.png')}/>
                        </View>
                        <Text style={{color: '#fff', fontSize: 18}}>* 4.9</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color: '#fff', fontSize: 18}}>Until 26.09</Text>
                </View>
           </View>
       </View>
      </ImageBackground>
      <View>
        
      </View>
    </View>
  )
}

export default Category