import axios from 'axios';
import { Alert, } from 'react-native';
import { atom } from  'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = 'http://192.168.1.5:8000'

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
            },
            () => {
                Alert.alert('Could not connect to the server')
            }
        );
        
    } catch (error) {
        Alert.alert('Could not connect to the server')
    }
}


const loadData = async () => {
    const data = await AsyncStorage.getItem('data');
    let dataObj = JSON.parse(data)
    if (dataObj == null || dataObj == undefined) {
        dataObj = []
    }
    return dataObj;
}

const data = atom({
    key: 'data',
    default: loadData()
})

export default fetchData;
export { data };
