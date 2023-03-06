import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  boxTitulo: {
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10
  },
  capa: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10
  },
  subtitulo: {
    fontWeight: "bold",
    color: '#757575',
    marginBottom: 20
  },

  boxNoticia: {
    marginBottom: 20,
    flexDirection: "row",

    borderTopColor: '#d5d5d5',
    borderTopWidth: 1,
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
  },

  imagem: {
    width: 100,
    height: 100,
  },
  boxNoticiaTextos: {
    flex: 1,
    padding: 10,
  },
  noticiaTitulo: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default estilos;