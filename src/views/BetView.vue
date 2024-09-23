<script setup lang="ts">
  import Reel from '@/components/Reel.vue';
  import { type Ref, ref, reactive } from 'vue'; 

  const rodaRodaJequiti: any = ref<InstanceType<typeof Reel> | null>(null); 

  function outCallBack(){
    console.log("Apertou")    
    rodaRodaJequiti.value.rollAll();    
  }
  

</script>

<template>
  <!-- <img src="/slotreel.webp" alt="" style="position: fixed; top: 0; left:0; height: 100%; width: auto;"> -->
  <div class="betScreen">
    <div class="slots">
      <Reel ref="rodaRodaJequiti" :positionIndex="0" />
      <Reel ref="rodaRodaJequiti" :positionIndex="1" />
      <Reel ref="rodaRodaJequiti" :positionIndex="2" />  
    </div>

    <button type="button" @click="outCallBack">Rodar</button>

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

</style>