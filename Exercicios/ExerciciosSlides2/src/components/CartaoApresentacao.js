import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
                style={style.imagemPerfil}
            ></Image>

            {/*Nome e descrião do card/pessoa */}
            <Text style={style.nome}>Joh Doe</Text>
            <Text style={style.descricao}>Eu gosto de conceitos basicos kkk</Text>


            <View style={style.botoesContainer}>
                {/*Botoes */}
                <TouchableOpacity style={[style.botao, style.botaoGit]}>
                    <Text style={style.textoBotao}>Github</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.botao, style.botaoLink]}>
                    <Text style={style.textoBotao}>Linkedin</Text>
                </TouchableOpacity>

            </View>
        </View>


    )
}

const style = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#ffff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 0.4,
        elevation: 5,
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'

    },

    descricao: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10
    },

    botao: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },

    botaoGit: {
        backgroundColor: '#333'
    },
    botaoLink: {
        backgroundColor: '#0077b5'

    },
    textoBotao: {
        color: '#ffF',
        fontSize: 10,
        fontWeight: 'bold'

    },
    botoesContainer: {
        flexDirection: 'row',
        marginTop: 10
    }

})

export default CartaoApresentacao