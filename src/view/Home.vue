<template>
  <div class="flex flex-col px-8 py-3">
    <div class="flex justify-between">
      <div>
        <nav class="rounded-md w-full">
          <ol class="list-reset flex">
            <li><a href="#" class="text-blue-600 hover:text-blue-700">Home</a></li>
            <li><span class="text-gray-500 mx-2">/</span></li>
            <li class="text-gray-500">Data Produk</li>
          </ol>
        </nav>
      </div>
      <div class="w-28 h-8 bg-blue-400 hover:bg-gray-400 text-center rounded-md text-white">
        <router-link :to="'/add'" style="color:white" class="text-white py-2 cursor-pointer">Tambah Data</router-link>
      </div>
    </div>
    <div>
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full">
            <thead class="bg-white border-b">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  #
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Nama Produk
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Jumlah
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Satuan
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Harga Jual
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in data" v-bind:key="item.id"
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{i+1}}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{item.nama_produk}}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{item.jumlah}}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{item.satuan}}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{item.harga_jual}}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button class="w-1/2 h-8 bg-yellow-400 text-white hover:bg-yellow-300 rounded-l-md">
                    <router-link v-bind:to="'/edit/' + item.id" class="text-white">
                      Edit
                    </router-link>
                  </button>
                  <button @click="hapus(item.id)" class="w-1/2 h-8 bg-red-400 text-white hover:bg-red-300 rounded-r-md">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeView',
  computed: mapGetters({
    data: 'allData'
  }),
  methods: {
    hapus(id){
      this.$store.dispatch('deleteProduk',id)
      .then((res)=>{
        console.log(res);
        this.$swal('Success',
          'Hapus Data Berhasil',
          'success')
      })
      .catch((err)=>{
        console.log(err);
        this.$swal('Error',
          'Hapus Data Error',
          'error')
      })
    }
  },
 
  created() {
    this.$store.dispatch('getAll')
  }
}
</script>

