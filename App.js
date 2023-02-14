import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" /> 
     <View style={styles.section1}>
       <Image style={styles.linkedinlogo} source={require('./assets/images/linkedinlogo.png')}/>
       <Text style={{color: '#0B65c0', fontWeight: '700', fontSize: 20}}>Join now</Text>
     </View>

     <View style={styles.section2}>
       <Text style={{fontSize: 35, fontWeight: '700', marginLeft: 20}}>Sign in </Text>
       <TextInput style={styles.mytextinput} placeholder="Email or phone"/>
       <TextInput style={styles.mytextinput} secureTextEntry={true} placeholder="Password"/>

       <View style={styles.section21}>
        <Text style={{color:'grey', fontSize:17, marginLeft: 20,}}>Remember me</Text>
        <Text style={{color:'#0B65C0', fontWeight: '700', fontSize:18}}>  Learn more</Text>
       </View>

       
       <Text style={{color:'#0B65C0', fontWeight: '700', fontSize:18, marginLeft:20}}>Forgot Password</Text>
       <TouchableOpacity>
         <Text style={styles.mybtn1}>Continue</Text>
       </TouchableOpacity>
    

       <View style={styles.section22}>
        <View style={styles.myhr}></View>
        <Text style={styles.ortext}>or</Text>
        <View style={styles.myhr}></View>
       </View>

       
         <TouchableOpacity>
          <View style={styles.mybtn2}>
            <Image style={styles.mybtnicon} source={require('./assets/images/googlelogo.png')}/>
            <Text style={styles.btn2text}>Sign in with Google</Text>
          </View>
         </TouchableOpacity>

         <TouchableOpacity>
          <View style={styles.mybtn2}>
            <Image style={styles.mybtnicon} source={require('./assets/images/applelogo.png')}/>
            <Text style={styles.btn2text}>Sign in with Apple</Text>
          </View>
         </TouchableOpacity>
       
       

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  linkedinlogo: {
    width: 100, 
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20
  },
  section1: {
    flex: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  section2: {
    flex: 0,
    flexDirection: 'column',
    width: '90%'
  },
  mytextinput: {
    fontSize: 17, 
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginLeft: 20,
    height: 38,
    marginTop: 20,
    padding: 0,
  },
  section21: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  mybtn1:{
    backgroundColor: '#0B65C0',
    color: 'white',
    textAlign: 'center',
    marginLeft: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 23,
    padding: 10,
    fontWeight: '700',
    width: '100%'
  },
  section22:{
    flex: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myhr: {
    borderBottomColor: 'grey',
    borderLeftWidth: 1, 
    width: 150
  },
  ortext: {
    color: 'grey',
    fontWeight: '700',
    fontSize: 20,
    padding: 10
  },
  mybtn2: {
    flex: 0,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10, 
    borderRadius: 30,
    marginLeft: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  mybtnicon: {
    width: 20,
    height: 20,
    marginHorizontal: 10 
  },
  btn2text: {
    fontSize: 23
  }
});
