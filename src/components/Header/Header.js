import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Header.style';

const Header = () => {
    return(
        <View>
            <Text style={styles.header}>STORE</Text>
            <TextInput
                placeholder="Search.."
                style={styles.input}
            />
        </View>
    );
};

export default Header;