<template>
    <div class="flex flex-col">

        <nav class="rounded-md w-full px-8 py-3">
            <ol class="list-reset flex">
                <li><a href="#" class="text-blue-600 hover:text-blue-700">Home</a></li>
                <li><span class="text-gray-500 mx-2">/</span></li>
                <li class="text-gray-500">Tambah Produk</li>
            </ol>
        </nav>

        <div class="relative ml-5 mr-5 flex items-center py-5 pt-2">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="mx-4 flex-shrink text-2xl font-bold text-gray-600">Form Tambah Data</span>
            <div class="flex-grow border-t border-gray-400"></div>
        </div>

        <form @submit.prevent="simpan">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-1 pl-3 pr-3">
                <div>
                    <div class="pt-3">
                        <label class="text-lg text-gray-600">Nama Produk</label>
                        <input type="text" v-model="produk.nama_produk"
                            class="h-10 w-full rounded-md pl-5 text-gray-600 shadow-md shadow-gray-400 outline-none"
                            placeholder="Nama Produk" />
                        <span v-if="error">{{ error }}</span>
                    </div>
                    <div class="pt-3">
                        <label class="text-lg text-gray-600">Harga Jual</label>
                        <input type="number" v-model="produk.harga_jual"
                            class="h-10 w-full rounded-md pl-5 text-gray-600 shadow-md shadow-gray-400 outline-none"
                            placeholder="Ex: 10000" />
                    </div>
                </div>
                <div>
                    <div class="pt-3">
                        <div class="grid grid-cols-2 gap-1">
                            <div>
                                <label class="text-lg text-gray-600">Jumlah</label>
                                <input type="number" v-model="produk.jumlah"
                                    class="h-10 w-full rounded-md pl-5 text-gray-600 shadow-md shadow-gray-400 outline-none"
                                    placeholder="0" />
                            </div>
                            <div>
                                <label class="text-lg text-gray-600">Satuan</label>
                                <input type="text" v-model="produk.satuan"
                                    class="h-10 w-full rounded-md pl-5 text-gray-600 shadow-md shadow-gray-400 outline-none"
                                    placeholder="Ex : PCS" />
                            </div>
                        </div>
                        <div class="pt-3">
                            <label class="text-lg text-gray-600">Deskripsi</label>
                            <input type="text" v-model="produk.deskripsi"
                                class="h-10 w-full rounded-md pl-5 text-gray-600 shadow-md shadow-gray-400 outline-none"
                                placeholder="Pembayaran Iuran 1%" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-auto mt-10 flex justify-center pb-10">
                <button type="submit"
                    class="h-9 w-[500px] rounded-md text-green-400 shadow-md outline outline-green-400 hover:bg-green-400 hover:text-white">Simpan</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SimpanView',
    data() {
        return {
            produk: {
                nama_produk: '',
                jumlah: '',
                satuan: '',
                harga_jual: '',
                deskripsi: ''
            }
        }
    },
    computed: mapGetters({
        pesan: 'pesan'
    }),

    methods: {
        simpan(){
            this.$store.dispatch("saveData", this.produk)
            .then((res) => {
                if(res.status === 201){
                    this.$swal('Success',
                        'Simpan Data Berhasil',
                        'success')
                    this.$router.push({ name: "home" });
                }else{
                    this.$swal('Error',
                        'Simpan Data Error',
                        'error')
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
    }
}
</script>