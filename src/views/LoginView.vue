<template>
  <div class="min-h-screen flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">狀態：<span class="text-third">{{ msg }}</span></h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <form @submit.prevent="login" class="px-5 py-7">
          <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
          <input v-model="user.username" type="email" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
          <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
          <input v-model="user.password" type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
          <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
              <span class="inline-block mr-2">Login</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </button>
        </form>
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
              <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <span class="inline-block ml-1">Forgot Password</span>
              </button>
            </div>
            <div class="text-center sm:text-right  whitespace-nowrap">
              <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span class="inline-block ml-1">Help</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
              <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span class="inline-block ml-1">Back to your-app.com</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      msg: '尚未登入'
    }
  },
  methods: {
    login () {
      const loginAPI = `${process.env.VUE_APP_API}admin/signin`
      console.log(loginAPI)
      this.$http.post(loginAPI, this.user).then((res) => {
        // if login successfully, push cookie into header and redirect to /dashboard,
        if (res.data.success) {
          // get token and expired from res.data
          const { token, expired, message } = res.data
          this.msg = message
          // set cookie
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          // Important: If axios is used with multiple domains, the AUTH_TOKEN
          // will be sent to all of them.
          // See below for an example using Custom instance defaults instead.
          // 將token寫進headers
          this.$http.defaults.headers.common.Authorization = token
          this.$http.defaults.headers.post['Content-Type'] =
          'application/x-www-form-urlencoded'
          // redirect to /dashboard
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
