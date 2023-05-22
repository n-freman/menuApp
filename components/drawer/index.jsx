import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

import { getTextTranslation as tT } from '../../langUtils';
import styles from './styles';
import fetchData from '../../fetchUtils';

const CustomDrawer = () => {
    const router = useRouter();

    return <DrawerContentScrollView
        style={styles.drawerContainer}
    >
        <DrawerItem
            label="Crystal"
            labelStyle={styles.drawerTitle}
            onPress={() => {router.push('/')}}
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
