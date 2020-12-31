import {Linking} from 'react-native'

export default (url) => {
  Linking.canOpenURL(url).then((can)=>{
    if(can) Linking.openURL(url)
  })
}