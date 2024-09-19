<script setup>

    const icon_height = 79,
        icon_width = 79,
        num_icons = 9;
// altura imagem 711

    const props = defineProps({
        positionIndex: { type: Number },
    });


    var r = document.querySelector(':root')
    function myFunction_set() {
        const rollPixelsToMove = (props.positionIndex + 2) * num_icons + Math.round(Math.random() * num_icons) * icon_height;



        console.log("Qtde de Pixels:", `--p${props.positionIndex}`, rollPixelsToMove,"px");
        r.style.setProperty(`--p${props.positionIndex}`, `${rollPixelsToMove}px`);
        
        r.style.setProperty('--blue', 'red');
    }

    function myFunction_get() {
        // Get the styles (properties and values) for the root
        var rs = getComputedStyle(r);
        alert(
            "The value of --p0 is: " + rs.getPropertyValue('--p0') +
            "The value of --p1 is: " + rs.getPropertyValue('--p1') +
            "The value of --p2 is: " + rs.getPropertyValue('--p2')
        );
    }    
    
    // console.log("--/--/--");


    
</script>

<template>
    <div :class="`reel index${props.positionIndex}`"/>
    <div class="box"></div>
    <button type="button" @click="myFunction_set(),myFunction_get()">Ct</button>
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
        transition: 1000ms;
        background-position: 0 var(--p0);
    }

    .index1{
        transition: 1000ms;
        background-position: 0 var(--p1);
    }

    .index2{
        transition: 1000ms;
        background-position: 0 var(--p2);
    }
</style>