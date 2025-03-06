import styled, { createGlobalStyle } from "styled-components";

export const DivImgRickMorty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageRickMorty = styled.img`
  width: 400px;
  object-fit: cover;
  transition: transform 0.6s ease-in-out;

  &:hover {
    animation: weird-spin-zoom 2s ease-in-out infinite;
  }
  @keyframes weird-spin-zoom {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(360deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Get Schwifty';
    src: url('./assets/fonts/get_schwifty.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Get Schwifty', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`;
