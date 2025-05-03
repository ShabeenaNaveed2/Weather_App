```text
WeatherApp/
│
├── android/                    # Android native project files
├── ios/                        # iOS native project files
├── src/
│   ├── api/
│   │   └── WeatherApi.ts       # Handles API request to OpenWeatherMap
│   ├── assets/
│   │   └── SplashScreen.png    # Splash screen image
│   ├── components/
│   │   └── Loading.tsx         # Loading spinner component
│   ├── navigation/
│   │   └── AppNavigator.tsx    # React Navigation setup
│   ├── screens/
│   │   ├── HomeScreen/
│   │   │   ├── HomeScreen.tsx  # Input screen to search weather
│   │   │   └── styles.tsx
│   │   ├── SplashScreen/
│   │   │   ├── SplashScreen.tsx
│   │   │   └── styles.tsx
│   │   └── WeatherDetailsScreen/
│   │       ├── WeatherDetailsScreen.tsx
│   │       └── styles.tsx
│   ├── styles/
│   │   └── colors.ts           # Central color definitions
│   └── types/
│       └── Interface.ts        # TypeScript interfaces
│
├── App.tsx                     # Entry point of the application
├── package.json
```

**Short app description:**
This weather app allows users to search for current weather details by entering a city name. The app displays temperature, weather condition, and humidity levels for the selected city. It also includes a splash screen before navigating to the home screen.

**Setup & Run Instructions:**
**1.** Clone the repository
**2.** Install dependencies using:
       npm install
**3.** For Android:
       npx react-native run-android
**4.** Ensure that your device is set up for testing or an emulator running.

**API Used:**
The app fetches weather data from the OpenWeatherMap API.

**API Key:** Add your API key in the WeatherApi.ts file:
const API_KEY = 'your-api-key-here';

**API Endpoint:**
The API endpoint used is:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

To obtain an API key, visit **OpenWeatherMap**.

 **Screens Included**
 
**Splash Screen** – Launch image with branding
**Home Screen** – City search with input validation
**Weather Details Screen** – Displays temperature, humidity, condition, and weather icon

**Technologies Used**
React Native CLI
TypeScript
React Navigation
Axios
OpenWeatherMap API
Vector Icons
Linear Gradient Background



