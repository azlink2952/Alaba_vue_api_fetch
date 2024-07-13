<script setup>
import { onMounted, ref, computed } from 'vue'
import api from '../Fetch/Apifetch.js'

const github = ref(null)
const page = ref(1)
const perPage = 6
const searchQuery = ref('')

onMounted(() => {
  console.log('mounted')
  api
    .getUser('azlink2952', page.value, perPage)
    .then((res) => {
      console.log(res.data)
      github.value = res.data
    })
    .catch((error) => {
      console.error('Error fetching repos', error)
    })
})

const nextPage = () => {
  page.value++
  api
    .getUser('azlink2952', page.value, perPage)
    .then((res) => {
      console.log(res.data)
      github.value = res.data
    })
    .catch((error) => {
      console.error('Error fetching repos', error)
    })
}

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    api
      .getUser('azlink2952', page.value, perPage)
      .then((res) => {
        console.log(res.data)
        github.value = res.data
      })
      .catch((error) => {
        console.error('Error fetching repos', error)
      })
  }
}

const filteredRepos = computed(() => {
  if (!github.value) return []
  if (!searchQuery.value) return github.value
  const query = searchQuery.value.toLowerCase()
  return github.value.filter((repo) => repo.name.toLowerCase().includes(query))
})
</script>

<template>
  <div v-if="github === null">Loading...</div>
  <div if="github" class="name"></div>
  <input
    type="text"
    placeholder="Search repository"
    v-model="searchQuery"
    style="width: 300px; margin: 20px 20px; height: 40px; border-radius: 10px"
  />
  <ul>
    <li v-for="repo in github" :key="repo.name" class="name">
      <router-link
        :to="'../veiws/Repopage' + repo.name"
        style="
          color: #ffff;
          font-size: 1.5rem;
          background-color: black;
          padding: 0;
          margin: 0;
          text-decoration: none;
        "
        >{{ repo.name }}</router-link
      >
      <p>Language: {{ repo.language }}</p>
      <p>Last updated: {{ repo.updated_at }}</p>
      <p>Description: {{ repo.description }}</p>
    </li>
  </ul>
  <div class="button">
    <button @click="prevPage" :disabled="page === 1">Previous</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<style scoped>
.button {
  color: white;
  display: flex;
  justify-content: center;
  margin: 2rem;
}
button {
  background-color: rgba(100, 9, 9, 0.493);
  color: white;
  padding: 5px 10px;
  width: 100px;
  outline: none;
}
button:hover {
  cursor: pointer;
  background-color: rgb(80, 74, 74);
}
.name {
  border: 1px solid rgba(255, 255, 255, 0.329);
  background-color: rgba(0, 0, 0, 0.863);
  color: white;
  margin: 15px;
  padding-left: 10px;
  padding-block: 20px;
  font-size: 1.1rem;
  border-radius: 20px;
}
ul {
  list-style-type: none;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
