<template>
  <div>
    <section class="portfolio">
      <h2>Ahoj, jsem Jakub</h2>
      <p>
        Kodér,programátor, UI/UX designer samouk, tech lover a nadšenec do
        automatizace a IOT. Zajímám se o novinky v oblasti vývoje webů. S
        kodéřinou jsem začal poměrně nedávno. Proto v tuto chvíli prohlubuji své
        znalosti a dovednosti, abych mohl v blízké budoucnosti pracovat na
        tvorbě zajímavých webů a webových aplikací.
      </p>
    </section>
    <section class="skills">
      <h2>Absolvované kurzy</h2>
      <p>V rámci výuky jsem prošel spoustou kurzů</p>
      <ul>
        <li>Webrebel 1: HTML, CSS & JavaScript</li>
        <li>CSS preprocesory: Sass</li>
        <li>Vue.js + single page aplikace</li>
        <li>React, Angula a Vue (a TypeScript)</li>
        <li>Python Web Development</li>
        <li>ASP.NET Web Pages</li>
      </ul>
    </section>
    <section class="stack">
      <h2>Kódování a nástroje</h2>
      <ul>
        <li>HTML, CSS, Sass, GIT, JavaScript</li>
        <li>Vue.js, Angular, React (základy)</li>
        <li>Python, Node.js, Laravel, .NET (základy)</li>
        <li>Figma, Photoshop (základy)</li>
        <li>MySQL, SQLite, MongoDB (základy)</li>
        <li>Docker</li>
      </ul>
    </section>
    <section class="expreience">
      <h2>Moje současné cíle</h2>
      <ul v-for="user in ip" :key="user.id">
        <li >{{user.name}} + {{user.email}}</li>
      </ul>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: []
    }
  },
  mounted () {
    this.fetchSomething();
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('/users')
      console.log(ip);
      this.ip = ip
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
