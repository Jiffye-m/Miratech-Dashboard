<template>
<b-container-fluid bg-variant="dark">
    
                    
                        <div class="text-center">
                            <b-list-group class="nav nav-pills flex-column mt-4" v-if="show">

                                <b-list-group-item to="/" class="nav-link text-dark">
                                <i v-b-tooltip.hover title="Home" class="bi bi-house-check-fill"><span class="px-2">Home</span></i>
                                </b-list-group-item>

                                <b-list-group-item to="/about" class="nav-link text-dark"><i v-b-tooltip.hover title="About" class="bi bi-patch-question-fill"><span class="px-2">About</span></i>
                                </b-list-group-item>

                                <b-list-group-item to="/articles" class="nav-link text-dark"><i v-b-tooltip.hover title="Articles" class="bi bi-table"><span class="px-2">Articles</span></i>
                                </b-list-group-item>

                                <b-list-group-item to="/products" class="nav-link text-dark"><i v-b-tooltip.hover title="Products" class="bi bi-grid-3x2-gap-fill"><span class="px-2">Products</span></i>
                                </b-list-group-item>

                                <b-list-group-item to="/orders" class="nav-link text-dark"><i v-b-tooltip.hover title="Orders" class="bi bi-clipboard-fill"><span class="px-2">Orders</span></i><b-badge variant="success" pill>14</b-badge>
                                </b-list-group-item>

                                <b-list-group-item to="/customers" class="nav-link text-dark"><i v-b-tooltip.hover title="Customers" class="bi bi-people-fill"><span class="px-2">Customers</span></i><b-badge variant="danger" pill>{{ customers.length }}</b-badge>
                                </b-list-group-item>
                                
                                <b-list-group-item to="/settings" class="nav-link text-dark"><i  v-b-tooltip.hover title="Settings" class="bi bi-gear-fill"><span class="px-2">Settings</span></i>
                                </b-list-group-item>
                            </b-list-group>

                        </div>
                        
                        <div class="text-center">
                            <b-dropdown size="sm" text="Admin">
                                       <b-dropdown-item to="/settings"><i class="bi bi-gear-fill"><span class="px-2">Settings</span></i></b-dropdown-item>
                                       <b-dropdown-item  v-b-modal.modal><i class="bi bi-box-arrow-in-left"><span class="px-2">Log-Out</span></i></b-dropdown-item>
                             </b-dropdown>

                             <b-modal hide-footer id="modal" title="Are you Sure you want to Log-Out??">
                                 <div class="ps-5">
                                    <b-button variant="warning">No</b-button>
                                    <b-button variant="danger">Yes</b-button>
                                 </div>
                             </b-modal>

                        </div>
                        


</b-container-fluid>

</template>

<script>

export default{
    name:'Dashboard',
    data(){
        return{
            title:'Dashboard',
            show:true,
            customers:[]
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
        },
      async fetchCustomers(){
        const res = await fetch('http://localhost:3000/customers')
        const d = await res.json()
        this.customers = d
      }
    },
    mounted(){
      this.fetchCustomers()
    }
}

</script>

<style>
.nav-link:hover{
   background-color: beige;
}
</style>