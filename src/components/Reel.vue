<script setup lang="ts">
    import { exit } from 'process';
import { computed, onMounted, ref } from 'vue'

    const icon_height = 79,
          num_icons = 9;
    // altura imagem 711

    const props = defineProps({
        positionIndex: { type: Number },
        roll: {type: Boolean}
    });

    
    var r: any = document.querySelector(':root')
    var rs = getComputedStyle(r);
 

    function rollComponent() {

        const test = rs.getPropertyValue(`--p${props.positionIndex}`)

        var anmt = props.positionIndex*200+3000; 

        console.log("componente:",props.roll)
        console.log("Faz",anmt)
        console.log(test)
        
        r.style.setProperty(`--p${props.positionIndex}`, `0px`);
        r.style.setProperty(`--t${props.positionIndex}`, `${anmt}ms`);
        r.style.setProperty('--blue', 'red');

        
        setTimeout(() => {
            const rollPixelsToMove = ((props.positionIndex + 2) * num_icons + Math.round(Math.random() * num_icons)) ;    
            console.log("Qtde de Pixels:", `--p${props.positionIndex}`, rollPixelsToMove* icon_height,"px");
            r.style.setProperty(`--p${props.positionIndex}`, `${rollPixelsToMove* icon_height}px`);
        }, anmt+500);
    }

    function myFunction_get() {
        // Get the styles (properties and values) for the root
        // var rs = getComputedStyle(r);
        alert(
            "The value of --p0 is: " + rs.getPropertyValue('--p0') +
            "The value of --p1 is: " + rs.getPropertyValue('--p1') +
            "The value of --p2 is: " + rs.getPropertyValue('--p2')
        );
    }    
 
</script>

<template>
    <div :class="`reel index${props.positionIndex}`"/>
    <div class="box"></div>
    <!-- style="position: fixed; top: 0; left:0; height: 20px; width: auto;" -->
    <button type="button" @click="rollComponent()">{{props.roll}} </button>
</template>

<style scoped lang="scss">


    $icon_width: 79px;
    $icon_height: 79px;
    $num_icons: 9;


    .box{
        position: absolute;
        top: 0;
        height: 20px;
        width: 20px;
        background-color: var(--blue); //////////////

    }

    .reel{
      border: 1px solid black;
      width: $icon_width;
      height: 3 * $icon_height;
      background-image: url(../public/slotreel.webp);
      background-repeat: repeat-y;
      background-position: 0 0px;
    }

    .index0{
        // transition: var(--t0);
        transition: 1000ms;
        background-position: 0 var(--p0);
    }

    .index1{
        transition: var(--t1);
        background-position: 0 var(--p1);
    }

    .index2{
        transition:  var(--t2);
        background-position: 0 var(--p2);
    }
</style>