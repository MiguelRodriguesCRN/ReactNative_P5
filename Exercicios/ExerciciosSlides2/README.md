# 📱 Layout Responsivo em React Native

Este projeto é um exemplo de como montar uma tela simples e **responsiva** no **React Native**.  
A tela foi dividida em **3 partes principais**:

- 🔹 **Cabeçalho** (azul claro)  
- ⚪ **Conteúdo principal** (branco)  
- ⚫ **Rodapé** (cinza claro)  


### Importações

* As importações são feitas `from 'react-native'` ao invés de `from 'react'` já que por mais que reacts não são os mesmo.

### Componentes importantes

1. **View** → funciona como uma `<div>` do html que aprendemos no semestre passado.  
2. **Text** → usado para exibir texto na tela ( inclusive estranhei ser só isso kk).  
3. **StyleSheet** → utilizado para definir estilos ( Bem parecido com o CSS).

* No componente `LayoutResponsivo`, existe uma área onde os estilos são definidos:

1. **container** → engloba tudo .  
2. **header** → cabeçalho.  
3. **content** → conteúdo principal.  
4. **footer** → rodapé.

* Cada parte possui propriedades de estilo, como:

1. **backgroundColor** → define a cor de fundo.  
2. **justifyContent** → centraliza verticalmente (quando definido como `center`).  
3. **alignItems** → centraliza horizontalmente.  
4. **flex** → define quanto espaço cada item ocupa.

---

## App.js

* Este é o componente pai, onde tudo é renderizado:

1. `<View style={{ flex: 1 }}>` → funciona como container principal.  
2. `<LayoutResponsivo />` → chama o componente `LayoutResponsivo` para renderizar o conteúdo.  
3. `export default App` → indica que este é o componente principal da aplicação.

---

## Estrutura do Código

O componente `LayoutResponsivo` é composto por uma `View` principal que ocupa toda a tela.  
Dentro dela, temos três seções: **header**, **content** e **footer**, cada uma com sua cor e texto centralizado.

### Flexbox

- **flex** → determina quanto espaço cada parte ocupa.  
- **justifyContent** → centraliza verticalmente.  
- **alignItems** → centraliza horizontalmente.  

---

## Estilização

Foi criado um objeto `styles` para armazenar todos os estilos utilizados.  
Cada chave do objeto representa um estilo com propriedades como cor, tamanho da fonte e espaçamento.  

A aplicação dos estilos é feita assim:

```jsx
style={styles.nomeDoEstilo}