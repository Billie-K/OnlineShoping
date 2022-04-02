<template>
  <div>
    <br />
    <br />

    <div class="main">
      <br />

      <!-- *********************************** -Item one start  *********************************** -->
      <div v-if="oneItemSelected">
        <div class="name">
          <h1>
            Product Name:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .name
            }}
          </h1>
        </div>
        <h3>
          Brand Name:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .brand
          }}
        </h3>
        <p>
          price:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .price
          }}
        </p>

        <p>
          Weight:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .weight
          }}
        </p>
        <br />

        <div class="color">
          <select v-model="selectedColor">
            <option disabled value="">Please select color</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].color
              }}
            </option>

            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].color
              }}
            </option>
          </select>
          <span>Selected: {{ selectedColor }}</span>

          <p v-if="selectedColor == 'white'">
            Available QTY:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .options[0].quantity
            }}
          </p>
          <p v-if="selectedColor == 'red'">
            Available QTY:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .options[1].quantity
            }}
          </p>
        </div>
        <br />

        <div v-if="selectedColor == 'white'" class="power">
          <select v-model="selectedPower">
            <option disabled value="">Please select power</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].power[0]
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].power[1]
              }}
            </option>
          </select>
          <span>Selected: {{ selectedPower }}</span>
        </div>

        <div v-if="selectedColor == 'red'" class="power">
          <select v-model="selectedPower">
            <option disabled value="">Please select power</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].power[0]
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].power[1]
              }}
            </option>
          </select>
          <span>Selected: {{ selectedPower }}</span>
        </div>
      </div>

      <!-- *********************************** -Item one end  *********************************** -->

      <!-- *********************************** -Item two start  *********************************** -->
      <div v-if="twoItemSelected">
        <div class="name">
          <h1>
            Product Name:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .name
            }}
          </h1>
        </div>
        <h3>
          Brand Name:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .brand
          }}
        </h3>
        <p>
          price:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .price
          }}
        </p>

        <p>
          Weight:
          {{
            data.items.filter((item) => item.id == this.$route.params.id)[0]
              .weight
          }}
        </p>
        <br />

        <div class="color">
          <select v-model="selectedColor">
            <option disabled value="">Please select color</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].color
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].color
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[2].color
              }}
            </option>
          </select>
          <span>Selected: {{ selectedColor }}</span>

          <p v-if="selectedColor == 'white'">
            Available QTY:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .options[0].quantity
            }}
          </p>
          <p v-if="selectedColor == 'red'">
            Available QTY:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .options[1].quantity
            }}
          </p>
          <p v-if="selectedColor == 'green'">
            Available QTY:
            {{
              data.items.filter((item) => item.id == this.$route.params.id)[0]
                .options[2].quantity
            }}
          </p>
        </div>

        <br />
        <div v-if="selectedColor == 'white'" class="power">
          <select v-model="selectedPower">
            <option disabled value="">Please select power</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].power[0]
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[0].power[1]
              }}
            </option>
          </select>
          <span>Selected: {{ selectedPower }}</span>
        </div>
        <div v-if="selectedColor == 'red'" class="power">
          <select v-model="selectedPower">
            <option disabled value="">Please select power</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].power[0]
              }}
            </option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[1].power[1]
              }}
            </option>
          </select>
          <span>Selected: {{ selectedPower }}</span>
        </div>
        <div v-if="selectedColor == 'green'" class="power">
          <select v-model="selectedPower">
            <option disabled value="">Please select power</option>
            <option>
              {{
                data.items.filter((item) => item.id == this.$route.params.id)[0]
                  .options[2].power[0]
              }}
            </option>
          </select>
          <span>Selected: {{ selectedPower }}</span>
        </div>
      </div>
      <!-- *********************************** -Item two end  *********************************** -->

      <br />
      <button class="queue-btn" @click="test">Add to Queue</button>
    </div>
  </div>
</template>

<script>
import Data from "../views/data.json";

export default {
  name: "ItemDetails",
  data() {
    return {
      data: Data,
      selectedColor: "",
      selectedPower: "",
      oneItemSelected: false,
      twoItemSelected: false,
    };
  },

  // for checking colors availability (one option available or two or three)
  created() {
    let data = this.data.items.filter(
      (item) => item.id == this.$route.params.id
    )[0];
    console.log("data--", data.id);

    if (data.id == 1) {
      this.oneItemSelected = true;
    }
    if (data.id == 2) {
      this.twoItemSelected = true;
    }

    // let data = this.data.items.filter(
    //   (item) => item.id == this.$route.params.id
    // )[0].options;
    // console.log("data--", data);
    // if (data.length > 1) {
    //   this.secondIndexExists = true;
    // }
    // if (data.length > 2) {
    //   this.thirdIndexExists = true;
    // }
  },

  methods: {
    test() {
      console.log("test");
      this.$router.push({ path: "/checkoutview" });
      console.log("test1");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: rgb(243, 243, 243);
}
.name {
  background-color: #04aa6d;
  color: white;
  text-align: center;

  /* width: 12rem; */
  /* height: 2.5rem; */
}
.color {
  display: flex;
  gap: 1rem;
}
.queue-btn {
  color: white;
  background-color: #04aa6d;
  text-align: center;
  cursor: pointer;
  width: 8rem;
  height: 2.5rem;
  font-size: 18px;
}
</style>
