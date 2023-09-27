<script setup lang="ts">
import Home from '@/views/Home';

new Promise((res) => {
    setTimeout(() => {
        res('123');
    }, 100);
});

const x = '123';
const age = '3434';
</script>

<template>
  <h1 class="wrapper">
    hello, word
    {{ x }} + {{ age }}
    <Home />
  </h1>
</template>

<style lang="css" scoped>
.wrapper {
    background: red;
}
</style>
