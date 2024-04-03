<template>
  <div class="container">
    <div class="small-card">
      <img src="https://i.ytimg.com/vi/4o6MKdn7HWY/maxresdefault.jpg" alt="Card Image" class="card-image">
      <div class="card-content">
        <h3>Egg And Beans! | Mr Bean Animated Season 1 | Full Episodes | Mr Bean Official</h3>
        <p>Mr Bean gets in a flap when a monster turns up in his cake-mix! The good news, though, is that the monster turns out to be a harmless baby bird.</p>
        <p>Views: 12,567,888</p>
      </div>
      <input type="text" placeholder="Enter your comment" v-model="comment" class="comment-input">
      <button @click="submitComment" class="submit-button">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const comment = ref('');

const submitComment = () => {
  if (comment.value.trim() !== '') {
    alert("Comment Added");
    console.log('Comment submitted:', comment.value);
    comment.value = '';
  } else {
    console.error('Comment cannot be empty');
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

.small-card {
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px; 
  margin-top: 20px; 
}

.card-image {
  width: 100%;
  max-height: 400px; 
  object-fit: cover;
  border-radius: 10px 10px 0 0; 
}

.card-content {
  padding: 20px 0; 
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px; 
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
