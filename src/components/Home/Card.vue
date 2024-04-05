<template>
  <div>
    <div v-for="index in videolist" :key="index.id">
      <router-link :to="'/view/' + index.id">
        <div class="card">
          <img :src="index.imgSrc" :alt="'Card Image ' + index.id" class="card-image">
          <div class="card-details">
            <h3 class="card-title">{{ index.title }}</h3>
            <p class="card-views">Views: {{ index.views }}</p>
            <p class="card-desc">{{ index.desc }}</p>
            <p class="card-firstname">{{ index.creator.firstname }}</p>
            <p class="card-lastname">{{ index.creator.lastname }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Data from '../../assets/config/data.json'

const videolist = ref(Data);
</script>

<style scoped>
.card {
  display: flex;
  margin: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 300px;
  height: auto;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card-details {
  flex: 1;
  padding: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-views {
  font-size: 14px;
  color: black;
  margin-bottom: 5px;
}

.card-info {
  font-size: 14px;
}

.card:last-child {
  margin-bottom: 70px;
}
</style>
