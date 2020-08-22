<template>
<div class="frutas-container">
    <v-container class="manzanas-container">
    <div class="sub-name">    
        <span class="separa">manzanas</span>
    </div>
        <v-row no-gutters>
            <v-col 
            cols="6"
            sm="4"
            md="3"
            lg="3"

            >
            <v-card 
                class="ma-1"
                >
                <v-img height="260"  :src="require('../assets/frutas/manzana-chile.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col> 
            <v-col 
                cols="6"
                sm="4"
                md="3"
                lg="3"
            > 
                <v-card 
                class="ma-1"
                >
                <v-img height="260" :src="require('../assets/frutas/manzana-delicia.png')" class="card-resize"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>  
            <v-col 
                cols="6"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <v-img height="260" :src="require('../assets/frutas/manzana-perita.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>   
            <v-col 
                cols="6"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <v-img height="260" :src="require('../assets/frutas/manzana-royal.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card> 
            </v-col>
            <v-col 
                cols="6"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <div class="pa-1">
                <v-img height="260" :src="require('../assets/frutas/manzana-verde.png')"></v-img>
                </div>       <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card> 
            </v-col>
        </v-row>            
    </v-container>
    <v-container class="pera-container">
    <div class="sub-name">    
        <span class="separa">peras</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/pera.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>
    <v-container class="membrillo-container">
    <div class="sub-name">    
        <span class="separa">membrillo / guayaba</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/membrillo.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/guayaba.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>
    <v-container class="platano-container">
    <div class="sub-name">    
    <span class="separa">platanos</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/platano-seda.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/platano-bizcocho.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/platano-organico.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>
        <v-container class="mangos-container">
    <div class="sub-name">    
        <span class="separa">mangos</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/mango-chico.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/mango-edward.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="naranja-container">
    <div class="sub-name">    
        <span class="separa">naranja</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <div class="pa-1">
    <v-img height="260"  :src="require('../assets/frutas/naranja-huando.png')"></v-img>
    </div>               <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/naranja-de-jugo.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/naranja-tangelo.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>
    <v-container class="durazno-container">
    <div class="sub-name">    
        <span class="separa">durazno</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/durazno.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/durazno-blanco.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="jugos-container">
    <div class="sub-name">    
        <span class="separa">cocona/tumbo</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/cocona.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/tumbo.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="citricos-container">
    <div class="sub-name">    
        <span class="separa">mandarina/lima</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/mandarina.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/lima.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="pina-container">
    <div class="sub-name">    
        <span class="separa">pina</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/pina.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="maracuya-container">
    <div class="sub-name">    
        <span class="separa">maracuya/granadilla</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/maracuya.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/granadilla.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="tunas-container">
    <div class="sub-name">    
        <span class="separa">tunas</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/tuna.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/tuna-roja.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="uvas-container">
    <div class="sub-name">    
        <span class="separa">uvas</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/uvas-blancas.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/uvas-rojas.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="ciruela-container">
    <div class="sub-name">    
        <span class="separa">ciruelas</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/ciruela-blanca.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/ciruela-roja.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="aguaymanto-container">
    <div class="sub-name">    
        <span class="separa">aguaymanto/carambola</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/aguaymanto.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/carambola.png')"></v-img>
    <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>

    <v-container class="pepino-container">
    <div class="sub-name">    
        <span class="separa">pepino</span>
    </div>
    <v-row>
    <v-col
    cols="6"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="260" :src="require('../assets/frutas/pepino.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
    </v-row>
    </v-container>
</div>
</template>
<script>

export default {
name: 'Frutas'
}
</script>
<style scoped>
.sub-name{
    color: honeydew;
    background: #BDBDBD;
    height: 32px;
    align-items: center;
    padding: 5px;
    width: 100%;
    margin: auto;
}

/*  */
/* 
@media only screen and (max-width: 575px){
    .card-resize{
        width: 100%;
        height: 233px;
    }
}


@media only screen and (min-width: 576px){
    .card-resize{
        width: 100%;
        height: 233;
    }
}

@media only screen and (min-width: 778px) {
    .card-resize{
        width: 100%;
        height: 233px;
    }
}

@media only screen and (min-width: 992px) {
    .card-resize{
        width: 211px;
        height: 233px;
    }
}

@media only screen and (min-width: 1200px){
    .card-resize{
        width: 264px;
        height: auto;
    }
} */
</style>