import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    content: {
        padding: 25,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.15)',
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.TRANSPARENT_WHITE,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.GREY,
        marginBottom: 20,
        paddingHorizontal: 12,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
        color:colors.DARK_GREY,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.DARK_BLUE,
        paddingVertical: 14,
        borderRadius: 10,
        shadowColor: colors.BLACK,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: colors.WHITE,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
});
