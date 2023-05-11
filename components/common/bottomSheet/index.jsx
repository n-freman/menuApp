import { Alert, View, Image, Text, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';

import { COLORS, images } from '../../../constants';
import styles from './style';

const DishBottomSheetContent = ({ item }) => {
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
                    >
                        <Image
                            source={images.minus}
                        />
                    </TouchableOpacity>
                    <Text
                        style={styles.amountText}
                    >
                        0
                    </Text>
                    <TouchableOpacity
                        style={styles.changeAmountButton}
                    >
                        <Image
                            source={images.plus}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {Alert.alert('Added to cart')}}
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
