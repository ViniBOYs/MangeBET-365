<script setup lang="ts">
  import Reel from '@/components/Reel.vue';
  import { type Ref, ref, reactive } from 'vue';

  
</script>

<template>
  <!-- <img src="/slotreel.webp" alt="" style="position: fixed; top: 0; left:0; height: 100%; width: auto;"> -->
  <div class="test">
    <div class="slots">
      <Reel :positionIndex="0"/>
      <Reel :positionIndex="1"/>
      <Reel :positionIndex="2"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  $icon_width: 79px;
  $icon_height: 79px;
  $num_icons: 9;

  .test{
    width: 100vw;
    height: 90vh;
    background-color: grey;
    border-radius: 20px;
    display: flex;
    justify-content: center;
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