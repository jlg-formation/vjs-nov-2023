import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'
import { api } from '../api'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>([
    { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 12, qty: 45 },
    { id: 'a3', name: 'Tondeuse à gazon', price: 123, qty: 5 }
  ])
  const articleTotal = computed(() => articles.value.length)
  const addArticle = async (newArticle: NewArticle) => {
    await api.addArticle(newArticle)
    await refresh()
  }

  const deleteArticle = async (ids: Set<string>) => {
    console.log('delete articles', ids)
    await api.deleteArticle(ids)
    await refresh()
  }

  const refresh = async () => {
    articles.value = await api.retrieveAll()
  }

  return { articles, articleTotal, addArticle, deleteArticle, refresh }
})
