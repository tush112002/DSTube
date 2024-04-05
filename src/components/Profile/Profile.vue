<template>
  <div class="page">
    <Header />
    <div class="container">
      <div class="profile-form">
        <h2 id="title" class="title">{{ isEditMode ? 'Update' : 'Enter' }} Profile Information</h2>
        <form class="form-container" @submit.prevent="saveOrUpdateProfile">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="formData.phone" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" required>
          </div>
          <div class="button-group">
            <button type="submit" class="save-button">{{ isEditMode ? 'Update' : 'Save' }}</button>
          </div>
        </form>
      </div>
    </div>
    <div class="container container-2">
      <div class="profile-details-container">
        <div class="profile-details">
          <h2>Profile Details</h2>
          <div class="details">
            <p><strong>Name:</strong> {{ fullName }}</p>
            <p><strong>Email:</strong> {{ formData.email }}</p>
            <p><strong>Phone:</strong> {{ formData.phone }}</p>
          </div>
          <button v-if="!isEditMode" @click="toggleEditMode" class="update-button">Update</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  password: ''
});

const isEditMode = ref(false);

const fullName = computed(() => {
  return formData.value.name;
});

const saveOrUpdateProfile = () => {
  if (isEditMode.value) {
    console.log('Updated Profile Data:', formData.value);
    isEditMode.value = false;
  } else {
    console.log('Saved Profile Data:', formData.value);
  }
};

const toggleEditMode = () => {
  isEditMode.value = true;
};
</script>


<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 60px;
}

.profile-form {
  padding: 20px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 96%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.save-button,
.update-button {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-button {
  margin-left: 220px;
  align-self: center;
  width: 100px;
  background-color: #28a745;
}

.save-button:hover,
.update-button:hover {
  background-color: #0056b3;
}

.profile-details-container {
  width: 80%;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-details {
  padding-top: 20px;
}

.details p {
  margin-bottom: 10px;
}

.container-2 {
  padding: 10px;
  margin-top: -100px;
}
</style>