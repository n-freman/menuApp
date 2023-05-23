import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Image } from 'react-native';

import { getTextTranslation as tT } from '../../langUtils';
import { images } from '../../constants';
import styles from './styles';
import fetchData from '../../fetchUtils';
import { scale } from '../../sizeUtils';

const CustomDrawer = () => {
    const router = useRouter();

    return <DrawerContentScrollView
        style={styles.drawerContainer}
    >
        {/* <DrawerItem
            label="Crystal"
            labelStyle={styles.drawerTitle}
            onPress={() => {router.push('/')}}
        /> */}
        <Image
            source={images.logoGold}
            style={{height: 150, width: 300, marginVertical: scale(50)}}
        />
        <DrawerItem
            label={tT("Update")}
            labelStyle={styles.drawerItem}
            onPress={() => {fetchData()}}
        />
        <DrawerItem
            label={tT("Discounts")}
            labelStyle={styles.drawerItem}
            onPress={() => {router.push('/discounts/auth/')}}
        />
        <DrawerItem
            label={tT("About Us")}
            labelStyle={styles.drawerItem}
        />
    </DrawerContentScrollView>
}

export default CustomDrawer;
