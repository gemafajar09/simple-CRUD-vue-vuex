import axios from 'axios'

export const GET_PRODUK = 'GET_PRODUK'
export const SAVE_PRODUK = 'SAVE_PRODUK'

    const state = {
        dataResult : [],
        pesan: false
    }

    const getters = {
        allData : state => state.dataResult
    }

    const mutations = {
        GET_PRODUK(state, data) 
        {
            state.dataResult = data
        },
        pesan: state => state.pesan
    }

    const actions = {
        getAll({commit}) {
            axios.get("http://localhost:3000/data")
            .then((res) => {
                commit(GET_PRODUK,res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
       
        saveData({dispatch},produk) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:3000/data',produk)
                .then((res) => {
                    if(res.status === 201){
                        resolve(res)
                        state.pesan = true
                    }
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
                dispatch('getAll')
            
            })
        },

        updateProduk({dispatch},data){
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:3000/data/${data.id}`,data)
                .then((res) => {
                    if(res.status === 200){
                        resolve(res)
                        state.pesan = true
                    }
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
                dispatch('getAll')
            })
        },

        deleteProduk({dispatch},id){
            return new Promise((resolve, reject) => {
                axios.delete(`http://localhost:3000/data/${id}`)
               .then((res) => {
                    if(res.status === 200){
                        resolve(res)
                        dispatch('getAll')
                    }
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
    }

export default {
    state,
    getters,
    mutations,
    actions,
}