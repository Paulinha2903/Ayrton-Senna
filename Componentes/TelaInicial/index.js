import React from 'react';
import { View, Text , Image, ImageBackground} from 'react-native';

import Foto from '../../Imagens/foto-capa.jpg';
import Fundo from '../../Imagens/fundo.jpg';
import estilos from '../../Componentes/TelaInicial/estilo';

export default function TelaInicial() {
 return (

  <ImageBackground blurRadius={5} source={Fundo} style={estilos.container}>
      <Image source={Foto} style={estilos.imgCapa} />

      <View style={estilos.boxDetalhes}>
        <Text style={estilos.titulo}>Ayrton Senna</Text>
        <Text style={estilos.paragrafo}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
      </View>
    </ImageBackground>
 );
}

