<script setup>
// name: ww-button

import { computed } from "vue";

// Constants
import { colors, sizes } from "../constants";
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "normal",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  withShadow: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: "",
  },
  blank: {
    type: Boolean,
    default: false,
  },
});

const bgColor = computed(() => {
  const isThemeColor = colors[props.color?.toUpperCase()];

  if (props.disabled) return;

  if (props.text) return `color: ${isThemeColor}`;

  if (isThemeColor && !props.disabled)
    return `background-color:${isThemeColor}`;
  else return `background-color:${props.color}`;
});
const btnSize = computed(() => {
  switch (props.size) {
    case sizes.EX_SMALL:
      return "scale-75";
    case sizes.SMALL:
      return "scale-90";
    case sizes.MEDIUM:
      return "scale-105";
    case sizes.LARGE:
      return "scale-110";
    case sizes.EX_LARGE:
      return "scale-125";
    default:
      return "scale-100";
  }
});
</script>
<template>
  <NuxtLink :to="to" :target="blank ? '_blank' : '_self'">
    <button
      class="
        px-4
        py-1
        text-white
        flex
        items-center
        gap-1.5
        opacity-100
        hover:opacity-80
        duration-200
      "
      :class="[
        btnSize,
        {
          'rounded-full': rounded,
          'bg-gray-200 text-gray-500 cursor-context-menu hover:opacity-100':
            disabled,
          'shadow-md': withShadow,
          'bg-white hover:bg-gray-50': text && !disabled,
        },
      ]"
      :style="bgColor"
    >
      <slot></slot>
    </button>
  </NuxtLink>
</template>
