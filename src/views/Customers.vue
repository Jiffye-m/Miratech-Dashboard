<template>
  <main>
    
    <header class="pb-5">
      <img src="../assets/logo.png" alt="">
      <h1>Customers</h1>
    </header>

    <!-- Add new customer form modal -->

   

<b-modal class="bg-dark" hide-footer id="modal2" title="Add New Customer">

  
          
              <b-input type="text"
                placeholder="First Name....."
                v-model="firstname"
                class="form-control mb-3"
              />
            
              <b-input type="text"
              placeholder="Last Name....."
              v-model="lastname"
             class="form-control mb-3"
              />

              <b-input type="text"
              placeholder="Contact ....."
              v-model="contact"
             class="form-control mb-3"
              />

              <b-input type="text"
              placeholder="Email ....."
              v-model="email"
             class="form-control mb-3"
              />
            
               <b-button variant="outline-dark" @click="addCust">Add</b-button>
        
  
</b-modal>
    

    <!-- Filter -->

    <b-container-fluid class="p-5">
      <b-row>
        <b-col>
         <button v-b-modal.modal2 class="btn btn-success"><i class="bi bi-plus"><span class="px-2">Add new Customer</span></i></button>
        </b-col>
        <b-col>
          <nav class="filter">
        <button class="btn btn-outline-dark" @click="filter = 'all'">All Customers</button>
        <button class="btn btn-outline-dark" @click="filter = 'favs'">Fav Customers</button>
          </nav> 
        </b-col>
      </b-row>
    </b-container-fluid>




  <div class="container">
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in customers" :key="customer.id">
      <th scope="row">{{ customer.id }}</th>
      <td>{{customer.firstname}}</td>
      <td>{{ customer.lastname }}</td>
      <td>{{ customer.contact }}</td>
      <td>{{ customer.email }}</td>
      <td><button @click="deleteCust(customer.id)" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
        <button @click="editCust" class="mx-3 btn btn-warning"><i class="bi bi-pen-fill"></i></button>
      </td> 

<!-- Modal -->

                           <b-modal v-if="showModal" hide-footer id="modal3">
                                 <div class="ps-5">
                                    Customer {{ customer.firstname + ' ' + customer.lastname }} Has been Successfully Added
                                 </div>
                             </b-modal>
    </tr>
  </tbody>
</table>

      
        <b-modal v-if="editedCustomer" hide-footer>
        <b-input type="text"
                placeholder="First Name....."
                v-model="firstname"
                class="form-control mb-3"
              />
            
              <b-input type="text"
              placeholder="Last Name....."
              v-model="lastname"
             class="form-control mb-3"
              />

              <b-input type="text"
              placeholder="Contact ....."
              v-model="contact"
             class="form-control mb-3"
              />

              <b-input type="text"
              placeholder="Email ....."
              v-model="email"
             class="form-control mb-3"
              />
            
               <b-button variant="outline-dark" @click="addCust">Add</b-button>
              </b-modal>
      
  </div>




  </main>
</template>

<script>
import axios from 'axios'

  export default {
    name:'Customers',
    data() {
      return {
        showModal:false,
        editedCustomer:false,
        newCustomer: null,
        firstname:'',
        lastname:'',
        contact:'',
        email:'',
        customers: [
          // { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          // { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          // { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          // { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    methods:{
      async fetchCustomers(){  
         axios .get('http://localhost:3000/customers')
               .then(response => (this.customers = JSON.parse(response)))
     },
    async addCust(){ if(!this.newCustomer){
      const id = 1
          const data = {id: parseInt(Math.random() * 10), firstname: this.firstname, lastname: this.lastname, contact: this.contact, email: this.email}
          this.newCustomer = data
          this.customers.push(this.newCustomer)
       const res = await fetch('http://localhost:3000/customers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type' : 'application/json'}
       })
          this.firstname =''
          this.lastname =''
          this.showModal = true
          location.reload()
       if(res.error){
        console.log(res.error)
       }
      else {
        return false
      }
      }
    },
    async deleteCust(id){
        this.customers = this.customers.filter(customer => {
          return customer.id !== id
        })
        const res = await fetch('http://localhost:3000/customers/' + id, {
         method: 'DELETE',
        })
        location.reload()
        if(res.error){
         console.log(res.error)
        }
      },
      async editCust(){
           this.editedCustomer = true
      }
    },
    mounted(){
      this.fetchCustomers()
    }
  }
</script>

<style lang="scss" scoped>

</style>