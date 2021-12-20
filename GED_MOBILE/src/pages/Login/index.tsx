import React, {} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { styleLogin } from '../../styles';
import { Button } from 'react-native-elements/dist/Button';




const Login: React.FC = () => {

    return(
        <View style={styleLogin.loginCard}>
           <Text style={styleLogin.text1}>Log In</Text>

           
        <View style={styleLogin.divInput}>
        <Text style={styleLogin.text2}>EMAIL OR USERNAME</Text>
           <Input  placeholder='Username or email' style={styleLogin.input} /> 
                
           <Text style={styleLogin.text2}>Password</Text>
                <Input placeholder='password'   style={styleLogin.input}/>
        </View>

        <Text style={styleLogin.text3}><TouchableOpacity>Forgot password ?</TouchableOpacity> </Text>
        <Button style={styleLogin.botaoEntrar} title="Log in" titleStyle={{color: '#797979',fontSize: 20,fontWeight: 
                                                        "bold",textAlign: "center",}}/>
        <Text style={styleLogin.text4}>Don't have an account? <TouchableOpacity>Create Account</TouchableOpacity> </Text>
        </View>
    );
}

export default Login;


