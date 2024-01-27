import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, Image, StatusBar, Dimensions, IMA, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const childWith = width / 1.47;
const child = width;
//const InfoCep = width / 3.30;



export default function Principal() {
  return (
    <SafeAreaView style={styles.fundo}>
      <StatusBar backgroundColor="#fddc13" />

      <View style={styles.header}>

        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', bottom: 15, width: '100%', }}>

          <TouchableOpacity style={{ right: 20 }}>
            <Image source={require('../../assets/menu.png')} style={styles.menu} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buscador}>
            <Image source={require('../../assets/lupa.png')} style={{ height: 18, width: 18 }} />
            <Text>Buscar no Mercado Livre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ left: 20 }}>
            <Image source={require('../../assets/carrinho.png')} style={styles.carrinho} />
          </TouchableOpacity>

        </View>


        <View style={{ paddingRight: 212 }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/local.png')} style={styles.local} />
            <Text>Informe seu CEP </Text>
            <Image source={require('../../assets/seta.png')} style={{ height: 8, width: 8 }} />
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView bounces={false} alwaysBounceVertical={false} showsVerticalScrollIndicator={false} style={{ height: '100%' }}>

        <View>
          <ImageBackground source={require('../../assets/gradiente.png')} style={{ width: '100%', height: 250 }} >
          </ImageBackground>
          <Text>a</Text>
        </View>

        <View style={{padding: 15}}>
          <View style={styles.frete}>
            <Text style={{fontFamily: 'Regular', fontSize: 11}}>Frete grátis em milhões de produtos a partir de R$79 </Text>
          </View>
        </View>


        <View><Text>carrosel com botões*</Text></View>
        <View><Text>Promoção**</Text></View>
        <View><Text>carrosel com funções*</Text></View>
        <View><Text>crie uma conta para melhorar sua experiencia*</Text></View>
        <View><Text>Assinatura Meli+*</Text></View>
        <View><Text>Oferta do dia*</Text></View>
        <View><Text>Ofertas do dia*</Text></View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  header: {
    backgroundColor: '#fddc13',
    height: '14%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  buscador: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingVertical: 9,
    justifyContent: 'center',
    alignItems: 'center',
    width: childWith,
    flexDirection: 'row'
  },
  menu: {
    height: 25,
    width: 25,
  },
  carrinho: {
    height: 25,
    width: 25,
  },
  local: {
    height: 18,
    width: 18
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    flex: 1,
    zIndex: 1,
  },
  frete:{
    backgroundColor: 'white',
    height: 30,
  }
})