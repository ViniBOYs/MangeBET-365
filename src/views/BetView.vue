<script setup lang="ts" >
import { onMounted, ref } from 'vue';

  const 
        icon_width = 79,	
        icon_height = 79,	
        num_icons = 9,	
        time_per_icon = 100,
        indexes = [0, 0, 0];


  const roll = (reel:any, offset = 0) => {
    // Delay diferente para cada
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons); 
    
    return new Promise((resolve, reject) => {
      
      const style = getComputedStyle(reel),
            backgroundPositionY = parseFloat(style["background-position-y"]),
            targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
            normTargetBackgroundPositionY = targetBackgroundPositionY%(num_icons * icon_height);
      
      setTimeout(() => {
        reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`; // Tempo e tipo da animação 
        reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`; // Final pixel
      }, offset * 150);
        
      // Reiniciar a posição da roleta
      setTimeout(() => {
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;

        resolve(delta%num_icons);
      }, (8 + 1 * delta) * time_per_icon + offset * 150);
      
    });
  };
  

  function rollAll() {
 
    const reelsList:NodeListOf<Element> = document.querySelectorAll('.slots > .reel');
    
    Promise
      
      // eatch to array (malemá sei codar em js que dirá em ts, como q faz pra tirar esses erros do code)
      .all( [...reelsList].map((reel, i) => roll(reel, i)) )	
      
      // Todos acabam de girar
      .then((deltas) => {
        deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta)%num_icons);
        // Win 🔥🔥
        if (indexes[0] == indexes[1] || indexes[1] == indexes[2]) {
          const winCls = indexes[0] == indexes[2] ? "win2" : "win1";
          document.querySelector(".slots").classList.add(winCls);
          setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000)
        }
      });
    };
    
  const vinte = ref(20);
  
</script>



<template>
  <section class="betScreenBackground">
    <div class="flex ">
      <div class="slots">
        <div class="reel"></div>
        <div class="reel"></div>
        <div class="reel"></div>
      </div>

      <button @click="rollAll()" role="button" class="golden-button">
        <span class="golden-text" v-if="vinte == 20">Row</span>
        <span class="golden-text" v-else>L</span>

      </button>

    </div>
  </section>


</template>

<style scoped lang="scss">
  $icon_width: 79px;
  $icon_height: 79px;
  $num_icons: 9;


  .golden-button {
    touch-action: manipulation;
    outline: none;
    font-family: inherit;
    font-size: 1.05rem;
    box-sizing: border-box;
    border: none;
    border-radius: 0.3em;
    height: 3.5 * $icon_width;
    text-transform: uppercase;
    padding: 0 1em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(110, 80, 20, 0.4),
      inset 0 -2px 5px 1px rgba(139, 66, 8, 1),
      inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    background-image: linear-gradient(
      160deg,
      #a54e07,
      #b47e11,
      #fef1a2,
      #bc881b,
      #a54e07
    );
    border: 1px solid #a55d07;
    color: rgb(120, 50, 5);
    text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
    transition: all 0.2s;
    background-size: 100% 100%;
    background-position: center;
  }

  .golden-button:hover {
    background-size: 150% 150%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23),
      inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    border: 1px solid rgba(165, 93, 7, 0.6);
    color: rgba(120, 50, 5, 0.8);
  }


  .betScreenBackground{
    width: 100vw;
      height: 80vh;
      border-radius: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
  }




  .slots {  
    position: relative;
    width: 4 * $icon_width;
    height: 3.5 * $icon_height;
    display: flex;
    justify-content: space-between;
    padding: 0.3 * $icon_width;
    background: linear-gradient(
      160deg,
      #a54e07,
      #b47e11,
      #fef1a2,
      #bc881b,
      #a54e07
    );
    border-top: 1px solid #a54e07;
    border-right: 1px solid #a54e07;
    border-left: 1px solid rgba(black, 0.4);
    border-bottom: 1px solid rgba(black, 0.4);
    box-shadow: -2px 2px 3px rgba(black, 0.3);
    border-radius: 3px;
    
    &::before, 
    &::after {
      content:"";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 2px;
    }
    
    &::before {
      left: 0;
      transform: translate(-200%, -50%);
    }
    
    &::after {
      right: 0;
      transform: translate(200%, -50%);
    }

    // Vitória Incompleta -> 2 items iguais	
    @keyframes win1 {
      0% { background: linear-gradient(45deg, orange 0%, yellow 100%); 
      box-shadow: 0 0 80px orange }
      100% { background: linear-gradient(
        160deg,
        #a54e07,
        #b47e11,
        #fef1a2,
        #bc881b,
        #a54e07
      ); 
      box-shadow: -2px 2px 3px rgba(black, 0.3); }
    }
    
    // Vitória Completa -> 3 items iguais
    @keyframes win2 {
      0% { background: linear-gradient(45deg, lightblue 0%, lightgreen 100%); 
      box-shadow: 0 0 80px lightgreen }
      100% { background: linear-gradient(
        160deg,
        #a54e07,
        #b47e11,
        #fef1a2,
        #bc881b,
        #a54e07
      );
      box-shadow: -2px 2px 3px rgba(black, 0.3); }
    }
    
    &.win1 {
      animation: win1 200ms steps(2, end) infinite;
    }
    
    &.win2 {
      animation: win2 200ms steps(2, end) infinite;
    }

    .reel {
      position: relative;
      width: $icon_width;
      height: 3 * $icon_height;
      border: 1px solid rgba(black, 0.3);
      border-radius: 3px;
      overflow: hidden;
      background-image: url(../public/slotreel.webp);
      background-position: 0 0;
      background-repeat: repeat-y;
      
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(black, 0.4) 0%, transparent 30%, transparent 70%, rgba(black, 0.4) 100%);
        box-shadow: inset 0 0 6px 2px rgba(black, 0.3);
      }

    }
    
    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      transform: translate(-50%, calc(100% + 30px));
      text-align: center;
      font-size: 0.80rem;
      color: #444;
      
      &:last-child {
        transform: translate(-50%, calc(100% + 60px));
      }
      
      a { color: red; font-weight: 700; }
    }
  }

</style>
