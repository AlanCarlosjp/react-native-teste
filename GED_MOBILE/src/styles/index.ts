import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const colors = {
  padrao: '#000000',
  c1: '#FFFF',
  c2: '#777777',
  c3: '#343434',
};


const styleLogin = StyleSheet.create({
  loginCard: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.padrao,
    alignItems: "center",
    justifyContent: "center",
  },
  divInput:{
    borderRadius: 10,
  },
  text1:{
    color: colors.c1,
    fontSize: 45,
    marginBottom: 65,
    marginRight: 150,
    fontWeight: "bold",
  },
  text2:{
    color: colors.c2,
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    
  },
  text3:{
    color: colors.c2,
    fontSize: 15,
    marginTop: 5,
    marginRight: 150,
    fontWeight: "bold",
  },
  text4:{
    color: colors.c2,
    fontSize: 13,
    marginBottom: 100,
    marginRight: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 10,
    width: 300,
    padding: 20,
    backgroundColor: colors.c3,
  },

  botaoEntrar: {
    backgroundColor: colors.c3,
    borderRadius: 10,
    margin: 50,
    width: 300,
    height: 50,
    justifyContent: 'center',
    
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  
  }
});

export {styleLogin};
