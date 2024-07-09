import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Pressable,
  Alert,
} from 'react-native';
import Routes from '../constants/routes/Route';
import {GoogleSignin} from '@react-native-google-signin/google-signin';


const Login = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate(Routes.HOMEPAGE);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1053030065043-i560qrk391uvcj3tbk1tr8bsvv7c3ien.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      
      console.log('User Info:', userInfo);

      Alert.alert('Login Successful', 'You are now logged in!', [
        { text: 'OK', onPress: () => handleNavigate() }
      ]);

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
        console.log('Google sign-in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Operation (eg. sign in) already in progress
        console.log('Google sign-in operation in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        console.log('Google Play services not available');
      } else {
        // Some other error occurred
        console.error('Google sign-in error:', error);

        Alert.alert('Login Failed', 'Failed to sign in with Google');
      }
    }
  };

  return (
    <View>
      <Text className="mt-[120px] mx-auto font-quicksand text-2xl prose">
        Welcome back to GoodLives
      </Text>

      <Image
        source={require('../utils/login/pandaBg.png')}
        className="w-[261.55px] h-[238.75px] ml-[72px] mt-12"
      />
      <Image
        source={require('../utils/login/panda.png')}
        className="mt-[-210px] ml-20 h-[187.67px] w-[188.95px]"
      />

      <TouchableOpacity
        onPress={onGoogleButtonPress}
        className="w-[357px] h-[55px] border border-[#F8FFFB] rounded-full mt-16 mx-auto bg-[#E8EBFF] flex flex-row justify-center items-center">
        <Text className="font-quicksand font-semibold text-base mr-2 text-[#394B42]">
          Continue with
        </Text>
        <Image
          source={require('../utils/login/google.png')}
          className="w-6 h-6"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;


