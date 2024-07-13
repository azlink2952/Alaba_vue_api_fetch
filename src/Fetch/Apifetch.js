import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'x-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json'
  }
})

export default {
  getUser(username, page, perPage) {
    return api.get(`/users/${username}/repos?page=${page}&per_page=${perPage}`)
  },
  getUserRepo(name) {
    return api.get(`/repos/azlink2952/${name}`)
  },
  getRepoBranches(name) {
    return api.get(`/repos/azlink2952/${name}/branches`)
  },
  getRepoDeployment(name) {
    return api.get(`/repos/azlink2952/${name}/deployments`)
  }
}
