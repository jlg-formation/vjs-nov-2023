<template>
  <header>
    <a href="#">
      <img src="/logo.svg" alt="Logo Gestion Stock" />
      <span>Gestion Stock</span>
    </a>
  </header>
</template>

<style scoped>
header {
  background: #eee;
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 0.5em;
}

img {
  height: 2.5em;
}

a {
  color: inherit;
  text-decoration: inherit;

  display: flex;
  align-items: center;
  gap: 0.5em;
}

a span {
  font-weight: bold;
  font-size: 1.3em;
}

a:hover {
  text-decoration: underline;
}
</style>
