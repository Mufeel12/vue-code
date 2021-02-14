<template>
  <div class="bage">
    <span class="bage-value">
      <slot />
    </span>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.bage {
  border-radius: 50%;
  background: $white;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 1rem;

  &.primary {
    color: $white;
    background: $burgundy;
    transition: background-color .2s;
    &:hover {
      background-color: lighten($burgundy, 10%);
    }
    .bage-value {
      font-size: 1.5rem;
    }
  }
}
</style>
