<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import type { Article } from '../interfaces/Article'
import { useArticleStore } from '../stores/ArticleStore'
const store = useArticleStore()

const errorMsg = ref('')

const isRefreshing = ref(false)
const isRemoving = ref(false)

const refreshIcon = computed(() => {
  console.log('recalcule refreshIcon')
  return 'fa-solid ' + (isRefreshing.value ? 'fa-circle-notch' : 'fa-rotate-right')
})

const removeIcon = computed(
  () => 'fa-solid ' + (isRemoving.value ? 'fa-circle-notch' : 'fa-trash-can')
)

const { articles } = storeToRefs(store)

const selectedArticles = ref(new Set<Article>())

const handleClick = (a: Article) => {
  if (selectedArticles.value.has(a)) {
    selectedArticles.value.delete(a)
    return
  }
  selectedArticles.value.add(a)
}

const handleRemove = async () => {
  try {
    isRemoving.value = true
    console.log('about to remove...')
    const ids: Set<string> = new Set([...selectedArticles.value].map((a) => a.id))
    await store.deleteArticle(ids)
    selectedArticles.value.clear()
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isRemoving.value = false
  }
}

const handleRefresh = async () => {
  try {
    console.log('refresh')
    errorMsg.value = ''
    isRefreshing.value = true
    await store.refresh()
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isRefreshing.value = false
  }
}

onMounted(async () => {
  console.log('on mounted')
  if (articles.value === undefined) {
    await store.refresh()
    console.log('initialized')
  }
})
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Refresh" @click="handleRefresh" :disabled="isRefreshing">
          <font-awesome-icon :icon="refreshIcon" :spin="isRefreshing" />
        </button>
        <RouterLink class="button" to="/stock/add" title="Ajouter">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </RouterLink>
        <button
          title="Supprimer"
          v-show="selectedArticles.size > 0"
          @click="handleRemove"
          :disabled="isRemoving"
        >
          <font-awesome-icon :icon="removeIcon" :spin="isRemoving" />
        </button>
      </nav>
      <div class="error">{{ errorMsg }}</div>
      <table>
        <thead>
          <tr>
            <th class="name">Nom</th>
            <th class="price">Prix</th>
            <th class="qty">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="articles === undefined">
            <td colspan="3">
              <div class="loading">
                <font-awesome-icon icon="fa-circle-notch" spin="true" />
                <span>En chargement...</span>
              </div>
            </td>
          </tr>
          <tr
            v-else
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
  display: flex;
  align-items: center;
  font-weight: bold;
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

    div.loading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
    }
  }
}
</style>
