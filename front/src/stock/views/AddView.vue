<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useArticleStore } from '../stores/ArticleStore'
import { ref } from 'vue'
import type { NewArticle } from '../interfaces/Article'

const router = useRouter()
const store = useArticleStore()

const isAdding = ref(false)
const errorMsg = ref('')

const newArticle = ref<NewArticle>({
  name: '',
  price: 0,
  qty: 1
})

const handleSubmit = async () => {
  console.log('coucou')

  try {
    isAdding.value = true
    errorMsg.value = ''
    await store.addArticle(newArticle.value)
    router.push({ name: 'stock' })
  } catch (err) {
    console.log('err: ', err)
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  } finally {
    isAdding.value = false
  }
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
        <span class="error"></span>
      </label>
      <div class="error">{{ errorMsg }}</div>
      <button type="submit" class="primary" :disabled="isAdding">
        <font-awesome-icon icon="fa-solid fa-plus" />
        <span>Ajouter</span>
      </button>
    </form>
  </main>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-flow: column;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;
    .error {
      display: flex;
      height: 1em;
    }

    input {
      padding: 0.5em 1em;
    }
  }

  div.error {
    display: flex;
    height: 3em;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
}
</style>
