<template>
  <div class="home">
    <!-- <h1>List View</h1> -->
    <div v-for="item in data" :key="item.id">
      <div v-for="(val, key) in item" :key="key.id" class="card">
        <h1>{{ val.name }}</h1>
        <p class="price">{{ val.price }} SEK</p>
        <p>Available: {{ val.options[0].quantity }} items</p>
        <p>
          <router-link :to="`/item/${val.id}`"
            ><button class="details">Details</button>
          </router-link>

          <!-- <button>Add to Cart</button> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Data from "./data.json";

export default {
  name: "ListView",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      data: Data,
    };
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
.details {
  background-color: #04aa6d !important;
}

.card button:hover {
  opacity: 0.7;
}
</style>
