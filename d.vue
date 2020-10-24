<template>
  <div>
    <div id="test" @click="click">{{ hello }}</div>
  </div>
</template>
<script lang="ts">
var value = [].map((val, key) => {
  console.log(val, key);
});
export default {
  setup() {
    const fn: Function = (name: string) => {};
  },

  method: {
    click() {},
  },

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
