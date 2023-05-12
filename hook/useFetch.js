import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setIsLoading(true);
  
      try {
        const response = await AsyncStorage.getItem('data')

        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const refetch = () => {
      setIsLoading(true);
      fetchData();
    };
  
    return { data, isLoading, error, refetch };
}

export default useFetch;