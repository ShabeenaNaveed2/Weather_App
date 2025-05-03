import React, { useState } from 'react';
import { TextInput, Alert, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import Loading from '../../components/Loading';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSearch = () => {
        if (!city.trim()) {
            Alert.alert('Please enter a city name');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('WeatherDetails', { city: city.trim() });
        }, 500);
    };

    if (loading) return <Loading />;

    return (
        <LinearGradient colors={['#43cea2', '#185a9d']} style={styles.container}>
            <View style={styles.inputWrapper}>
                <Icon name="location-on" size={24} color="#555" style={styles.inputIcon} />
                <TextInput
                    placeholder="Enter city"
                    value={city}
                    onChangeText={setCity}
                    placeholderTextColor="#555"
                    style={styles.input}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Icon name="search" size={20} color="#fff" />
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>

        </LinearGradient>
    );
};

export default HomeScreen;
