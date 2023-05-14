import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './style';
import { getTextTranslation as tT } from '../../../langUtils';
import { COLORS } from '../../../constants';
import { useState } from 'react';

const PasswordInput = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const redirect = () => {
        if (password == '1234') {
            router.push('/discounts/')
        } else {
            Alert.alert('Password is wrong')
        }
    }
    return (
        <>
        <View
            style={styles.passwordInputWrapper}
        >
            <TextInput 
                editable
                multiline={false}
                maxLength={40}
                placeholder={tT("Input your password...")}
                style={styles.passwordInput}
                placeholderTextColor={COLORS.gray}
                keyboardType='numeric'
                onChangeText={(value) => setPassword(value)}
            />
        </View>
        <TouchableOpacity
            style={styles.enterButton}
            onPress={redirect}
        >
            <Text
                style={styles.enterText}
            >
                {tT("Enter")}
            </Text>
        </TouchableOpacity>
        </>
    )
}

export default PasswordInput;
