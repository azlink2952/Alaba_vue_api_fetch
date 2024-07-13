<script setup>
import { onMounted, ref } from 'vue'
import api from '../Fetch/Apifetch.js'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const github = ref(null)
const branches = ref(null)
const deployments = ref(null)
const route = useRoute()
const router = useRouter()

onMounted(() => {
  console.log('Component mounted')
  // Fetch details of a specific repository using route params or another mechanism
  const name = route.params.name // Assuming you're using Vue Router
  api
    .getUser('azlink2952')
    .then((res) => {
      console.log(res.data)
      github.value = res.data
    })
    .catch((error) => {
      console.error('Error fetching repo details', error)
      if (error.response.status === 404) {
        router.push('/:catchAll(.*)*')
      }
    })
  api
    .getUserRepo(name)
    .then((response) => {
      console.log('Repo branches:', response.data)
      branches.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching repo branches', error)
    })
  api
    .getRepoDeployment(name)
    .then((response) => {
      console.log('Repo deployments:', response.data)
      deployments.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching repo deployments', error)
    })
})
</script>

<template>
  <section>
    <div v-if="github" style="color: white; font-size: 1.2rem; padding: 10px">
      <p style="color: purple; font-size: 1.5rem; font-weight: bold">{{ github.name }}</p>
      <p>Language: {{ github.language }}</p>
      <p>Stars: {{ github.stargazers_count }}</p>
      <p>Watch: {{ github.watchers }}</p>
      <p>Forks: {{ github.forks }}</p>
      <p>Branches: {{ branches ? branches.length : 'Loading' }}</p>
      <p>
        Live Site: {{ deployments.length === 0 ? 'none' : `<a
          href="https://azlink2952.github.io/${github.name}"
          >Link</a
        >` }}
      </p>

      <a :href="github.html_url" target="blank" style="margin: 0">View On Github</a>
    </div>
  </section>
  <p>Go to <router-link to="/">Home Page</router-link></p>
</template>
