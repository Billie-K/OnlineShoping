<template>
  <div>
    <h1>This is Checkout view</h1>
    <h7>{{ this.$router }}</h7>
  </div>
</template>

<script>
import Data from "./data.json";

export default {
  data() {
    // console.log("test", this)
    return { data: Data };
  },
};
</script>
