import { TouchableOpacityProps } from "react-native";

interface CardProps extends TouchableOpacityProps{
    title:string;
    description?:string;
    avatar:any;
}

export { CardProps };