<template>
  <div class="page">
    <h1>Your Bucket List</h1>
    <p v-show="activeTodos.length === 0">You have completed your entire bucket list! What else do you want to accomplish?</p>
    <form v-on:submit.prevent="addItem">
      <input type="text" v-model="message">
      <button type="submit">Add</button>
    </form>
    <div class="controls">
      <button v-on:click="showAll()">Show All</button>
      <button v-on:click="showActive()">Show Active</button>
      <button v-on:click="showCompleted()">Show Completed</button>
    </div>
    <ul>
      <li v-for="item in filteredTodos" v-bind:key="item.text" draggable="true" v-on:dragstart="dragItem(item)" v-on:dragover.prevent v-on:drop="dropItem(item)">
        <input type="checkbox" v-model="item.completed"/>
        <label v-bind:class="{ completed: item.completed }">{{ item.text }}</label>
        <router-link to="/plans">
          <button v-on:click="showPlanMenu(item)" class="plan">Plan</button>
        </router-link>
        <button v-on:click="deleteItem(item)" class="delete">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    activeTodos() {
      return this.$root.$data.todos.filter(item => {
        return !item.completed;
      });
    },
    filteredTodos() {
      if (this.$root.$data.show === 'active')
        return this.$root.$data.todos.filter(item => {
          return !item.completed;
        });
      if (this.$root.$data.show === 'completed')
        return this.$root.$data.todos.filter(item => {
          return item.completed;
        });
      return this.$root.$data.todos;
    },
  },
  methods: {
    addItem() {
      this.$root.$data.todos.push({text: this.message, completed:false});
      this.message = "";
    },
    deleteItem(item) {
      var index = this.$root.$data.todos.indexOf(item);
      if (index > -1)
        this.$root.$data.todos.splice(index,1);
    },
    showAll() {
      this.$root.$data.show = 'all';
    },
    showActive() {
      this.$root.$data.show = 'active';
    },
    showCompleted() {
      this.$root.$data.show = 'completed';
    },
    showPlanMenu(item) {
      this.$root.$data.planMenuOn = true;
      this.$root.$data.currentItem = item;
    },
    dragItem(item) {
      this.$root.$data.drag = item;
    },
    dropItem(item) {
      const indexItem = this.$root.$data.todos.indexOf(this.$root.$data.drag);
      const indexTarget = this.$root.$data.todos.indexOf(item);
      this.$root.$data.todos.splice(indexItem,1);
      this.$root.$data.todos.splice(indexTarget,0,this.$root.$data.drag);
    },
  }
}
</script>

<style>
  body {
    font-family: 'Arvo';
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    background: #f3f3f3;
  }

  h1, h2 {
    color: #B84901;
  }

  /* List */

  ul {
    list-style: none;
  }

  li {
    background: #fff;
    width: 500px;
    min-height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    display: flex;
    align-items: center;
  }

  .delete {
    display: none;
    margin-left: auto;
  }

  li:hover .delete {
    display: block;
  }

  .plan {
    margin-right: 5px;
    display: none;
  }

  li:hover .plan {
    display: block;
  }

  label {
    width: 400px;
  }

  .completed {
    text-decoration: line-through;
  }

  /* Form */

  input[type=checkbox] {
    transform: scale(1.5);
    margin-right: 10px;
  }

  input[type=text] {
    font-size: 1em;
  }

  button {
    font-family: 'Arvo';
    font-size: 1em;
  }

  /* Controls */

  .controls {
    margin-top: 20px;
  }
</style>