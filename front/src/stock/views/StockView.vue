<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import type { Article } from '../interfaces/Article'
import { useArticleStore } from '../stores/ArticleStore'
const store = useArticleStore()

const { articles } = storeToRefs(store)

const selectedArticles = ref(new Set<Article>())

const handleClick = (a: Article) => {
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a)
    return
  }
  selectedArticles.value.add(a)
}

const handleRemove = () => {
  console.log('about to remove...')
  const ids: Set<string> = new Set([...selectedArticles.value].map((a) => a.id))
  store.deleteArticle(ids)
  selectedArticles.value.clear()
}

const handleRefresh = () => {
  console.log('refresh')
  // await store.refresh()
}
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Refresh" @click="handleRefresh">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <RouterLink class="button" to="/stock/add" title="Ajouter">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </RouterLink>
        <button title="Supprimer" v-show="selectedArticles.size > 0" @click="handleRemove">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </nav>
      <div class="error"></div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in articles"
            v-bind:key="a.id"
            :title="a.id"
            @click="handleClick(a)"
            :class="{ selected: selectedArticles.has(a) }"
          >
            <td class="name">{{ a.name }}</td>
            <td class="price number">{{ a.price }} €</td>
            <td class="qty number">{{ a.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 0.3em;
}

div.error {
  height: 3em;
}

table {
  border: 0.1em solid #bbb;
  border-radius: 0.3em;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;

  thead {
    background: #bbb;
  }

  th,
  td {
    padding: 0.5em 1em;
  }

  tbody {
    cursor: pointer;

    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }

    td.number {
      text-align: right;
    }
  }
}
</style>
