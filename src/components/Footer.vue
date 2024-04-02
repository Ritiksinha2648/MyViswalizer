<template>
  <div class="footer">

    <h1 class="company text-center"> C<span class="comany-new">o</span>mpany </h1>

  </div>
</template>


<script>
export default {
  name: 'PageFooter',

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fdf7f7;
  /* Adjust as needed */
  color: gray;
  /* Adjust text color as needed */
  text-align: center;
  padding: 10px;
  /* Adjust padding as needed */
  font-weight: 500;
  font-size: 28px;
}

.comany-new {
  color: #1DCEAF;
  font-weight: 500;

}
</style>