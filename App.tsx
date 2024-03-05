import React, {useState,useEffect} from 'react';
import { Image, StyleSheet,Text,TouchableOpacity, View} from 'react-native';

function App(): React.JSX.Element{
  return(
    <View style={styles.container}>
 <Image source={require('./src/assets/images/crono.png')}/>

 <Text style={styles.timer}>00:00:00</Text>

 <View style={styles.btnArea}>
  <TouchableOpacity style={styles.btn}>
  <Text style={styles.btnTexto}>Iniciar</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btn}>
  <Text style={styles.btnTexto}>Limpar</Text>
  </TouchableOpacity>
 </View>
 <View style={styles.areaTempo}>
  <Text style={styles.textoCorrida}>Ultimo Tempo: 00:00:00</Text>

 </View>
    </View>
  );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00aeef'
    },
    areaTempo:{
     marginTop:40,
    },
     textoCorrida:{
       fontSize: 20,
       color: '#FFF',
       fontStyle: 'italic'
     },
     timer:{
  marginTop: -160,
  fontSize:45,
  fontWeight: 'bold',
  color: '#FFF'
     },
     btn:{
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#FFF',
      height:40,
      width:17,
      borderRadius:20
     },

     btnTexto:{
       fontSize:20,
       fontWeight: 'bold',
       color: '#00aeef'
     },
     btnArea:{
        flexDirection:'row',
        marginTop: 130,
        height:40,
     }
  });


export default App;