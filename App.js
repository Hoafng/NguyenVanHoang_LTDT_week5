import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import vs_blue from './assets/vs_blue.png';
import star from './assets/star.png'

export default function App() {
  return (
    <View style={styles.container}>
      <view style={{textAlign:'center'}}>
        <img style={styles.img} src={vs_blue} alt='vs_blue'></img>
      </view>

        <Text style={styles.text1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <view style={{flexDirection:'row',marginLeft:22}}>
          <img style={styles.star} src={star} alt='star'></img>
          <img style={styles.star} src={star} alt='star'></img>
          <img style={styles.star} src={star} alt='star'></img>
          <img style={styles.star} src={star} alt='star'></img>
          <img style={styles.star} src={star} alt='star'></img>
          <text style={styles.text2}>(Xem 828 đánh giá)</text>
        </view>
        <view>
          <text style={styles.text3}>1.790.000 đ</text>
          <text style={styles.text4}>1.790.000 đ</text>
        </view>
      
      
     
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: 360,
    height:640,
  },
  img:{
    width:301,
    height:361,
    top:-2,
    left:29
  },
  text1:{
    fontSize:16,
    lineHeight:17.58,
    marginLeft:22
  },
  star:{
   width:23,
   height:25,
   top:382,
   marginRight:10, 
   paddingTop:'10px',
   
  },
  text2:{
    fontSize:14, 
    paddingTop:'10px',
  },
  text3:{
    width: '99px',
    height: '21px',
    top: '420px',
    left: '22px',
    position:'absolute',
    fontSize:20,
  },
  text4:{
    width: '99px',
    height: '21px',
    top: '420px',
    left: '162px',
    position:'absolute',
    fontSize:20,
  },
});
