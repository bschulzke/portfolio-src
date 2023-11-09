<template>
  <div class="home">
    <div>
      <Overview msg="DESIGNING INNOVATIVE SYSTEMS" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from "@/components/Overview.vue";

export default {
  name: "HomeView",
  components: {
    Overview,
  },
};
</script>
