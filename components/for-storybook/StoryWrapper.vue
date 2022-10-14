<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({ componentTemplate: String });
const isCopied = ref(false);
const onCopied = () => {
  navigator.clipboard.writeText(componentTemplate);
  isCopied.value = !isCopied.value;
  setTimeout(() => {
    isCopied.value = !isCopied.value;
  }, 3000);
};
</script>

<template>
  <div class="sw-item" @click="onCopied">
    <slot></slot>
    <div class="ig-copied-msg" :class="{ 'ig-copied-msg__shown': isCopied }">
      Copied
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sw {
  &-item {
    padding: 10px;
    border: 1px solid rgb(209, 209, 209);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
      border: rgb(251, 251, 251);
    }
  }
  &-copied-msg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #3a3a3a;
    font-size: 10px;
    color: white;
    padding: 3px;
    transform: translateY(26px);
    transition: 0.3s;
  }
  &-copied-msg__shown {
    transform: translateY(0);
  }
}
</style>
