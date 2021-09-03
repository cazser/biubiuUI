<template>
	<div class='test'>
		<button @click="something">button</button>
	<slot></slot>
	</div>
</template>
<script>

export default{
name:'test',
provide(
Button) {
    return {
      a: this.test
    };
  },
  data() {
    return {
      test: new Vue()
    };
  },
  methods:{
	something(){
		this.test = this.test +":"
	}
  }


};
</script>
<style scoped>
.test{

}


</style>