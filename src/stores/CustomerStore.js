import { defineStore } from "pinia"
import { ref } from "vue"




export const useCustomerStore = defineStore('customerStore', {
  state: () => ({
    customers: [],
    loading: false
  }),
  getters: {
    favs() {
      return this.customers.filter(t => t.isFav)
    },
    favCount(){
      return this.customers.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    }, 
    totalCount: (state) => {
      return state.customers.length
    }
  },
  actions: {
    async getTasks(){
      this.loading = true

      const res = await fetch('http://localhost:3000/customers')
      const data = await res.json()
      this.customers = data
      
      this.loading = false
    },
    async addTask(customer){
       this.customers.push(customer)

       const res = await fetch('http://localhost:3000/customers', {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {'Content-Type' : 'application/json'}
       })
       if(res.error){
        console.log(res.error)
       }

    },
    async deleteTask(id){
        this.customers = this.customers.filter(t => {
          return t.id !== id
        })

        const res = await fetch('http://localhost:3000/customers/' + id, {
         method: 'DELETE',
        })
        if(res.error){
         console.log(res.error)
        }
    },
    async toggleFav(id){
          const customer = this.customers.find(t => t.id === id)
          customer.isFav = !customer.isFav

          
       const res = await fetch('http://localhost:3000/customers/' + id, {
        method: 'PATCH',
        body: JSON.stringify({isFav: customer.isFav}),
        headers: {'Content-Type' : 'application/json'}
       })
       if(res.error){
        console.log(res.error)
       }
    }
  }
})