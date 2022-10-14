<template>
  <div class="ig-wrapper">
    <div
      v-for="(icon, i) in icons"
      :key="i"
      class="ig-item"
      @click="onCopied(icon)"
    >
      <div class="ig-item-frame">
        <ww-icon>{{ icon }}</ww-icon>
      </div>
      <div class="ig-name">{{ icon }}</div>
      <div
        class="ig-copied-msg"
        :class="{ 'ig-copied-msg__shown': isCopiedIcon === icon }"
      >
        Copied
      </div>
    </div>
  </div>
</template>
<script>
import WwIcon from "../ww-icon.client.vue";
export default {
  name: "IconGallery",
  components: { WwIcon },
  data() {
    return {
      icons: [],
      isCopiedIcon: "",
    };
  },
  created() {
    this.initIcons();
  },
  methods: {
    async initIcons() {
      const res = await fetch("./assets/svg/sprite.svg");
      const data = await res.text();
      const match = data.match(/id=".*?"/g);

      if (match)
        this.icons = match?.map((icon) => icon.substring(4, icon.length - 1));
    },
    onCopied(icon) {
      if (this.isCopiedIcon === icon) return;
      navigator.clipboard.writeText(`<ww-icon>${icon}</ww-icon>`);
      this.isCopiedIcon = icon;
      setTimeout(() => {
        this.isCopiedIcon = "";
      }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
.ig {
  &-wrapper {
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &-item {
    padding: 10px;
    border: 1px solid rgb(209, 209, 209);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    gap: 5px;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: rgb(251, 251, 251);
    }
  }
  &-name {
    font-size: 13px;
    font-weight: 600;
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
