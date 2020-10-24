<template>
  <div>
    <div id="test" @click="">{{ hello }}</div>
  </div>
</template>

<script type="ts">
const fn: Function = () => {}
var value = [].map((val, key) => {
  console.log(val, key);
});
export default {
  setup() {},

  data: function () {
    return { count: 0 };
  },
};
</script>
<style lang="less">
body {
  color: red;
}
</style>
