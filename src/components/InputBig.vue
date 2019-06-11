<template>
  <textarea
    class="big"
    :value="value"
    :onChange="onChange"
  />
</template>
<script>
export default {
  name: 'InputBig',
  props: {
    value: String,
    onChange: Function,
  },
}
</script>
<style lang="scss">
@import '@/styles/theme.scss';

.big {
  border: $input_big-border;
  border-radius: $input_big-border-radius;
  min-height: 80px;
  transition: all 0.1s ease;
  width: $input_big-width;

  &:hover,
  &:focus {
    border: $input_big-hover-border;
    box-shadow: $input_big-hover-box-shadow;
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
}
</style>
