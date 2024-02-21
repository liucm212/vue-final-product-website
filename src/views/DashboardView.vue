<template>
  <NavbarComponent></NavbarComponent>
  <div class="container mx-auto">
    <div class="py-10">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  },
  data () {
    return {}
  },
  created () {
    // get token value in cookie(when user is login in)
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1'
    )
    // show the token value
    console.log(token)

    // put token into headers
    this.$http.defaults.headers.common.Authorization = token

    // axios post for user check (確認是否有登入)
    const api = `${process.env.VUE_APP_API}api/user/check`
    console.log(api)
    // trigger api to check wheather user is login
    this.$http.post(api).then((res) => {
      // if not login, redirect to /login path
      if (!res.data.success) {
        alert('未登入系統，請先登入！')
        this.$router.push('/login')
      }
    })
  }
}
</script>
