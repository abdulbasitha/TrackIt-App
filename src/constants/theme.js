import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window")
const colors = {
  primary: "#F9C201",
  secondary: "#ECF1FA",
  white: "#FFFFFF",
  black: "#0000",
  lightBack: "#626058",
  gray: "#D3D3D3",
  lightGray: "#eff2f5",
  blue:"#02BEE8",
  green: "#00B152",
  red: "#D10000",
  text:"#626058"
};

const sizes = {
  base:16,
  base1: 10,
  base2: 15,
  base3: 20,
  font: 14,
  radius: 6,
  padding: 25,

  h1: 26,
  h2: 20,
  h3: 18,
  h4: 14,
  largeTittle:50,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  logo: 32,
  width,
  height

};



export { colors, sizes, width, height };
