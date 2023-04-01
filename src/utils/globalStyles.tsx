import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  text:{
    color:"black",
    fontSize:50,
    fontFamily:"FrankRuhlLibre-Bold"
  },
  container : {
    paddingHorizontal:10,
    paddingTop: 10
  },
  titleStyle: {
    fontSize: 25,
    borderWidth: 2,
    paddingTop: 7.5,
    paddingBottom: 5,
    paddingRight : 20,
    paddingLeft : 25,
    textAlign: "center",
    fontFamily: "FrankRuhlLibre-Medium",
    color: '#363c51',
    backgroundColor:"#D4AB7C"
  },
  label : {
    fontSize : 20,
    fontWeight:"bold",
    marginBottom:10,
    paddingRight:7.5,
    letterSpacing:0.75,
    color: "black"
  },
  flexRow : {
    flexDirection:"row", 
    alignItems:"flex-end",
    flexWrap:"wrap",
    marginBottom:20
  },
  input : {
    height:40,
    fontSize:20, 
    paddingHorizontal:5, 
    marginLeft:7.5, 
    borderWidth:1, 
    color:"black"
  },
  texte: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    letterSpacing : 1.25,
    fontSize:17,
    textAlign:"justify",
    lineHeight : 25,
    color:"gray"
  },
  texteMiddle: {
    color:"gray",
    paddingBottom: 10,
    paddingTop:0,
    paddingHorizontal: 25,
    letterSpacing : 1.25,
    fontSize:17,
    textAlign:"justify",
    lineHeight : 25
  },
  marginBottomSpace:{
    marginBottom:20
  },
  loader: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  homeButtonStyle : {
    width:"90%", 
    height:60,
    justifyContent: "center",
    marginBottom:35
  },
  validationButton : {
    width: "100%",  
    borderRadius:7.5
  },
  homeInputContainer: {
    width:"100%",
    marginVertical: 15
  },
  key: {
    fontSize : 16,
    fontFamily:"Roboto-Bold",
    paddingLeft:10,
    color: "black",
    maxWidth:"100%"
  },
  value: {
    fontSize : 16,
    paddingLeft:10,
    letterSpacing:0.75,
    fontFamily:"Roboto-Light",
    color: "black"
  }
})