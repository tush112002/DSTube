<template>
  <div id="app">
    <header>
      <h1 class="tab">DSTube</h1>
      <form class="searchtab">
        <input type="text" placeholder="Search..." class="search-input">
        <button type="submit" class="search-button">Search</button>
      </form>
      <nav>
        <router-link to="/" class="nav-button home-button">Home</router-link>
        <router-link to="/profile" class="nav-button profile-button">Profile</router-link>
      </nav>
    </header>
  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

header {
  background-color: #000000;
  color: #fff;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  margin-left: -10px; 
}

.tab {
  background-color: red;
  width: 100px;
  margin-left: 20px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
}

nav {
  display: flex;
}

.nav-button {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  cursor: pointer;
}

.home-button {
  margin-right: 20px;
}

.profile-button {
  margin-right: 50px;
}

.nav-button:hover {
  background-color: #0056b3;
}

.search-input {
  padding: 10px;
  font-size: 14px;
  width: 300px;
  margin-right: 10px;
  border-radius: 5px;
}

.search-button {
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
}
</style>
