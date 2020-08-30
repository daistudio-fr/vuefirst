<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: { Nav }
};

 </script>
<style lang="css">

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
::-webkit-scrollbar{
  display: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}

h1 {
  font-size: 220px;
  font-weight: 600;
  color: black;
}
h2, .sub-title{
  font-size: 50px;
  font-weight: 500;
  color: black;
}
p, .corp{
  font-size: 15px;
  font-weight: 400;
  color: black;
}
.b{
  font-weight: 600;
}

html{
  background-color: #EAECF3;
  font: 400 15px 'Inter';
}
body{
  overflow-x: hidden;
  margin: 5vh 3.12vw;
}

body:before {
    top: -10rem;
    left: -10rem;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    z-index: 10;
    content: '';
    position: fixed;
    pointer-events: none;
    background-position: 50%;
    background-image: url(./assets/noise.png);
    pointer-events: none;
    animation: noise 1s steps(2) infinite;
} 


nav {
    display: flex;
    justify-content: space-between;
}
nav .right {
  display: flex;
}
nav .work ul {
  display: flex;
}
nav .work ul li:first-child {
  margin-right: 3.7vw;
}
nav .work{
  align-self: flex-start;
}
nav .bio{
  margin-right: 12.3vw;
}
nav .contact{
   order: 5;
   align-self: flex-end;
}

.hero_banner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 50vh;
    margin-top: 20vh;
}
.hero_footer ul {
    display: flex;
    justify-content: space-between;
    margin-top: calc(30vh - 140px);
}
.video_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 100px;
}
.video_container a {
  margin-top: 25px;
   width: 30%;
}
.info{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}
.info .titre{
  display: flex;
}
.info .titre #feat{
    margin-left: 10px;
    color: #787878;
}

.video_container_single {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: black;
}
.video_container_single video {
    height: 100%; 
    width: 100%;
}
.video_container_single video:focus {
    outline: none;
}
.nav_video_top ul{
    display: flex;
    justify-content: space-between;
}
.nav_video_top ul li:nth-child(2) {
    display: flex;
    justify-content: start;
    transform-origin: bottom right;
    transform: rotate(-90deg) scale(-1, -1) translate(100% , 100%);
    position: absolute;
    right: 3.12vw;
    top: -1rem;
}

.nav_video_top ul li:nth-child(2) p{
    margin-right: 10px;
}
.nav_video_top {
    z-index: 1;
    position: absolute;
    width: calc(100% - 3.12%);
}
.nav_video_top ul li,.nav_video_top ul li p,.nav_video_top ul li a{
    color: white;
}


@keyframes noise{
  0%{
    transform:translate3d(0, 9rem, 0)
  }
  10%{
    transform:translate3d(-1rem, -4rem, 0)
  }
  20%{
    transform:translate3d(-8rem, 2rem, 0)
  }
  30%{
    transform:translate3d(9rem, -9rem, 0)
  }
  40%{
    transform:translate3d(-2rem, 7rem, 0)
  }
  50%{
    transform:translate3d(-9rem, -4rem, 0)
  }
  60%{
    transform:translate3d(2rem, 6rem, 0)
  }
  70%{
    transform:translate3d(7rem, -8rem, 0)
  }
  80%{
    transform:translate3d(-9rem, 1rem, 0)
    }
  0%{
    transform:translate3d(6rem, -5rem, 0)
  }
  to{
    transform:translate3d(-7rem, 0, 0)
  }
}


    /*------------------------------------*\
	TYPOGRAPHY
\*------------------------------------*/
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Thin.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Thin.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-ThinItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-ThinItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-ExtraLight.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-ExtraLight.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-ExtraLightItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-ExtraLightItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Light.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Light.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-LightItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-LightItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Regular.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Regular.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Italic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Italic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Medium.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Medium.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-MediumItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-MediumItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-SemiBold.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-SemiBold.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-SemiBoldItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-SemiBoldItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Bold.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Bold.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-BoldItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-BoldItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-ExtraBold.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-ExtraBold.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-ExtraBoldItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-ExtraBoldItalic.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-Black.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-Black.woff?v=3.13") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url("./assets/fonts/Inter/Inter-BlackItalic.woff2?v=3.13") format("woff2"), url("./assets/fonts/Inter/Inter-BlackItalic.woff?v=3.13") format("woff");
    }
</style>