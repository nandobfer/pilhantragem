import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    container: {
        width: 100 * vw,
        alignItems: 'center',
        marginTop: 20 * vw
    }
});