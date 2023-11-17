import { sleep } from '@/misc'
import type { Article, NewArticle } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async addArticle(newArticle: NewArticle) {
    await sleep(3000)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })
      if (response.status >= 400) {
        throw new Error('Erreur Technique')
      }
    } catch (err) {
      console.log('err: ', err)
      throw new Error('Erreur Technique')
    }
  }

  async retrieveAll(): Promise<Article[]> {
    try {
      const response = await fetch(url)
      const articles = await response.json()
      return articles
    } catch (err) {
      console.log('err: ', err)
      throw new Error('Erreur Technique')
    }
  }
}

export const api = new API()
