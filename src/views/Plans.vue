<template>
  <div class="page">
    <h1>Your Bucket List Plans</h1>
    <p v-show="activeTodos.length === 0">You have completed your entire bucket list! Go to the home page to add more to your list!</p>
    
    <div v-if="this.$root.$data.planMenuOn === false">
      <div class="controls">
        <button v-on:click="showActive()">Show Active</button>
        <button v-on:click="showCompleted()">Show Completed</button>
      </div>
      <ul>
        <li v-for="item in filteredTodos" v-bind:key="item.text" draggable="true" v-on:dragstart="dragItem(item)" v-on:dragover.prevent v-on:drop="dropItem(item)">
          <label v-bind:class="{ completed: item.completed }">{{ item.text }}</label>
          <button v-on:click="showPlanMenu(item)" class="plan">Plan</button>
        </li>
      </ul>
    </div>

    <div v-else>
      <div class="controls">
        <button v-on:click="goBack()">Back</button>
      </div>
      <h3>Plans for: {{ this.$root.$data.currentItem.text }}</h3>
      <form v-on:submit.prevent="addPlan">
        <input type="text" v-model="message">
        <button type="submit">Add Plan</button>
      </form>
      <ul>
        <li v-for="plan in findPlans" v-bind:key="plan.text">
          <input type="checkbox" v-model="plan.completed"/>
          <label>{{ plan.text }}</label>
          <button v-on:click="deletePlan(plan)" class="plan">X</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Plans',
    components: {
    
    },
    computed: {
      activeTodos() {
        return this.$root.$data.todos.filter(item => {
          return !item.completed;
        });
      },
      filteredTodos() {
        if (this.$root.$data.show === 'completed')
          return this.$root.$data.todos.filter(item => {
            return item.completed;
          });
        return this.$root.$data.todos.filter(item => {
          return !item.completed;
        });
      },
      findPlans() {
          return this.$root.$data.currentItem.plan;
      },
    },
    methods: {
      addItem() {
        this.$root.$data.todos.push({text: this.message, completed:false});
        this.message = "";
      },
      addPlan() {
        this.$root.$data.currentItem.plan.push({text: this.message, completed:false});
        this.message = "";
      },
      planItem(item) {
        var index = this.$root.$data.todos.indexOf(item);
        if (index > -1)
        this.$root.$data.todos.splice(index,1); // This is the same as deleteItem for now
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
      goBack() {
        this.$root.$data.planMenuOn = false;
        this.$root.$data.currentItem = {};
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
      deletePlan(plan) {
        var index = this.$root.$data.currentItem.plan.indexOf(plan);
        if (index > -1)
          this.$root.$data.currentItem.plan.splice(index,1);
      },
    }
  }
</script>

<style>
  .plan {
    margin: auto;
  }
</style>