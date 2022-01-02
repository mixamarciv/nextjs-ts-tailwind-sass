import Button from './index';

export default {
    title: "My First Button" 
}

const Template = arguments_ => <Button {...arguments_} />

export const Primary = Template.bind({})

Primary.args ={
    classes: "h-40 w-full",
    children: "Primary"
}