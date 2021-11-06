<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img :src="img">
          <h1>Bucket List</h1>
        </router-link>
      </div>
      <div id="side">
        <router-link to="/plans">
          <div class="menu-item">
            <p>Plans</p>
          </div>
        </router-link>
        <router-link to="/share">
          <div class="menu-item">
            <p>Share</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <h2>For Reference:</h2>
      <a href="https://github.com/ninja1219/bucket-list.git">Github</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img: require('./mountain-range.jpg')
      }
    }
  }
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

h1 {
  text-align: center;
  font-size: 40px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
  text-decoration-line: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 10px;
}

.browse {
  margin-right: 50px;
}

/* Footer */
.footer a {
    text-decoration-line: none;
    margin-left: 20px;
    color: #b86f01;
}
</style>
