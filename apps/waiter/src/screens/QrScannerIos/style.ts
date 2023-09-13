import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1
    },
    iconButtonHome: {
        type: 'material',
        size: 50,
        color: 'white',
    },
    titleButtonHome: { 
        fontWeight: '700', 
        fontSize: 25 
    },
    buttonHome: {
        backgroundColor: 'rgba(255, 193, 7, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        height: 100,
    },
    buttonHomeContainer: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 20,
    },
});

export default styles;