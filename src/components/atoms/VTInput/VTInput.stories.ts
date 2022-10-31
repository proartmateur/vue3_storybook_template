import VTInput from './VTInput.vue'
import {InputVariants} from "./enums";
export default {
  title: 'Example/VTInput',
  component: VTInput,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'aqua', value: '#0095B7' },
        { name: 'purple', value: '#655183' },
        { name: 'gray', value: '#ABABAB' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VTInput },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-t-input v-model:value="args.val" v-bind="args" />',
});

export const Primary = Template.bind({

});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// @ts-ignore
Primary.args = {
  id: 'lol',
  label: 'Name',
  val: 'yy',
  errorMessage: 'WOWOWO',
  variant: InputVariants.Normal
};
