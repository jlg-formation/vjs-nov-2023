<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button title="Refresh">
          <font-awesome-icon icon="fa-solid fa-rotate-right" />
        </button>
        <RouterLink class="button" to="/stock/add" title="Ajouter">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </RouterLink>
        <button title="Supprimer">
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
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">2.99 €</td>
            <td class="qty">123</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">12.99 €</td>
            <td class="qty">14</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">2.99 €</td>
            <td class="qty">123</td>
          </tr>
          <tr>
            <td class="name">Tondeuse</td>
            <td class="price">2.99 €</td>
            <td class="qty">123</td>
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
    tr:nth-child(even) {
      background: #eee;
    }
  }
}
</style>
