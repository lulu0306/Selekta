<template>
  <v-app>
    <v-app-bar
      app
      dark
      color='lime'
      height="42"
    >
    <div class="logo" >
    <img :src="require('./assets/logo.jpeg')">
    </div>
    <router-link to="/home" exact class="navLinks">Home</router-link>
    <button @click="showHide" >Catalogo</button>
    <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 white--text"
        dark
        icon
      >
      <v-icon v-if="icon === 'mdi-whatsapp'" size="24px">{{ icon }}</v-icon>
      </v-btn>
      <span>950396872/966906735</span>
    </v-app-bar>
    <div class="menu" v-if="toggle ? 'height:120px' : ''">
      <v-list class="pa-0" v-for="item in Items" :key="item.id" color="grey darken-1">
        <v-list-item ><v-btn text :to="item.to" exact class="links">{{item.name}} </v-btn></v-list-item>
      </v-list>
    </div>
    <v-main>
    <router-view ></router-view>
    </v-main>
  
  <v-footer
    color='lime' 
    height="122"
    ma='3rem'
  >
  <v-row class="row-class">
    <v-col class="col-class">
    <span class="white--text pt-0 ma-3" >Redes Sociales</span>
    <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 white--text"
        dark
        icon
      >
      <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-col>
    <v-col></v-col>
    <v-col></v-col>
  </v-row>
  </v-footer>
  </v-app>
</template>

<script lang='ts'>

export default {
  name: 'App',

  data: () => ({
  icons: [
    'mdi-facebook',
    'mdi-instagram',
    'mdi-whatsapp'
  ],
  Items:[
    {id:0, name:'Abarrotes',to:'/abarrotes'},
    {id:1, name:'frutas', to:'/frutas'},
    {id:2, name:'verduras', to:'/verduras'},
    {id:3, name:'Carnes', to:'/carnes'},
    {id:4, name:'Lacteos',to:'/lacteos'},
    {id:5, name:'Limpieza', to:'/limpieza'},
    {id:6, name:'Bebidas',to:'/bebidas'}
  ],
    toggle: false
  }),
  methods:{
    showHide(){
      return  this.toggle = !this.toggle
    }
  }
};
</script>
<style scoped>
.logo img{
  width: 136px;
  height: 42px;
  margin-right: 3rem !important;
}

a.navLinks{
text-decoration: none;
justify-content: center;
color: white;
margin: 0 16px 0 0;
}

a.links{
  height: 24px;
  color: white;
}

.copyright{
  display: flex;
  justify-content: center;
}


.row-class,.row-class{
  height: 100%;
}

.menu{
  padding-top: 2.5rem;
  display: flex;
  justify-content: space-around;

  background-color: #757575;
}

</style>
