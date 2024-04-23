import { Text, Image, View, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const submit = () => {
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6 ">
          <Image
            className="w-[115px] h-[35px]"
            source={images.logo}
            resizeMode="contain"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold ">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keybroadType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isloading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className="text-lg text-gray-100 font-pregular ">
              Don't have account?
            </Text>
            <Link
              href={"/sign-up"}
              className="text-lg font-psemibold text-secondary "
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
