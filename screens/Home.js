import { View, Text,TextInput,Image, FlatList, ScrollView } from 'react-native'
import NavMore from '../components/NavMore'
import FlatLst from '../components/FlatLst'
import CateItem from '../components/CateItem'

const Home = () => {
  return (
    <View style={{backgroundColor: '#FCFCFC', marginVertical: 44}}>
      <View style={{marginHorizontal: 18}}>
        <View style={{backgroundColor: '#fff',alignItems: 'center',flexDirection: 'row', paddingVertical: 12}}>
            <View>
                <Image style={{width: 28}} source={require('../assets/iconSearch.png')}/>
            </View>
            <TextInput style={{fontSize: 18,flex:1, marginLeft: 8, paddingHorizontal: 8}} placeholder='Search'/>
          <View style={{backgroundColor: '#A58EFF', borderRadius: 12, height: 64, width: 64}}>
            <Image style={{width: '100%'}} source={require('../assets/Icon_Filter.png')}/>
          </View>
        </View>
        <ScrollView>
          <View>
            <NavMore tit={'Next to you'} btn={'On the map'}/>
            <View>
              <FlatList data={[1,2,3]} renderItem={FlatLst} horizontal/>
            </View>
          </View>
          <View>
            <NavMore tit={'Categories'} btn={'See all'}/>
            <View style={{gap: 18}}>
            <CateItem/>
            <CateItem/>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home