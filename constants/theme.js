import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: "#957F0B",
    secondary: '#E3B878',
    accent: '#FBE205',

    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#3C4A25"
}


export const SIZES = {
    base: 10,
    width,
    height
}