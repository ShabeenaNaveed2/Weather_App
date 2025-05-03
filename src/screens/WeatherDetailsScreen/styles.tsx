import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT_AQUA,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        backgroundColor: colors.PURE_WHITE,
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 4,
        width: '90%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    icon: {
        width: 100,
        height: 100,
        marginVertical: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,
    },
    value: {
        fontSize: 18,
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});
