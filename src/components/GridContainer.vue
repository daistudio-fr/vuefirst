<template>
  <div class="containerGrid parent">
    <div id="infrason" class="itemGrid itemGrid1"> </div>
    <div id="modul" class="itemGrid itemGrid2"> </div>
    <div id="infrason" class="itemGrid itemGrid3"> </div>
    <div id="pulse" class="itemGrid itemGrid4"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid5"> </div>
    <div id="infrason" class="itemGrid itemGrid6"> </div>
    <div id="pulse" class="itemGrid itemGrid7"> </div>
    <div id="modul" class="itemGrid itemGrid8"> </div>
    <div id="pulse" class="itemGrid itemGrid9"> </div>
    <div id="pulse" class="itemGrid pulse itemGrid10"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid11"> </div>
    <div id="modul" class="itemGrid itemGrid12"> </div>
    <div id="infrason" class="itemGrid itemGrid13"></div>
    <div id="pulse" class="itemGrid itemGrid14"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid15"> </div>
    <div id="modul" class="itemGrid itemGrid16"> </div>
    <div id="pulse" class="itemGrid itemGrid17"> </div>
    <div id="infrason" class="itemGrid itemGrid18"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid19"> </div>
    <div id="modul" class="itemGrid itemGrid20"> </div>
    <div id="infrason" class="itemGrid itemGrid21"> </div>
    <div id="pulse" class="itemGrid itemGrid22"> </div>
    <div id="pulse" class="itemGrid itemGrid23"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid24"> </div>
    <div id="infrason" class="itemGrid itemGrid25"> </div>
    <div id="pulse" class="itemGrid itemGrid26"> </div>
    <div id="modul" class="itemGrid itemGrid27"> </div>
    <div id="infrason" class="itemGrid itemGrid28"> </div>
    <div id="pulse" class="itemGrid itemGrid29"> </div>
    <div id="modul" class="itemGrid itemGrid30"> </div>
    <div id="infrason" class="itemGrid itemGrid31"> </div>
    <div id="pulse" class="itemGrid itemGrid32"> </div>
    <div id="modul" class="itemGrid itemGrid33"> </div>
    <div id="infrason" class="itemGrid itemGrid34"> </div>
    <div id="pulse" class="itemGrid itemGrid35"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid36"> </div>
    <div id="lyonbeton" class="itemGrid itemGrid37"> </div>
    <div id="infrason" class="itemGrid itemGrid38"> </div>
  </div>
</template>

<script>
export default {
  name: 'GridContainer',
  data () {
    return {
   
    }
  }
}
import { TweenLite } from "gsap";
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var containerWidth = $(".containerGrid").innerWidth();
var containerHeight = $(".containerGrid").innerHeight();

$(document).on("mousemove", function(event) {
    var currentXPourcent = Math.round(event.pageX) * 100 / windowWidth;
    var currentYPourcent = Math.round(event.pageY) * 100 / windowHeight;

    TweenLite.set(".containerGrid", { left: Math.round(2 * -currentXPourcent) / 2 + "%" });
    TweenLite.set(".containerGrid", { top: Math.round(2 * -currentYPourcent) / 2 + "%" });
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .parent {
        display: grid;
        grid-template-columns: repeat(35, 1fr);
        grid-template-rows: repeat(18, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
     .containerTitle {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
      .containerGrid {
        position: absolute;
        width: calc(200% - 400px);
        height: calc(200% - 400px);
        transition: 4s cubic-bezier(0.22, 0.69, 0.35, 0.99);
        margin: 200px;
        transform-origin: center;
        left: -50%;
        top: -50%;
    }
    
    .itemGrid {
        display: inline-block;
        position: relative;
        cursor: pointer;
        transition: .8s cubic-bezier(0.22, 0.69, 0.35, 0.99);
    }
    
    .itemGrid:hover span {
        opacity: 1;
    }
    .parent .itemGrid {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .itemGrid#infrason {
        background-image: url('http://daistudio.fr/wp-content/uploads/2020/05/DB-09104_toilet-paper-shelf_cloud-L_001.jpg');
    }
    
    .itemGrid#modul {
        background-image: url('http://daistudio.fr/wp-content/uploads/2020/05/OG_Image_Standard_Card_Petrol__ALL_.jpg');
    }
    
    .itemGrid#pulse {
        background-image: url('http://daistudio.fr/wp-content/uploads/2020/05/revolution0-1.jpg');
    }
    
    .itemGrid#lyonbeton {
        background-image: url('https://www.lyon-beton.com/wp-content/uploads/leanplus_dice_stacked-combination-3M3L_002.jpg.jpg');
    }
     .itemGrid:hover~.itemGrid {
        opacity: 0.3;
    }
    .itemGrid1 {
        grid-area: 3 / 6 / 4 / 7;
    }
    
    .itemGrid2 {
        grid-area: 5 / 8 / 7 / 10;
    }
    
    .itemGrid3 {
        grid-area: 15 / 1 / 19 / 5;
    }
    
    .itemGrid4 {
        grid-area: 16 / 9 / 18 / 11;
    }
    
    .itemGrid5 {
        grid-area: 16 / 28 / 18 / 30;
    }
    
    .itemGrid6 {
        grid-area: 1 / 32 / 5 / 36;
    }
    
    .itemGrid7 {
        grid-area: 4 / 22 / 8 / 26;
    }
    
    .itemGrid8 {
        grid-area: 8 / 33 / 9 / 34;
    }
    
    .itemGrid9 {
        grid-area: 15 / 34 / 17 / 36;
    }
    
    .itemGrid10 {
        grid-area: 18 / 7 / 19 / 8;
    }
    
    .itemGrid11 {
        grid-area: 8 / 1 / 10 / 3;
    }
    
    .itemGrid12 {
        grid-area: 1 / 12 / 5 / 16;
    }
    
    .itemGrid13 {
        grid-area: 12 / 15 / 16 / 19;
    }
    
    .itemGrid14 {
        grid-area: 2 / 25 / 3 / 26;
    }
    
    .itemGrid15 {
        grid-area: 4 / 29 / 5 / 30;
    }
    
    .itemGrid16 {
        grid-area: 6 / 29 / 8 / 31;
    }
    
    .itemGrid17 {
        grid-area: 9 / 26 / 10 / 27;
    }
    
    .itemGrid18 {
        grid-area: 15 / 22 / 19 / 26;
    }
    
    .itemGrid19 {
        grid-area: 13 / 22 / 14 / 23;
    }
    
    .itemGrid20 {
        grid-area: 16 / 20 / 17 / 21;
    }
    
    .itemGrid21 {
        grid-area: 12 / 12 / 13 / 13;
    }
    
    .itemGrid22 {
        grid-area: 8 / 10 / 10 / 12;
    }
    
    .itemGrid23 {
        grid-area: 9 / 6 / 10 / 7;
    }
    
    .itemGrid24 {
        grid-area: 5 / 18 / 7 / 20;
    }
    
    .itemGrid25 {
        grid-area: 1 / 1 / 5 / 5;
    }
    
    .itemGrid26 {
        grid-area: 2 / 18 / 3 / 19;
    }
    
    .itemGrid27 {
        grid-area: 1 / 29 / 3 / 31;
    }
    
    .itemGrid28 {
        grid-area: 10 / 28 / 14 / 32;
    }
    
    .itemGrid29 {
        grid-area: 17 / 17 / 19 / 19;
    }
    
    .itemGrid30 {
        grid-area: 12 / 3 / 14 / 5;
    }
    
    .itemGrid31 {
        grid-area: 1 / 8 / 2 / 9;
    }
    
    .itemGrid32 {
        grid-area: 1 / 21 / 3 / 23;
    }
    
    .itemGrid33 {
        grid-area: 11 / 34 / 13 / 36;
    }
    
    .itemGrid34 {
        grid-area: 18 / 35 / 19 / 36;
    }
    
    .itemGrid35 {
        grid-area: 18 / 14 / 19 / 15;
    }
    
    .itemGrid36 {
        grid-area: 15 / 6 / 16 / 7;
    }
    
    .itemGrid37 {
        grid-area: 11 / 7 / 15 / 11;
    }
    
    .itemGrid38 {
        grid-area: 6 / 3 / 7 / 4;
    }
</style>
