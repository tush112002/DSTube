<template>
  <div>
    <div class="card" v-for="(index) in videos" :key="index">
      <img :src="index.imageUrl" :alt="'Card Image ' + index" class="card-image">
      <div class="card-details">
        <h3 class="card-title">{{ index.title }}</h3>
        <p class="card-views">Views: {{ index.views }}</p>
        <p class="card-info">{{ index.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const videos = [
  {
    imageUrl: 'https://i.ytimg.com/vi/4o6MKdn7HWY/maxresdefault.jpg',
    title: 'Egg And Beans! | Mr Bean Animated Season 1 | Full Episodes | Mr Bean Official',
    views: '150K',
    description: 'Mr Bean gets in a flap when a monster turns up in his cake-mix! The good news, though, is that the monster turns out to be a harmless baby bird.',
  },
  {
    imageUrl: 'https://i.ytimg.com/vi/fDdF6VXEU2c/maxresdefault.jpg',
    title: 'Mr Bean Coffee Shop! | Mr Bean Animated season 3 | Full Episodes | Mr Bean',
    views: '1,804,210',
    description: 'Bean is fascinated by the amount of money people will pay for small cups of coffee! Scenting a fortune to be made, Bean opens up his own, strange, successful coffee bar!'
  },
  {
    imageUrl: 'https://i.ytimg.com/vi/eQ6MMRn1ILM/maxresdefault.jpg',
    title: 'For Sale! | Mr Bean Animated season 3 | Full Episodes | Mr Bean',
    views: '1.6M',
    description: 'Mrs Wicket is selling up and moving on... What will happen to Mr Bean?'
  }
];

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
</style>