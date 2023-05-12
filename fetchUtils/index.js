import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://10.2.1.27:8000'

const fetchImages = async () => {
    return 0;
}

const fetchData = async () => {
    try {
        axios.get(`${URL}/api/all`).then(
            (response) => {
                const data = JSON.stringify(response.data)
                AsyncStorage.setItem(
                    'data',
                    data
                )
            }
        );
        const value = await AsyncStorage.getItem('data');
        if (value !== null) {
          console.log(value);
        }
    } catch (error) {
        Alert.alert('Could not connect to the server')
    }
}

export default fetchData;
