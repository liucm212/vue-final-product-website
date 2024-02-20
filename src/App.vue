<template>
  <div class="container mx-auto">
    <NavbarComponent></NavbarComponent>
    <div class="p-20 flex gap-x-10 justify-center">
      <p class="text-primary text-3xl font-bold">Color Primary</p>
      <p class="text-secondary text-3xl font-bold">Color Secondary</p>
      <p class="text-third text-3xl font-bold">Color Third</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  },
  created () {
    this.$router.push('/dashboard')
  }
}
</script>
