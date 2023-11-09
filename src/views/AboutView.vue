<template>
  <div class="about">
    <img class="profile desktop" alt="Screenshot of Shift game" src="../assets/profile.png" />
    <div>
      <h1>Hi, I'm Ben Schulzke</h1>
      <p>
        I'm a senior studying Software Engineering at BYU. For as long as I can remember, I've been fascinated with systems.
        I love to understand the components of a system, their hierarchy and relationships, and the rules that govern them.
      </p>
      <p>
        I apply this love of systems in various creative and professional endevours, including game design, worldbuilding, puzzles, and software design.
      </p>
      <p>
        I have a particular talent for rapidly mastering new systems, which has made me a valuable asset at the companies I've worked with.
      </p>
      <p>My employers have consistently been impresesed with my intuition, insight, and the proactive ownership I take over projects I"m assigned.</p>
      <router-link class="contact-link" to="/contact">Let's Talk</router-link>
    </div>
  </div>
  
</template>

<style scoped>
.about {
  display: flex;
  gap: 5rem;
  margin-top: 6rem;
  padding: 1rem;
}
p {
  max-width: 45rem;
}
.contact-link {
  display: flex;
}
.profile {
  max-height: 25rem;
}
.desktop {
  display: none;
}
@media only screen and (min-width: 900px) {
  .about {
    margin-top: 10rem;
    padding-left: 6rem;
  }
  .desktop {
    display: block;
  }
}
a {
  color: #09b5bb;
}
</style>