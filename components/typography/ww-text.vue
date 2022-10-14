<script setup>
// name: ww-text
import { defineProps } from "vue";
const props = defineProps({
  inline: Boolean,
  uppercase: Boolean,
  lowercase: Boolean,
  noWrap: Boolean,
  inLeft: Boolean,
  inCenter: Boolean,
  inRight: Boolean,
  size: {
    type: String,
    default: "normal",
  },
});
</script>

<template></template>
