<template>
  <div class="home">
    <div>
      <Overview msg="UNDERSTAND, DEVELOP AND MAINTAIN SYSTEMS" />
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
