<template>
  <div class="hello">
    <div>
      <ul>
        <li @click="addToCount">typescript</li>
        <li>vuex</li>
        <li>vue-router</li>
        <li>axios</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Emit('add-to-count')
  addToCount(){
      return 99
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
