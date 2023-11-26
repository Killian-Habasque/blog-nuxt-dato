<template>
    <div>
      <input v-model="searchQuery" placeholder="Rechercher..." />
      <ul>
        <li v-for="item in getRecipes()" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>

  import getBlog from '@/cms/queries/blog';
  
  export default {
    data: function () {
        return {
            allPosts: [],
        };
    },
    methods: {
        getRecipes() {
            axios
                .get("api/recipes")
                .then(res => {
                    this.recipes = res.data;
                    this.filteredRecipes = res.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

    created() {
        this.getRecipes();
    }
  };
  </script>
  