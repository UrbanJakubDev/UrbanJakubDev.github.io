<template>
  <div class='content__container'>
    <div class='landing__page'>
      <section class='portfolio'>
        <h2>Kodér, Programátor, Tech lover</h2>
        <p>
          Programátor, Kodér, UI/UX designer samouk, Tech lover a nadšenec do
          Automatizace a IOT. Zajímám se o novinky v oblasti vývoje webů. S
          vytvářením webů jsem začal poměrně nedávno. Proto v tuto chvíli
          prohlubuji své znalosti a dovednosti, abych mohl v blízké budoucnosti
          pracovat na tvorbě zajímavých webů a webových aplikací.
        </p>
      </section>
      <!-- <div class="content">
        <NuxtLink to="/about" class="card" v-for="item in cardList" :key="item.id">
          <Card :cardText='item.text' :cardTags="cardTags" />
        </NuxtLink>
      </div> -->

      <section class='social'>
        <a href=''><i class='fab fa-github'></i></a>
        <a href=''><i class='fab fa-linkedin'></i></a>
        <a href=''><i class='fab fa-dribbble'></i></a>
        <a href=''><i class='fab fa-instagram'></i></a>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'default',
  data() {
    return {}
  }
}
</script>

<style lang='scss'>
.social {
  .fab {
    font-size: 5rem;
    margin-right: 1.5rem;
  }

  .fa-github {
    color: var(--color-text-primary);
  }

  .fa-dribbble {
    color: #ea4c89;
  }

  .fa-linkedin {
    color: #0077b5;
  }

  .fa-instagram {
    color: #e4405f;
  }
}
</style>
