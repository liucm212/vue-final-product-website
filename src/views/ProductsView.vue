<template>
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr class="text-center">
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  類別
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  原價
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  售價
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  是否啟用
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                  編輯
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white-100 border-b" v-for="item of products" :key="item.id">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ item.category }}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ item.origin_price }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ item.price }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <span v-if="item.is_enabled" class="text-green-600">已啟用</span>
                  <span v-else class="text-red-600">未啟用</span>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <div class="flex justify-center gap-x-4">
                    <button
                      class="middle none center rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      編輯
                    </button>
                    <button
                      class="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      console.log(api)
      this.$http.get(api).then((res) => {
        // console.log(res)
        // if 有接收到資料，就將資料中的products, pagination傳進component
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
