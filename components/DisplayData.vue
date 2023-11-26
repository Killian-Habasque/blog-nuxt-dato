<script setup>
import getBlog from '@/cms/queries/blog'
const { data, pending, error } = await useLazyAsyncQuery(getBlog)
let searchTerm = '';
function filteredPosts() {
    if (!pending) {
        return data.allPosts;
    }

}
mounted() {
    axios.get('api/data')
        .then(response => {
            this.list = response.data;
        });
}
// const search = () => {
//     // Filtrer les articles en fonction du terme de recherche
//     if(!pending) {
//         filteredPosts = data.allPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
//         console.log(data.allPosts)
//     }

// };


</script>

<template>
    <div v-if="!pending">
        <input v-model="searchTerm" @input="search" placeholder="Recherche...">
        <div v-if="data.allPosts">
            <div v-for="(item, index) in filteredPosts()" :key="index">
                {{ item.title }}
            </div>
        </div>
        <div v-else>
            Aucun article trouvé.
        </div>
    </div>
</template>