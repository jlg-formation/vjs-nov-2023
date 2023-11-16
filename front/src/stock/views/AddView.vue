<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  console.log('coucou')
  router.push({ name: 'stock' })
}
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit="handleSubmit">
      <label>
        <span>Nom</span>
        <input type="text" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" />
        <span class="error"></span>
      </label>
      <div class="error"></div>
      <button type="submit" class="primary">
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
  }
}
</style>
