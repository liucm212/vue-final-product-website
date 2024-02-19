<template>
  <div class="container mx-auto">
    <div class="p-20 flex gap-x-10 justify-center">
      <p class="text-primary text-3xl font-bold">Color Primary</p>
      <p class="text-secondary text-3xl font-bold">Color Secondary</p>
      <p class="text-third text-3xl font-bold">Color Third</p>
    </div>
    <nav class="text-center">
      <router-link to="/" class="text-third">Home</router-link> |
      <router-link to="/about" class="text-third">About</router-link> |
      <router-link to="/login" class="text-third">Login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
