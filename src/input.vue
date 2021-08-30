<template>
  <div class="wrapper">
    <input :value="value" type="text"/>
  </div>
</template>
<script>
export default {
name:'biu-input',
props:{
value:{
type: String
}
}
};
</script>
<style  lang="scss">
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
.wrapper{
  display: inline-block;
  >input{
  border: 1px solid #999;
  height: 32px;
  border-radius: 4px;
  padding: 0 8px;
  font-size: $font-size;
  &:focus{
    box-shadow: inset 0 1px 3px $box-shadow-color;
    outline:none;
  }
  }
  }
</style>