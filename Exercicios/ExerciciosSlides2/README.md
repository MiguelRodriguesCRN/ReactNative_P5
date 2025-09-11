# 📱 Layout Responsivo em React Native

Esse projeto é um exemplo simples de como fazer uma tela responsiva no React Native, dividida em três partes: cabeçalho (azul claro), conteúdo (branco) e rodapé (cinza claro) para começarmos a aprender sobre estilização no react native

---

## Como funciona

A gente usa o View que é tipo uma <div> do html padrão, o Text pra mostrar texto e o StyleSheet pra criar os estilos, que são parecidos com CSS.

No componente principal (LayoutResponsivo), tem um container que ocupa a tela toda e dentro dele três áreas: header, content e footer. Cada uma com sua cor e texto centralizado que foi o desafio/exercio da aula.



## Flexbox

Usamos o `flex` pra controlar o tamanho de cada parte, podemos ver que no conteudo principal/main utilziamos o flex 3 para ele ser maior, e `justifyContent` e `alignItems` pra centralizar o conteúdo no centro da tela.



<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/50d07283-a32f-41e1-8a29-5ffb8d33b726" />


## No App.js

Tem um View que ocupa a tela toda e dentro dele chamamos o `LayoutResponsivo`.


## Estilos

Os estilos ficam num objeto chamado styles e aplicamos assim:

style={styles.nomeDoEstilo}

## Resultado
<img width="410" height="822" alt="image" src="https://github.com/user-attachments/assets/83e7959c-a896-48a9-88b7-fa13da066824" />


