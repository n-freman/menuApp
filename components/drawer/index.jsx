import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

import styles from './styles';

const CustomDrawer = () => {
    const router = useRouter();
    return <DrawerContentScrollView
        style={styles.drawerContainer}
    >
        <DrawerItem
            label="Bellini"
            labelStyle={styles.drawerTitle}
            onPress={() => {router.push('/')}}
        />
        <DrawerItem
            label="Update"
            labelStyle={styles.drawerItem}
        />
        <DrawerItem
            label="Discount"
            labelStyle={styles.drawerItem}
            onPress={() => {router.push('/discounts/auth/')}}
        />
        <DrawerItem
            label="About Us"
            labelStyle={styles.drawerItem}
        />
    </DrawerContentScrollView>
}

export default CustomDrawer;