<template>
<div class="catalogue-container"> 
<section>
<h3>Catalogo de productos</h3> 
<div class="lacteos-container">
<v-row>
<v-col 
v-for="card in cards"
:key="card.title"
>
<v-card 
    max-width="600"
>
<v-img
height="250"
:src="card.src"
>
<a href="#" class="subrouters"> 
<v-card-title v-text="card.title" color='white'></v-card-title>
</a> 
</v-img>
</v-card>
</v-col> 
</v-row>
</div>
</section>   
</div>
</template>
<script>

export default { 
name:'Catalogue',
data: () => ({
    cards: [
        { title: 'Lacteos', src: 'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/07/10/498302698_37618972.jpg?itok=NY6s-Iqo'},
        { title: 'Fruta', src: 'https://s1.eestatic.com/2017/04/20/cocinillas/Cocinillas_209991596_116324444_1024x768.jpg'},
        { title: 'Carne', src: 'https://okdiario.com/img/recetas/2016/06/24/trucos-para-cocinar-carne.jpg'},
        { title: 'Bebidas', src: 'https://do1pouckcwxot.cloudfront.net/argentina/uploads/2014/08/29134732/bebidas765.jpg'},
    ],
})

}
</script>
<style scoped>
.catalogue-container{
    margin:3rem 3rem 3rem 3rem !important;
}
a.subrouters{
    text-decoration: none;
    color: white;
}
</style>