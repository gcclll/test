<template>
  <div>
    <div id="test" @click="click">{{ hello }}</div>
  </div>
</template>

<script lang="ts">
const fn: Function = (name: string) => {
  console.log(name, "testn ame");
};

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
