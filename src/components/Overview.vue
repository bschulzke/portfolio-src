<template>
  <div class="about">
    <div class="banner">
      <h1>{{ msg }}</h1>
      <p>
        I'm a fan of systems. Magic systems, game systems, and of course—computer
        systems. Here are a few of things I've been experimenting with in recent years.
      </p>
    </div>
    <h2>PROJECTS</h2>
      <div class="projects">
        <div class="project-pair">
        <div>
          <a href="https://github.com/bschulzke/cube_solver" target="_blank">Rubik's Cube Solver</a>
          <iframe src="https://giphy.com/embed/kFuavIYvRQZGg" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
        </div>
        <div>
          <a href="https://www.shenan-again.com/" target="_blank">Digital Rulebook (Shenan-Agan)</a>
          <img class="shenan-again" alt="Screenshot of Shift game" src="../assets/shenan-again.png" />
        </div>
      </div>
      <div class="project-pair">
        <div>
          <a href="https://github.com/bschulzke/mythos-shift" target="_blank">Shift: A 4D Puzzle / Maze</a>
          <img class="shift-image" alt="Screenshot of Shift game" src="../assets/shift.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  padding-top: 3rem;
  padding-left: 1rem;
}
iframe {
  max-width: 15rem;
  max-height: 10rem;
}
h1 {
  display: none;
}
h2 {
  margin-top: 3rem;
}
.project-entry {
  display: flex;
  margin-bottom: 1rem;
}

.shift-image {
  max-width: 60rem;
}
a {
  display: flex;
}
.projects {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-bottom: 3rem;
}
.project-pair {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.shenan-again {
  max-height: 22.5rem;
}
@media only screen and (min-width: 900px) {
  h1 {
    display: block;
  }
    .about {
    padding-top: 6rem;
    padding-left: 6rem;
  }
  iframe {
    max-width: none;
    max-height: none;
  }
  .project-pair {
    gap: 20rem;
    flex-direction: row;
  }
}
</style>
