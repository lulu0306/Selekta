<template>
  <v-app>
    <v-app-bar
      app
      dark
      color='lime'
      height="40"
      class="over-menu"
    >
    <div class="logo" >
    <img :src="require('./assets/new-logo.jpeg')">
    </div>
    <div>
    <v-btn text to="/" exact style="margin-right:10px;">Home</v-btn>
    <button @click="showHide" >Catalogo</button>
      </div>
    </v-app-bar>
    
    <v-app-bar
    color='lime'
    class="movil-menu"
    height="40"
    >
    <div class="movil-header">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" id="drawer"  clipped absolute>
      <div id="drawerInnerWrapper">
        <v-btn
        class="mx-3 white--text"
        dark
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon  size="24px">$vuetify.icons.close</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <div class="menu" v-if="toggle ? 'height:130px' : ''">
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
      <v-icon v-if="icon === 'mdi-facebook' || 'mdi-whatsapp' || 'mdi-instagram' " size="24px">{{ icon }}</v-icon>
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
    {id:1, name:'Abarrotes',to:'/abarrotes'},
    {id:2, name:'frutas', to:'/frutas'},
    {id:3, name:'verduras', to:'/verduras'},
    {id:4, name:'Carnes', to:'/carnes'},
    {id:5, name:'Lacteos',to:'/lacteos'},
    {id:6, name:'Limpieza', to:'/limpieza'},
    {id:7, name:'Bebidas',to:'/bebidas'}
  ],
    toggle: false,
    toggleHide: false,
    drawer: false,
    group: null,
  }),
  methods:{
    showHide(){
      return  this.toggle = !this.toggle
    }

  },
  watch: {
      group () {
        this.drawer = false
      },
    },
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

.hide-menu{
top: 10px;
right: 10px;
position: fixed;
display: block;
}

.menu{
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  z-index: 1;
  justify-content: space-around;
  background-color: #757575;
}


.hide-movil{
  width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
}


  #drawer {
    border-right: 1px solid white;
    background-color: gray;

  }

    /* #drawerInnerWrapper, .mx-3 {
      right: 10px;
    } */

/*media query*/ 

@media only screen and (max-width: 575px){
.menu{
  display: none;
}
.over-menu{
  display: none;
}
.movil-menu{
  display: flex;
}
#drawerInnerWrapper{
  justify-content: flex-end;
  width: 100%;
  display: flex;
  background-color: gray;
  position: absolute;
}
}

@media only screen and (min-width: 576px){
.menu{
  display: none;
}
.over-menu{
  display: none;
}
.movil-menu{
  display: flex;
}

#drawerInnerWrapper{
  justify-content: flex-end;
  width: 100%;
  background-color: gray;
  position: absolute;
  display: flex;
}
}

@media only screen and (min-width: 778px) {  
.menu{
  display: flex;
}
.over-menu{
  display: flex;
}
.movil-menu,#drawer,#drawerInnerWrapper{
  display: none;
}
}

@media only screen and (min-width: 992px) {  
.menu{
  display: flex;
}
.over-menu{
  display: flex;
}
.movil-menu,#drawer,#drawerInnerWrapper{
  display: none;
}
}

@media only screen and (min-width: 1200px){
  .menu{
  display: flex;
}
.movil-menu,.movil-header #drawer{
  display: none;
}
}

</style>
