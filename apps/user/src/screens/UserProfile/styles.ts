import { StyleSheet } from "react-native";
import colors from "../../components/Layout/Theme/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
        paddingVertical: 15,
      },
      user_photo: {
        height: 100,
        width: 100,
        borderRadius: 100,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#333'
      },
      follow_btn: {
        backgroundColor: colors.dark.primary,
      borderRadius: 10,
      padding: 5,
      borderWidth: 1,
      borderColor: colors.dark.primary,
      height: 40,
      width: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    }
    
})


export default styles;