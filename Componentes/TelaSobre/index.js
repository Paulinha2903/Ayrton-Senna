import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

import Foto from '../../Imagens/foto-capa.jpg';
import Img1 from '../../Imagens/rei-de-monaco.png';
import Img2 from '../../Imagens/rei-da-chuva.png';
import Img3 from '../../Imagens/silvastone.png';
import Img4 from '../../Imagens/preparacao.png';

import estilos from '../../Componentes/TelaSobre/estilo';

export default function TelaSobre() {
 return (
  <View style={estilos.container}>
      <View style={estilos.boxTitulo}>
        <Text style={estilos.titulo}>Ayrton Senna</Text>
        <Image source={Foto} style={estilos.capa} />
        <Text style={estilos.subtitulo}>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
      </View>

      <ScrollView>
        <View style={estilos.boxNoticia}>
          <Image source={Img1} style={estilos.imagem} />

          <View style={estilos.boxNoticiaTextos}>
            <Text style={estilos.noticiaTitulo}>Rei da chuva</Text>
            <Text>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
          </View>
        </View>

        <View style={estilos.boxNoticia}>
          <Image source={Img2} style={estilos.imagem} />

          <View style={estilos.boxNoticiaTextos}>
            <Text style={estilos.noticiaTitulo}>Rei da Mônaco</Text>
            <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
          </View>
        </View>

        <View style={estilos.boxNoticia}>
          <Image source={Img3} style={estilos.imagem} />
          <View style={estilos.boxNoticiaTextos}>
            <Text style={estilos.noticiaTitulo}>Silvastone</Text>
            <Text>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
          </View>
        </View>

        <View style={estilos.boxNoticia}>
          <Image source={Img4} style={estilos.imagem} />
          <View style={estilos.boxNoticiaTextos}>
            <Text style={estilos.noticiaTitulo}>Preparação</Text>
            <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}