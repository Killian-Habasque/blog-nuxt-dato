<script setup>
import { ref } from 'vue'
import getBlog from '@/cms/queries/blog_search'

const pattern = ref("")
const { data, pending, error } = useAsyncQuery(getBlog, { pattern: pattern.value })

async function fetchData() {
    
    const { data: newData, pending, error } = await useAsyncQuery(getBlog, { pattern: pattern.value })
    console.log(newData)
    return newData.allPosts
}



</script>

<template>
    <br><br><br><br>
    <div>
        <input v-model="pattern" @input="fetchData" placeholder="Entrez le motif">
        <button @click="fetchData()">| Ouvrir la fenêtre modale |</button>

        <div v-if="error">
            <!-- Affichez un message d'erreur -->
            {{ console.log("______________") }}
            {{ console.log(error.message) }}
            {{ console.log("______________") }}
        </div>

        <div v-if="!pending">
            <div v-for="(item, index) in data.allPosts" :key="index">
                {{ item.title }}
                <!-- Ajoutez un bouton pour ouvrir la fenêtre modale avec le résultat de la recherche -->

            </div>
            
        </div>
    </div>
</template>
