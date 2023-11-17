import type { Article } from './interfaces/Article'

const url = 'http://localhost:3000/api/articles'

class API {
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
