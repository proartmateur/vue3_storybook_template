import InputTest from './InputTest.vue';

export default {
    title: 'Example/InputTest',
    component: InputTest,
    argTypes: {},
};

const Template = (args: any) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {InputTest},
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return {
            args
        };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<input-test v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
// @ts-ignore
Primary.args = {
    id: 'lol',
    label: 'Name2',
    val: 'yyd',
    errorMessage: 'jdskdj'
};
