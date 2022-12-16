import { createApp } from './vue.esm-browser.js'

window.app = createApp({
  data: () => ({
   
   

  postsList: [
   
    ],
    searchValue: '',
   
  }),

  created() {
    this.loadUsersFromApi()
  },
  computed:{
    filteredList() {
      return this.postsList.filter((post) => {
        return post.title.toLowerCase().includes(this.searchValue.toLowerCase())
      })
    },
  } ,
  methods: {
    loadUsersFromApi() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
          this.postsList = posts
        })
    }
  }
}).mount('#search-app')