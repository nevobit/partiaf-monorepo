import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from "react-native";

const DismissKeyboard = ({children}: any) => (
    <KeyboardAvoidingView behavior={Platform.OS == 'ios'? "padding" : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      {children}
      
      </TouchableWithoutFeedback>
      <View style={{height: 100}} />
    </KeyboardAvoidingView>
)

export default DismissKeyboard;