<script setup lang="ts">
    import { computed, type Ref, ref } from 'vue';
</script>

<template>
    <header class="flex flex-row align-items-center justify-content-between">
        <div class="leftMenu flex flex-row align-items-center">
            <img src="/Cash-mangeBet.png" alt="MangeBet logo">
            <nav class="ml-5 flex">
                <RouterLink class="menuDiv" to="/"> Home </RouterLink>
                <RouterLink class="menuDiv" to="/cart"> Wallet</RouterLink>
                <RouterLink class="menuDiv" to="/bet"> Bet </RouterLink>
            </nav>
        </div>        
    </header>
</template>

<style scoped lang="scss">
    
    header{
        // background-color: red;
        height: 20vh;
        width: 100%;
        img{
            // background-color: blue;
            height: 4rem;
            padding-left: 2rem;
        }    
        a{
            background-color: var(--app-background);
            align-content: center;
            width: 20vh;
            height: 20vh;
            transition: 0.5s;
            text-align: center;
            text-decoration: none;
            font-size: 1.5rem;
            color: var(--app-white);
        }
        a:hover{
            background-color: var(--app-background-hover);
        }
        .router-link-exact-active{
            font-weight: bold;
        }
        #flag{
            height: 1.5rem;
            width: 4.5rem;
            cursor: pointer;
        }
    }


</style>