<template>
  <div class="container-xl mx-auto">
    <router-view/>
  </div>
</template>

<script>

export default {
  created () {
    this.$router.push('/')
  }
}
</script>
