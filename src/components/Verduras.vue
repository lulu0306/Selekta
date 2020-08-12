<template>
<div class="verduras-container">
    <v-container class="acelga-container">
    <div class="sub-name">    
        <span class="separa">acelga/espinaca/poro</span>
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
                <v-img height="233"  :src="require('../assets/verduras/acelga.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
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
                <v-img height="233" :src="require('../assets/verduras/espinaca.png')" class="card-resize"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
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
                <v-img height="233" :src="require('../assets/verduras/poro.png')" class="card-resize"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>   
        </v-row>            
    </v-container>
    <v-container class="cebolla-container">
    <div class="sub-name">    
        <span class="separa">cebolla</span>
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
                <v-img height="233"  :src="require('../assets/verduras/cebolla-china.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col>     
        </v-row>            
    </v-container>
    <v-container class="espinaca-container">
    <div class="sub-name">    
        <span class="separa">especies</span>
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
                <v-img height="233"  :src="require('../assets/verduras/cilantro.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
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
                <v-img height="233"  :src="require('../assets/verduras/perejil.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col> 
        </v-row>            
    </v-container>

    <v-container class="lechuga-container">
    <div class="sub-name">    
        <span class="separa">lechuga/repollo/apio</span>
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
                <v-img height="233"  :src="require('../assets/verduras/lechuga-hidroponica.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
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
                <v-img height="233"  :src="require('../assets/verduras/repollo.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
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
                <v-img height="233"  :src="require('../assets/verduras/apio.png')"></v-img>
                        <!-- <v-divider></v-divider> -->
                <v-img  height="auto" :src="require('../assets/verduras/verduras-footer.png')"></v-img>
                </v-card>  
            </v-col> 
        </v-row>            
    </v-container>
</div>
</template>
<script>

export default {
name: 'Verduras'
}
</script>
<style scoped>
div.verduras-container{
    margin:3rem !important;
}

.sub-name{
    color: honeydew;
    background: #BDBDBD;
    height: 32px;
    align-items: center;
    padding: 5px;
    width: 100%;
    margin: auto;
}
</style>