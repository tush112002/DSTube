<template>
  <div id="app">
    <Header/>
    <!-- <Profile/>
    <Home/> -->
    <!-- <View/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script setup>
import Header from './components/Home/Header.vue';
import Footer from './components/Home/Footer.vue';
import Profile from './components/Profile/Profile.vue'
import Home from './components/Home/Home.vue';
import View from './components/View/View.vue';
</script>

<style>

</style>
