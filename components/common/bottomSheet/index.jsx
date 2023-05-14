import { useState } from 'react';
import { 
    Alert,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { cart } from '../../../globalCart';
import { images } from '../../../constants';
import styles from './style';
import { useRecoilState } from 'recoil';

const DishBottomSheetContent = ({ item }) => {
    const [amount, setAmount] = useState(0);
    const updateAmount = (sign) => {
        console.log("updating")
        switch (sign) {
            case '+': 
                setAmount(
                    amount + 1
                );
                break;
            case '-':
                if (amount > 0) {
                    setAmount(
                        amount - 1
                    )
                } else {
                    Alert.alert("Amount can not be less than zero")
                }
                break;
        }
    }
    const [cartObj, setCart] = useRecoilState(cart);
    const updateCart = ({ item, amount }) => {
        if (amount <= 0) {
            Alert.alert("Amount must be bigger than zero")
            return 0;
        }
        setCart([
            ...cartObj,
            {
                item,
                amount
            }
        ])
        console.log(cartObj)
        Alert.alert('Added to cart')
    }
    return (
        <View
            style={styles.bottomSheet}
        >

                <Image
                    style={styles.bottomSheetImage}
                    source={item.imageUrl}
                />
            <Text
                style={styles.bottomSheetTitle}
            >
                {item.title}
            </Text>
            {/* Rendering ingredients */}
            <FlatList
                style={styles.ingredientList}
                data={item.ingredients}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Ingredient item={item} />
                )}
            />
            <View
                style={styles.addToCartBlock}
            >
                <Text
                    style={styles.ingredientPrice}
                >
                    {item.price} TMT
                </Text>
                <View
                    style={styles.amountButtons}
                >
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                        onPress={() => updateAmount('-')}
                    >
                        <Image
                            source={images.minus}
                        />
                    </TouchableOpacity>
                    <Text
                        style={styles.amountText}
                    >
                        {amount}
                    </Text>
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                        onPress={() => updateAmount('+')}
                    >
                        <Image
                            source={images.plus}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => updateCart({item: item.id, amount})}
                >
                    <Text
                        style={styles.addButtonText}
                    >
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const DishBottomSheetHandler = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View
                style={styles.bottomSheetHandler}
            >
                <Image
                    source={images.arrowDown}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const Ingredient = ({ item }) => {
    return (
        <View
            style={styles.ingredient}
        >
            <Text
                style={styles.ingredientText}
            >
                {item.title}
            </Text>
            <Text
                style={styles.ingredientText}
            >
                {item.amount}
            </Text>
        </View>
    );
}

export {
    DishBottomSheetContent,
    DishBottomSheetHandler
};
