<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AboutUs from './components/AboutUs.vue'
import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skill from './components/Skill.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <img alt="Profile pic" class="logo" src="./assets/adrian.jpeg" width="250" height="250" />

    <div id="profile">
      <Profile></Profile>
    </div>

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    
  </header>

  <main>
    <Education></Education>
  </main>
  
  <Skill></Skill>
</template>

<style scoped>

header {
  line-height: 1.5;
  display: flex;
  align-items:center ;
  width: 1024px;
}

.logo {
  display: block;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
