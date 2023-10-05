import { View, Text, Image } from 'react-native'

const Nav = ({tit}) => {
  return (
    <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', paddingHorizontal: 18}}>
      <Image  source={require('../assets/Iicon_Back.png')}/>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 22, fontWeight: 700}}>{tit}</Text>
      </View>
    </View>
  )
}

export default Nav