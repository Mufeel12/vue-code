<template>
    <span class="fa fa-caret-down tooltip">
        <div class="arrow"></div>
        <h4>{{data.heading}}</h4>
        <p>
            {{data.desc}}
        </p>
    </span>
</template>
<script>

export default {
  props:{
      data:{
          type:Object,
          default:{}

      }
  }
};
</script>

