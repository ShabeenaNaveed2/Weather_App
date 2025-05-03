+**Short app description:**
This weather app allows users to search for current weather details by entering a city name. The app displays temperature, weather condition, and humidity levels for the selected city. It also includes a splash screen before navigating to the home screen.

+**Setup & Run Instructions:**
**1.** Clone the repository
**2.** Install dependencies using:
       npm install
**3.** For Android:
       npx react-native run-android
**4.** Ensure that your device is set up for testing or an emulator running.

+**API Used:**
The app fetches weather data from the OpenWeatherMap API.

API Key: Add your API key in the WeatherApi.ts file:
const API_KEY = 'your-api-key-here';

+**API Endpoint:**
The API endpoint used is:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

*To obtain an API key, visit **OpenWeatherMap**.

