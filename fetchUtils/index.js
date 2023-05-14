import axios from 'axios';
import { Alert, } from 'react-native';
import { atom } from  'recoil';
import { Buffer } from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://10.2.1.27:8000'

const fetchImages = async () => {
    return 0;
}

const fetchData = async () => {
    try {
        axios.get(`${URL}/api/all`).then(
            async (response) => {
                const data = JSON.stringify(response.data)
                await AsyncStorage.setItem(
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
    const dataObj = JSON.parse(data)
    return dataObj;
}

const data = atom({
    key: 'data',
    default: loadData()
})

export default fetchData;
export { data };
