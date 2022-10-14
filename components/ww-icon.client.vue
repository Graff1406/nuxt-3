<script setup>
// name: ww-icon
import { useAttrs, computed, useSlots } from "vue";
import sprite from "../assets/svg/sprite.svg";

const props = defineProps({
  id: {
    type: String,
    default: "unknown",
  },
  size: {
    type: [String, Number],
    default: "normal",
  },
  color: String,
});

const slots = useSlots();
const ID =
  (slots?.default && slots.default()?.[0]?.children?.trim()) || props.id;
const attrs = useAttrs();
const href = computed(() => `${sprite}#${ID}`);
const initSize = computed(() => {
  const setSize = (s) => `width:${s}px; height: ${s}px`;
  const sizes = ["small", "normal", "medium", "large"];
  if (
    typeof props.size === "string" &&
    sizes.includes(props.size?.trim()?.toLocaleLowerCase())
  ) {
    switch (props.size) {
      case "small":
        return setSize(15);
      case "medium":
        return setSize(45);
      case "large":
        return setSize(60);
      default:
        return setSize(30);
    }
  }
  return setSize(props.size);
});

// const sizes = `width:${initSize}px; height: ${initSize}px`;
const defineColor = props.color ? `fill: ${props.color}` : props.color;
</script>

<template>
  <svg
    :class="['default-size', attrs.class]"
    :style="[initSize, defineColor, attrs.style]"
  >
    <use :href="href"></use>
  </svg>
</template>
