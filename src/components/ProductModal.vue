<template>
    <div class="flex justify-end">
        <button @click="toggleModal" class="none center rounded-lg bg-green-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-greem-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Toggle Modal</button>
    </div>
    <!-- Modal -->
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <!-- modal -->
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <!-- modal-header -->
                  <h3 class="text-3xl leading-6 font-medium text-gray-900 mb-4" id="modalHeader">
                    製作品項
                  </h3>
                  <!-- modal-body -->
                  <form method="post" class="grid grid-cols-2 gap-4 justify-between">
                    <div class="flex flex-col">
                      <label for="productName" class="text-2xl font-bold">名稱</label>
                      <input id="productName" type="text" class="h-8 px-2 border border-black rounded" v-model="tempProduct.title">
                    </div>
                    <div class="flex flex-col">
                      <label for="productCategory" class="text-2xl font-bold">分類</label>
                      <select id="productCategory" class="h-8 px-2 border border-black rounded" v-model="tempProduct.category">
                        <option value="分類一">分類一</option>
                        <option value="分類二">分類二</option>
                        <option value="分類三">分類三</option>
                        <option value="分類四">分類四</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label for="originPrice" class="text-2xl font-bold">原始價格</label>
                      <input id="originPrice" type="number" class="h-8 px-2 border border-black rounded" v-model="tempProduct.origin_price">
                    </div>
                    <div class="flex flex-col">
                      <label for="sellingPrice" class="text-2xl font-bold">售價</label>
                      <input id="sellingPrice" type="number" class="h-8 px-2 border border-black rounded" v-model="tempProduct.price">
                    </div>
                    <div class="flex flex-col">
                      <label for="productUnit" class="text-2xl font-bold">單位</label>
                      <select id="productUnit" class="h-8 px-2 border border-black rounded" v-model.number="tempProduct.unit">
                        <option value="個">個</option>
                        <option value="打">打</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label for="isEnabled" class="text-2xl font-bold">是否啟用</label>
                      <select id="isEnabled" class="h-8 px-2 border border-black rounded" v-model.number="tempProduct.is_enabled">
                        <option selected value="true">是</option>
                        <option value="false">否</option>
                      </select>
                    </div>
                    <div class="col-span-2">
                      <div class="flex flex-col">
                        <label for="imgURL" class="text-2xl font-bold">上傳圖片</label>
                        <input id="imgURL" type="file" class="h-8 border border-black rounded">
                      </div>
                      <div class="w-100">
                        <img src="圖片位置" alt="圖片說明"/>
                      </div>
                    </div>
                  </form>
                </div>
                <!-- modal-button -->
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click.prevent="addItem(tempProduct)"  type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Add Item
                    </button>
                    <button @click="modalCancel" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      isOpen: false,
      tempProduct: {}
    }
  },
  methods: {
    toggleModal () {
      this.isOpen = !this.isOpen
    },
    modalCancel () {
      this.$emit('modal-cancel')
      this.toggleModal()
    },
    // emit addItem when the add item is clicked
    addItem (tempProduct) {
      console.log('ADD ITEM!')
      this.$emit('update-product', tempProduct)
      this.toggleModal()
    }
  },
  computed: {
    // transfer string into boolean
    isEnabledCheck () {
      return this.tempProduct.is_enabled === 'false' ? false : Boolean(this.tempProduct.is_enabled)
    }
  },
  watch: {
    // when product is changed,
    product () {
      this.tempProduct = this.product
    },
    // when product.isEnables chnage it's return data, change is_Enabled in tempProduct
    isEnabledCheck (newBoolean) {
      this.tempProduct.is_enabled = newBoolean
    }
  },
  emits: ['update-product', 'modal-cancel']
}
</script>
