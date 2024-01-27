import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.fundo}>

            <View style={styles.viewCaixa}>
                <Image source={require('../../assets/caixa.png')} style={styles.caixa}/>
            </View>

            <View style={styles.viewTexto}>
                <Text style={styles.texto}>Garanta fretes grátis no mesmo dia</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.botaoC} onPress={() => navigation.navigate('Principal')}>
                    <Text style={styles.subText}>Criar uma nova conta</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.botaoI} onPress={() => navigation.navigate('Teste')}>
                    <Text style={styles.subText}>Iniciar sessão</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    font:{
        fontFamily: 'Regular'
    },
    caixa:{
        height: 300,
        width: '100%'
    },
    fundo:{
        backgroundColor: '#fee600',
        flex: 1
    },
    viewCaixa:{
        paddingTop: '30%',
    },
    botaoC:{
        backgroundColor: '#3483fa',
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        left: '5%',
    },
    botaoI:{
        backgroundColor: '#525151',
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        left: '5%',
    },
    texto:{
        fontFamily: 'Bold',
        fontSize: 22,
        textAlign: 'center'
    },
    viewTexto:{
        alignItems: 'center'
    },
    subText:{
        color: 'white',
        fontFamily: 'Bold'
    },
})