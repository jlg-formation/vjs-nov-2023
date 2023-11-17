import { sleep } from '@/misc'
import type { Article, NewArticle } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
  async addArticle(newArticle: NewArticle) {
    await sleep(300)
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

  async deleteArticle(ids: Set<string>) {
    await sleep(300)
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([...ids])
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
    await sleep(300)
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
