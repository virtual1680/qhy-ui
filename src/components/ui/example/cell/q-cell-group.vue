<template>
  <div class="q-cell-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "q-cell-group"
  }
</script>

<style scoped lang="scss">
  .q-cell-group{
    height: auto;
    width: 100%;
    background: white;
    border-bottom: 0.06rem solid #f2f2f2;
    border-top: 0.06rem solid #f2f2f2;
    .q-cell{
      margin: 0 1rem;
      &:last-child{
        border:none;
      }
    }
  }
</style>
