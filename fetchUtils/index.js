import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://10.2.1.27:8000'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const fetchData = async () => {
    try {
        axios.get(`${URL}/api/all`).then(
            (response) => {
                const data = JSON.stringify(response.data)
                // for (let category of response.data) {
                //     console.log(category.title)
                // }
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
