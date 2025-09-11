# 📱 Layout Responsivo em React Native

Esse projeto é um exemplo simples de como fazer uma tela responsiva no React Native, dividida em três partes: cabeçalho (azul claro), conteúdo (branco) e rodapé (cinza claro) para começarmos a aprender sobre estilização no react native

---

## Como funciona

A gente usa o `View` que é tipo uma `<div>` do html padrão, o `Text` pra mostrar texto e o `StyleSheet` pra criar os estilos, que são parecidos com CSS.

No componente principal (`LayoutResponsivo`), tem um container que ocupa a tela toda e dentro dele três áreas: header, content e footer. Cada uma com sua cor e texto centralizado que foi o desafio/exercio da aula.

---

## Flexbox

Usamos o `flex` pra controlar o tamanho de cada parte, podemos ver que no conteudo principal/main utilziamos o flex 3 para ele ser maior, e `justifyContent` e `alignItems` pra centralizar o conteúdo no centro da tela.

---

## No App.js

Tem um `View` que ocupa a tela toda e dentro dele chamamos o `LayoutResponsivo`.

---

## Estilos

Os estilos ficam num objeto chamado `styles` e aplicamos assim:

```jsx
style={styles.nomeDoEstilo}