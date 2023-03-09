import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
    label?:string,
    clearInput?:()=>void;
}

export { InputProps };