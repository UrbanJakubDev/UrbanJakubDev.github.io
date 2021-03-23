<template>
  <div class="content__container">
    <section class="portfolio">
      <h1>Ahoj, jsem <strong>Jakub</strong></h1>
      <p>
        Kodér,programátor, UI/UX designer samouk, tech lover a nadšenec do
        automatizace a IOT. Zajímám se o novinky v oblasti vývoje webů. S
        Front-Endem jsem začal poměrně nedávno. Proto v tuto chvíli prohlubuji své
        znalosti a dovednosti, abych mohl v blízké budoucnosti pracovat na
        tvorbě zajímavých webů a webových aplikací.
      </p>
    </section>
    <section>
      <h2>Praxe</h2>
      <div class="work-title">
        <div class="timeline">5/2013- dosud</div>
        <div>
          Technik správy dat <span class="work">ČEZ Energo s.r.o.</span>
        </div>
      </div>

      <p>
        Starám se o data uložená v MS Excel. Vytvářím nástroje, které usnadní
        hromadnou práci s Excely, získávání dat a poté jejich zpracování so
        různých výstupu. (XML, ZFO, webová prezentace). Dále vytvářím nástroje
        pro automatizaci opakujících se činností.
      </p>
    </section>
    <section>
      <h2>Vzdělání</h2>
      <div class="work-title">
        <div class="timeline">2008-2012</div>
        <div class="work">Střední Průmyslová škola Třebíč</div>
        <p>Slaboproudá eletrotechnika se zaměřením na automatizaci</p>
      </div>
    </section>
    <section>
      <h2>Jazyky</h2>
      <ul>
        <li>čeština</li>
        <li>angličtina</li>
      </ul>
    </section>

    <section>
      <h2>IT Skills</h2>
      <div class="timeline work-title">Python 3.x - 3 roky:</div>
      <ul>
        <li>Scripty pro automatizaci pracovních úkolů (práce s XML, XLSX)</li>
        <li>
          Backend postavený na frameworku Flask pro menší firemní CMS
          (EnergoTools), které sdružuje moje scripty pro automatizaci. (REST
          API, JWT autorizace, MySQL db, Celery)
        </li>
        <li>Scripty pro jednorázové úkoly, webscrapping apod…</li>
        <li>
          CMS pro správu Revizí (Revizní Portál) - Hlídání platnosti revizí,
          filtrování, přístup pomocí loginu, omezení přístupu pomocí rolí.
        </li>
      </ul>

      <div class="timeline work-title">
        JS,HTML,CSS (SASS, SCSS) - půl roku:
      </div>
      <ul>
        <li>
          Osobní portfolio Frontend – Vue.js (Nuxt.js) + SCSS. Bude sloužit jako
          webové CV a zároveň Portfolio. Stránka má admin sekci zabezpečenou
          pomocí přihlášení pro jednodušší přidávání projektů do portfolia.
        </li>
        <li>
          Osobní portfolio Backend – Node.js, Express.js, MongoDB. REST API pro
          osobní Portfolio/CV/Blog. JWT autorizace, hosting na Heroku později
          AWS pomocí Dockeru.
        </li>
        <li>
          Úpravy a některé komponenty pro Firemní CMS (EnergoTools, Revizní
          Portál) – Angular10
        </li>
        <li>Testovací projekty podle tutoriálů – React, Svelte</li>
      </ul>

      <div class="timeline work-title">Ostatní technologie:</div>
      <ul>
        <li>MySQL, SQLite, MongoDB (základy)</li>
        <li>PHP Laravel – prošel jsem kurz na Learn2Code</li>
        <li>.NET – prošel jsem kurz na Learn2Code</li>
        <li>
          Docker – zkouším použití pro local development (Python, PHP, Node.js)
        </li>
        <li>Wordpress šablony - prošel jsem kurz na Learn2Code</li>
        <li>C – Menší projekty na platformě Arduino</li>
        <li>Figma, Photoshop (základy)</li>
      </ul>

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
  </div>
</template>

<script>
export default {
  layout: 'default',
}
</script>

<style lang="scss" scoped>
.content__container {
  margin: 4rem auto;
}

section {
  margin-top: 2rem;
}

.work-title {
  font-size: 0.95em;
  margin-bottom: 1.3rem;
}

.work {
  font-weight: 600;
}

.timeline {
  color: hotpink;
  font-weight: 500;
}

h2 {
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 500;
}

ul {
  list-style: none;

  li:before {
    color: var(--color-text-secondary);
    font-size: 1.2rem;
    font-weight: 600;
    content: '< />';
    margin-left: -3.3rem;
    margin-right: 10px;
  }
}
</style>
