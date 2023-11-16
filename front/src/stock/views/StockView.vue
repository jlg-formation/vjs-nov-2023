<template>
  <main>
    <h1>Liste des articles</h1>
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
  </main>
</template>
