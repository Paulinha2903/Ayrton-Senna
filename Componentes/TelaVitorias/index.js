import React from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';

import Corrida from '../../Imagens/corrida1.jpg';
import Vitoria1 from '../../Imagens/vitoria1.jpg';
import Vitoria2 from '../../Imagens/vitoria2.jpg';
import Vitoria3 from '../../Imagens/vitoria3.jpg';

import estilos from '../../Componentes/TelaVitorias/estilo';




export default function TelaVitorias(){
  return (
    <ScrollView>
      <ImageBackground blurRadius={ 5 } source={ Corrida } style={ estilos.container }>

        <View style={ estilos.containerNumeros }>
          <Text style={ estilos.titulo }>Senna em Números</Text>
          <Text style={ estilos.paragrafo }>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>

          <View style={ estilos.boxNumeros }>
            <FontAwesome5 name="trophy" color="#ceb105" size={ 25 } />
            <Text style={ estilos.numeros }>161</Text>
            <Text style={ estilos.descricao }>GPS DISPUTADOS</Text>
          </View>

          <View style={ estilos.boxNumeros }>
            <FontAwesome5 name="trophy" color="#ceb105" size={ 25 } />
            <Text style={ estilos.numeros }>65</Text>
            <Text style={ estilos.descricao }>POLE POSITIONS</Text>
          </View>

          <View style={ estilos.boxNumeros }>
            <FontAwesome5 name="trophy" color="#ceb105" size={ 25 } />
            <Text style={ estilos.numeros }>41</Text>
            <Text style={ estilos.descricao }>VITÓRIAS</Text>
          </View>

          <View style={ estilos.boxNumeros }>
            <FontAwesome5 name="trophy" color="#ceb105" size={ 25 } />
            <Text style={ estilos.numeros }>3X</Text>
            <Text style={ estilos.descricao }>CAMPEÃO MUNDIAL</Text>
          </View>
        </View>


        <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1988</Text>
          <Image source={ Vitoria1 } style={ estilos.imagem } />
        </View>

        <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1990</Text>
          <Image source={ Vitoria2 } style={ estilos.imagem } />
        </View>

        <View style={ estilos.cardImagem }>
          <Text style={ estilos.cardParagrafo }>Campeonato Mundial – 1991</Text>
          <Image source={ Vitoria3 } style={ estilos.imagem } />
        </View>

      </ImageBackground>
    </ScrollView>
  );
}