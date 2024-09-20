<script setup lang="ts">
  import { useCart } from '@/stores/Cart';
  import apiCrypto from '@/services/services.config';
  import { onMounted, ref } from 'vue';
  
  const solana = ref();
  const fetchSolana = () => Promise
    apiCrypto.get("/solusd").then((response)=>solana.value = response.data);
  onMounted(fetchSolana);

  const bitcoin = ref();
  const fetchBitcoin = () => Promise
    apiCrypto.get("/btcusd").then((response)=>bitcoin.value = response.data);
  onMounted(fetchBitcoin);
  
  const ethereum = ref();
  const fetchEthereum = () => Promise
    apiCrypto.get("/ethusd").then((response)=>ethereum.value = response.data);
  onMounted(fetchEthereum);

  const avalanche = ref();
  const fetchAvalanche = () => Promise
    apiCrypto.get("/avaxusd").then((response)=>avalanche.value = response.data);
  onMounted(fetchAvalanche);


</script>

<template>
  <h1>Hello World</h1>
  <h2>Solana: ${{ solana.open }} USD</h2>
  <h2>Bitcoin: ${{ bitcoin.open }} USD</h2>
  <h2>Ethereum: ${{ ethereum.open }} USD</h2>
  <h2>Avalanche: ${{ avalanche.open }} USD</h2>

</template>