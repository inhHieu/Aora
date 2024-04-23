import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isloading,
}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
        ${containerStyles} ${isloading ? "opacity-50" : ""} `}
      disabled={isloading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
