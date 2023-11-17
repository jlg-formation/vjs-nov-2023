import { useArticleStore } from './stores/ArticleStore'

export const TotalArticles = (props: { color: string }) => {
  const store = useArticleStore()

  return (
    <p>
      Nous avons un total de {store.articleTotal} Articles {props.color}
    </p>
  )
}
