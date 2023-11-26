<template>
    <div>
      <div>
        Search
        <!-- 1 -->
        <input type="text" v-model="searchText">
      </div>
      {{ console.log(allPosts) }}
      <li
        v-for="(post, index) in allPosts"
        :key="post.id"
        :link="post"
        :index="index">
        {{ post.title }}
      </li>
    </div>
  </template>
  
  <script>
    // 2
    import getBlog from '@/cms/queries/blog'
    // import LinkItem from './LinkItem'
  
    export default {
      name: 'Search',
      data () {
        return {
          allPosts: [],
          searchText: ''
        }
      },
      // 3
      apollo: {
        allPosts: {
          query: getBlog,
          variables () {
            return {
              searchText: this.searchText
            }
          },
          skip () {
            return !this.searchText
          }
        }
      },
    //   components: {
    //     LinkItem
    //   }
    }
  </script>
  