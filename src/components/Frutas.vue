<template>
<div class="frutas-container">
    <v-container class="manzanas-container">
    <div class="sub-name">    
        <span class="separa">manzanas</span>
    </div>
        <v-row no-gutters>
            <v-col 
            cols="12"
            sm="4"
            md="3"
            lg="3"

            >
            <v-card 
                class="ma-1"
                >
                <v-img  height="233" :src="require('../assets/frutas/manzana-chile.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col> 
            <v-col 
                cols="12"
                sm="4"
                md="3"
                lg="3"
            > 
                <v-card 
                class="ma-1"
                >
                <v-img height="233" :src="require('../assets/frutas/manzana-delicia.png')" class="card-resize"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>  
            <v-col 
                cols="12"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <v-img height="233" :src="require('../assets/frutas/manzana-perita.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>   
            <v-col 
                cols="12"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <v-img height="233" :src="require('../assets/frutas/manzana-royal.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
                </v-card> 
            </v-col>
            <v-col 
                cols="12"
                sm="4"
                md="3"
                lg="3"
                >
                <v-card 
                class="ma-1"
                >
                <v-img height="233" :src="require('../assets/frutas/manzana-verde.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
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
    cols="12"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="233" :src="require('../assets/frutas/pera.png')"></v-img>
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
    cols="12"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="233" :src="require('../assets/frutas/membrillo.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
    <v-img  height="auto" :src="require('../assets/frutas/verduras-footer.png')"></v-img>
    </v-card> 
    </v-col>
        <v-col
    cols="12"
    sm="4"
    md="3"
    lg="3"
    >
    <v-card 
    class="ma-1"
    >
    <v-img height="233" :src="require('../assets/frutas/guayaba.png')"></v-img>
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