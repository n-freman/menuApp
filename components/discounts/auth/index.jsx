import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from './style';
import { COLORS } from '../../../constants';

const PasswordInput = () => {
    return (
        <>
        <View
            style={styles.passwordInputWrapper}
        >
            <TextInput 
                editable
                multiline={false}
                maxLength={40}
                placeholder="Input your password..."
                style={styles.passwordInput}
                placeholderTextColor={COLORS.gray}
            />
        </View>
        <TouchableOpacity
            style={styles.enterButton}
        >
            <Text
                style={styles.enterText}
            >
                Enter
            </Text>
        </TouchableOpacity>
        </>
    )
}

export default PasswordInput;
