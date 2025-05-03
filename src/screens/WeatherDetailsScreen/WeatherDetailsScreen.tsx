import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { fetchWeatherData } from '../../api/WeatherApi';
import { WeatherData } from '../../types/Interface';
import Loading from '../../components/Loading';
import { styles } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherDetails'>;

const WeatherDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
    const { city } = route.params;
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWeather = async () => {
            try {
                const data = await fetchWeatherData(city);
                setWeather(data);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch weather data.');
                navigation.goBack();
            } finally {
                setLoading(false);
            }
        };
        loadWeather();
    }, [city]);

    if (loading) return <Loading />;

    return (
        <View style={styles.container}>
            {weather && (
                <View style={styles.card}>
                    <Text style={styles.title}>{weather.city} 🌍</Text>
                    <Image source={{ uri: weather.icon }} style={styles.icon} />

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>🌡 Temp:</Text>
                        <Text style={styles.value}>{weather.temp}°C</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>☁️ Condition:</Text>
                        <Text style={styles.value}>{weather.condition}</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>💧 Humidity:</Text>
                        <Text style={styles.value}>{weather.humidity}%</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button title="⬅️ Back" onPress={() => navigation.goBack()} />
                    </View>
                </View>
            )}
        </View>
    );

};

export default WeatherDetailsScreen;
