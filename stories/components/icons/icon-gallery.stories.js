import IconGallery from "../../../components/for-storybook/Icongallery.vue";
export default {
  title: "Components/Icons/Gallery",
  component: IconGallery,
};

export const Gallery = () => ({
  template: "<IconGallery />",
  components: { IconGallery },
});
