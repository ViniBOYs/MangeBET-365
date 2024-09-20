<script setup lang="ts">
  import Reel from '@/components/Reel.vue';

  import { type Ref, ref, reactive } from 'vue'; 
  import func from '../../vue-temp/vue-editor-bridge';

  
  const checkboxStats = ref(false);
  
  const rolling = checkboxStats;

  // var teste: any = document.querySelector('Reel.vue')

  function outCallBack(){

    Reel.rollComponent().start();
  
  }

</script>

<template>
  <!-- <img src="/slotreel.webp" alt="" style="position: fixed; top: 0; left:0; height: 100%; width: auto;"> -->
  <div class="betScreen">
    <div class="slots">
      <Reel :positionIndex="0" :roll="rolling"/>
      <Reel :positionIndex="1" :roll="rolling"/>
      <Reel :positionIndex="2" :roll="rolling"/>  
    </div>



    <!-- <button type="button" @click="outCallBack">RollAll</button> -->



    <label class="switch">
      <input class="chk" type="checkbox" v-model="checkboxStats">
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped lang="scss">
  $icon_width: 79px;
  $icon_height: 79px;
  $num_icons: 9;

  .betScreen{
    width: 100vw;
    height: 80vh;
    background-color: grey;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  
    .slots{
      width: 4 * $icon_width;
      height: 3.5 * $icon_height;
      border: 1px solid black;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  
  }



  .switch {
  font-size: 100px;
  position: relative;
  display: inline-block;
  width: 1.2em;
  height: 3.3em;

        
    /* Hide default HTML checkbox */
    .switch .chk {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 5px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: .5em;
      width: 2.4em;
      border-radius: 5px;
      left: -0.6em;
      top: 0.2em;
      background-color: white;
      box-shadow: 0 6px 7px rgba(0,0,0,0.3);
      transition: .4s;
    }

    .slider:before, .slider:after {
      content: "";
      display: block;
    }

    .slider:after {
      background: linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 0) 0 50% / 50% 100%,
        repeating-linear-gradient(90deg,rgb(255, 255, 255) 0,rgb(255, 255, 255),rgb(255, 255, 255) 20%,rgb(255, 255, 255) 20%,rgb(255, 255, 255) 40%) 0 50% / 50% 100%,
        radial-gradient(circle at 50% 50%,rgb(255, 255, 255) 25%, transparent 26%);
      background-repeat: no-repeat;
      border: 0.25em solid transparent;
      border-left: 0.4em solid #ffffff;
      border-right: 0 solid transparent;
      transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
      transform: translateX(-22.5%) rotate(90deg);
      transform-origin: 25% 50%;
      position: relative;
      top: 0.5em;
      left: 0.55em;
      width: 2em;
      height: 1em;
      box-sizing: border-box;
    }

    .chk:checked + .slider {
      background-color: limegreen;
    }

    .chk:focus + .slider {
      box-shadow: 0 0 1px limegreen;
    }

    .chk:checked + .slider:before {
      transform: translateY(2.3em);
    }

    .chk:checked + .slider:after {
      transform: rotateZ(90deg) rotateY(180deg) translateY(0.45em) translateX(-1.4em);
    }
  }

</style>