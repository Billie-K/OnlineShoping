<template>
  <div class="main-div">
    <div class="topnav">
      <router-link class="active" to="/listview">List View</router-link>
      <!-- <router-link to="/detailsview">Details View</router-link> -->
      <router-link to="/checkoutview">Checkout View</router-link>
    </div>

    <router-view />
  </div>
</template>

<style>
.main-div {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
/* .flex {
  display: block;
} */
</style>
