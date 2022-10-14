import WwIcon from "../../../components/ww-icon.client.vue";

export default {
  title: "Components/Icons/ww-icon",
  component: WwIcon,
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Meta title="Components/ww-icon-2" component={WwIcon} />
  //       </>
  //     ),
  //   },
  // },
};

export const Default = () => ({
  template: "<ww-icon></ww-icon>",
  components: { WwIcon },
});

export const Small = () => ({
  template: '<ww-icon size="small">edit-write</ww-icon>',
  components: { WwIcon },
});

export const Normal = () => ({
  template: '<ww-icon size="normal">edit-write</ww-icon>',
  components: { WwIcon },
});

export const Medium = () => ({
  template: '<ww-icon size="medium">edit-write</ww-icon>',
  components: { WwIcon },
});

export const Large = () => ({
  template: '<ww-icon size="large">edit-write</ww-icon>',
  components: { WwIcon },
});

export const SetSizeByNumber = () => ({
  template: '<ww-icon size="10">edit-write</ww-icon>',
  components: { WwIcon },
});

export const SetColor = () => ({
  template: '<ww-icon color="red">edit-write</ww-icon>',
  components: { WwIcon },
});

export const SetStyle = () => ({
  template:
    '<ww-icon style="fill:green; width:80px; height:80px">edit-write</ww-icon>',
  components: { WwIcon },
});
