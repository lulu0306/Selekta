<template>
<div class="home-container">
<div class="carousel-container"> 
<v-row >  
    <v-col  
        cols="12"
        lg="8" 
        md="8"
        sm="12"
        xs="12"
        class="pr-0"
    >
    <v-carousel
        height="441"
        cycle 
        :show-arrows="false"
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
        <v-img :src="slide.src" height="441"/>
        </v-carousel-item>
    </v-carousel> 
    </v-col>
    <v-col class="pl-0" cols="12" lg="4"  md="4" sm="6"  xs="12">
    <v-img :src="require('../assets/c1.jpeg')"  width="auto" height="441px"/>
    </v-col>
</v-row>
</div>
<section>
<h2>Mas que un Minimarket</h2>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>  
<div class="promociones">
<h3>Aprovecha Nuestras Promociones!!!!</h3>
<v-row>
<v-col>
<v-card 
    max-width="374"
>
<v-img
height="auto"
:src="require('../assets/prom2.jpeg')"
></v-img>
<v-card-title>Promocion 1</v-card-title>
<div class="grey--text ml-4">Descripcion de Promocion de producto 1.</div>
<v-divider class="mx-4"></v-divider>
<v-card-title>Oferta</v-card-title>
    <v-card-text>
    <v-chip-group
        class="accent-4 white--text"
        column
    >
        <v-chip> $.$$</v-chip>
        <v-chip>$.$$</v-chip>
        <v-chip>$.$$</v-chip>
    </v-chip-group>
    </v-card-text>
</v-card>
</v-col>
<v-col>
<v-card 
max-width="374"
>
<v-img
height="auto"
:src="require('../assets/prom3.jpeg')"
></v-img>
<v-card-title>Promocion 2</v-card-title>
<div class="grey--text ml-4">Descripcion de Promocion de producto 1.</div>
<v-divider class="mx-4"></v-divider>
<v-card-title>Oferta</v-card-title>
    <v-card-text>
    <v-chip-group
        class="accent-4 white--text"
        column
    >
        <v-chip> $.$$</v-chip>
        <v-chip>$.$$</v-chip>
        <v-chip>$.$$</v-chip>
    </v-chip-group>
    </v-card-text>
</v-card>
</v-col>
<v-col>
<v-card 
max-width="374"
>
<v-img
height="auto"
:src="require('../assets/prom4.jpeg')"
></v-img>
<v-card-title>Promocion 3</v-card-title>
<div class="grey--text ml-4">Descripcion de Promocion de producto 1.</div>
<v-divider class="mx-4"></v-divider>
<v-card-title>Oferta</v-card-title>
    <v-card-text>
    <v-chip-group
        class="accent-4 white--text"
        column
    >
        <v-chip> $.$$</v-chip>
        <v-chip>$.$$</v-chip>
        <v-chip>$.$$</v-chip>
    </v-chip-group>
    </v-card-text>
</v-card>
</v-col>  
</v-row>
</div>
</section>
</div>
</template>


<script>

export default  { 
name:'Home',
data: () => ({
    slides: [
    {src:require('../assets/c2.jpeg')},
    {src:require('../assets/list.jpeg')},
    {src:require('../assets/prom2.jpeg')},
    ]
})  

}
</script>
<style scoped>
.home-container{
    margin:3rem !important;
}

img.responsive{
    height: 441px;
    width: 100%;
}
</style>