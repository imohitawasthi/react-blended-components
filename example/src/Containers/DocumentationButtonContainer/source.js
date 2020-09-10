const CODE = `

<Button
  type={"SUCCESS"}
  size={"NORMAL"}
  onClick={() => console.log("Button Clicked!"))}
>
  Demo
</Button>

`;

const PROPS = [
  {
    attribute: 'children',
    type: 'String | Element',
    default: '',
    description: 'It will get rendered as the button content. Use the Element in case of adding icons, custom loaders etc.'
  },
  {
    attribute: 'type',
    type: 'String',
    default: 'PRIMARY',
    description: 'Use any of: BASIC | DEFAULT | PRIMARY | SUCCESS | INFO | WARNING | DANGER | TRANSPARENT | DASHED.' 
  },
  {
    attribute: 'size',
    type: 'String',
    default: 'NORMAL',
    description: 'Use any of: NORMAL | EXTRA-LARGE | LARGE | SMALL | EXTRA-SMALL.'
  },
  {
    attribute: 'className',
    type: 'String',
    default: '',
    description: 'If className is passed it will get append to current classes, Please use !important to make it work.'
  },
  {
    attribute: 'disabled',
    type: 'Boolean',
    default: 'false',
    description: ''
  },
  {
    attribute: 'style',
    type: 'Object',
    default: '{}',
    description: 'Works with default React style Object. Ideal for making minor modifications.'
  },
  {
    attribute: 'onClick',
    type: 'Function',
    default: '',
    description: 'Will get fired on button press.'
  }
]

const META = (demo, demoOptions) => [
  {
    type: 'HEADING',
    render: 'Button',
  },
  {
    type: 'REMARK',
    render: `Describes an action and what action will occur when clicked.`,
  },
  {
    type: 'SPACING',
    style: {padding: 4}
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
  {
    type: 'CONTENT',
    render: demo(),
  },
  {
    type: 'EXAMPLE',
    render: demoOptions(),
  },
  {
    type: 'SUB_HEADING',
    render: 'Code',
  },
  {
    type: 'DEMO_CODE',
    render: CODE,
  },
  {
    type: 'SUB_HEADING',
    render: 'Props',
  },
  {
    type: 'PROPS',
    render: PROPS,
  },
  {
    type: 'SPACING',
    style: { padding: 8 },
  },
];

const OPTION_TYPE_BUTTON = [
  {
    id: 'type-basic',
    label: 'Basic',
    value: 'BASIC',
  },
  {
    id: 'type-default',
    label: 'Default',
    value: 'DEFAULT',
  },
  {
    id: 'type-primary',
    label: 'Primary',
    value: 'PRIMARY',
  },
  {
    id: 'type-success',
    label: 'Success',
    value: 'SUCCESS',
  },
  {
    id: 'type-info',
    label: 'Info',
    value: 'INFO',
  },
  {
    id: 'type-warning',
    label: 'Warning',
    value: 'WARNING',
  },
  {
    id: 'type-danger',
    label: 'Danger',
    value: 'DANGER',
  },
  {
    id: 'type-transparent',
    label: 'Transparent',
    value: 'TRANSPARENT',
  },
  {
    id: 'type-dashed',
    label: 'Dashed',
    value: 'DASHED',
  },
];

const OPTION_SIZE_BUTTON = [
  {
    id: 'size-normal',
    label: 'Normal',
    value: 'NORMAL',
  },
  {
    id: 'type-extra-large',
    label: 'Extra Large',
    value: 'EXTRA-LARGE',
  },
  {
    id: 'size-large',
    label: 'Large',
    value: 'LARGE',
  },
  {
    id: 'size-small',
    label: 'Small',
    value: 'SMALL',
  },
  {
    id: 'size-extra-small',
    label: 'Extra Small',
    value: 'EXTRA-SMALL',
  },
];

const OPTION_DISABLED_BUTTON = [
  {
    id: 'disabled',
    label: 'Disabled',
    value: true,
  },
  {
    id: 'custom',
    label: 'Custom',
    value: true,
  },
];

export { OPTION_TYPE_BUTTON, OPTION_SIZE_BUTTON, OPTION_DISABLED_BUTTON, CODE };

export default META;
