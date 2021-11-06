<template>
  <div class="page">
    <h1>Share Your Experience</h1>
    <div>
      <form v-on:submit.prevent="addShare">
        <input id="name" type="text" placeholder="Enter your name here" v-model="message1"/>
        <textarea id="large-textbox" type="text" placeholder="Share what bucket list item you accomplished" v-model="message2"></textarea>
        <button type="submit">Share</button>
      </form>
    </div>
    <ul>
      <li v-for="comment in findComments" v-bind:key="comment.name">
        <p>{{ comment.name }}</p>
        <p>{{ comment.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Share',
    computed: {
      findComments() {
        return this.$root.$data.bucketListShares;
      }
    },
    methods: {
      addShare() {
        this.$root.$data.bucketListShares.push({name: this.message1, text: this.message2});
        this.message1 = "";
        this.message2 = "";
      },
    }
  }
</script>

<style scoped>
  p {
    margin: 20px;
  }

  #name, #large-textbox {
    display: block;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
  }

  #large-textbox {
    width: 400px;
    height: 80px;
  }
</style>