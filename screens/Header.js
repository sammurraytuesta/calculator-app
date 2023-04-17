import { StyleSheet, View, Text} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>calc</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    headerText: {
        width: '80%',
        color: 'hsl(0, 0%, 100%)', //White
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: 25,
    }
});

export default Header;