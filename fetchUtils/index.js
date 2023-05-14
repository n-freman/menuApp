import axios from 'axios';
import { Alert } from 'react-native';
import { atom } from  'recoil';
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
    } catch (error) {
        Alert.alert('Could not connect to the server')
    }
}

const loadData = async () => {
    const data = await AsyncStorage.getItem('data');
    return data;
}

const data = atom({
    key: 'data',
    default: loadData()
})

export default fetchData;
export { data };
