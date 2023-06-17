import { View, Text } from "react-native";
import { useRecoilValue } from "recoil";

import MenuCategoryCard from "../card/menuCategoryCard";
import { data as dataAtom } from '../../../fetchUtils';
import { getTextTranslation as tT } from '../../../langUtils';
import styles from "./mainMenu.style";


const MainMenu = () => {
    const categoryValues = useRecoilValue(dataAtom);
    const categories = categoryValues.filter(({ is_bar }) => !is_bar);
    return (
        <>
            <Text
                style={styles.menuTitle}
            >
                {tT('Main Menu')}
            </Text>
            <View
                style={styles.menuBlock}
            >
                {
                    categories.map((item, key) => {
                        return <MenuCategoryCard item={item} />
                    })
                }
            </View>
        </>
    );
}

export default MainMenu;
