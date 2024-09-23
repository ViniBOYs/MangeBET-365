<script setup lang="ts">
  import { useCart } from '@/stores/Cart';
  import apiCrypto from '@/services/services.config';
  import { onMounted, ref } from 'vue';
  import { ConnectWalletButton } from "vue-connect-wallet";
  
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
  
  

  import { useMetaMaskWallet } from "vue-connect-wallet";

  const address = ref("");
  const wallet = useMetaMaskWallet();

  wallet.onAccountsChanged((accounts: string[]) => {
    console.log("account changed to: ", accounts[0]);
  });
  wallet.onChainChanged((chainId: number) => {
    console.log("chain changed to:", chainId);
  });

  const connect = async () => {
    const accounts = await wallet.connect();
    if (typeof accounts === "string") {
      console.log("An error occurred" + accounts);
    }
    address.value = accounts[0];
  };

  const switchAccount = async () => {
    await wallet.switchAccounts();
    connect();
  };

  const isConnected = async () => {
    const accounts = await wallet.getAccounts();
    if (typeof accounts === "string") return false;
    return accounts.length > 0;
  };

</script>

<template>
  <h1>Hello World</h1>
  <ConnectWalletButton @click="connect"/>
  <h2>Solana: ${{ solana.open }} USD</h2>
  <h2>Bitcoin: ${{ bitcoin.open }} USD</h2>
  <h2>Ethereum: ${{ ethereum.open }} USD</h2>
  <h2>Avalanche: ${{ avalanche.open }} USD</h2>

</template>