import WwButton from "../../../components/ww-button.client.vue";

export default {
  title: "Components/Buttons/ww-button",
  component: WwButton,
};

export const Default = () => ({
  template: `
    <ww-button>Click Me!</ww-button>
  `,
  components: { WwButton },
});

export const Types = () => ({
  template: `
    <div style="display:flex; gap: 24px; flex-wrap: wrap">
      <ww-button disabled>Disabled</ww-button>
      <ww-button>Primary</ww-button>
      <ww-button rounded>Rounded</ww-button>
      <ww-button with-shadow>With shadow</ww-button>
      <ww-button text>Text btn</ww-button>
      <ww-button to="https://www.google.com/">Internal Link</ww-button>
      <ww-button to="https://www.google.com/" blank>External Link</ww-button>
    </div>
  `,
  components: { WwButton },
});

export const Colors = () => ({
  template: `
    <div style="display:flex; gap: 24px">
      <ww-button>Click Me!</ww-button>
      <ww-button color="success">Click Me!</ww-button>
      <ww-button color="error">Click Me!</ww-button>
      <ww-button color="#a21caf">Click Me!</ww-button>
      <ww-button color="disabled">Click Me!</ww-button>
    </div>
  `,
  components: { WwButton },
});

export const Sizes = () => ({
  template: `
    <div style="display:flex; gap: 24px">
      <ww-button size="ex-small">Click Me!</ww-button>
      <ww-button size="small">Click Me!</ww-button>
      <ww-button size="normal">Click Me!</ww-button>
      <ww-button size="medium">Click Me!</ww-button>
      <ww-button size="large">Click Me!</ww-button>
      <ww-button size="ex-large">Click Me!</ww-button>
    </div>
  `,
  components: { WwButton },
});
