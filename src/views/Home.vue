<template>
<div class="home-container">
<div class="carousel-container"> 
    <v-carousel
        hide-delimiters
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
    <img :src="require('../assets/c1.jpeg')" class="carousel-img"  width="470" height="441px"/>
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
:src="require('../assets/promociones/prom2.jpeg')"
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
:src="require('../assets/promociones/prom3.jpeg')"
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
:src="require('../assets/promociones/prom4.jpeg')"
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
    {src:require('../assets/promociones/prom2.jpeg')},
    ]
})  

}
</script>
<style scoped>
.home-container{
    margin:3rem !important;
}

.carousel-container{
    display: flex;
    flex-direction: row;
}

@media only screen and (max-width: 575px){
img.carousel-img{
    display: none;
}
}

@media only screen and (min-width: 576px){
img.carousel-img{
    display: none;
}
}

@media only screen and (min-width: 778px) {  
img.carousel-img{
    display: flex;
    width: 330px;
}
}

@media only screen and (min-width: 992px) {  
img.carousel-img{
    width: 390px;
}
}

@media only screen and (min-width: 1200px){
img.carousel-img{
    width: 441px;
}   
}

</style>