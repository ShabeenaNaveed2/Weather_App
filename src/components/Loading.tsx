import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {colors} from '../styles/colors'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF" />
        </View>
    );
};
export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
