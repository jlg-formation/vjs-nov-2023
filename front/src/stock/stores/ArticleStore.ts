import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Article, NewArticle } from '../interfaces/Article'
import { api } from '../api'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>()
  const articleTotal = computed(() => articles.value?.length ?? 0)
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
