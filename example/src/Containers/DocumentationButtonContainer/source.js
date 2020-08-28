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
    description: 'If className is passed the default class will get removed and the style and type will get null and void.'
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
    style: { padding: 8 },
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
];

const OPTION_TYPE_BUTTON = [
  {
    id: 'type-basic',
    label: 'BASIC',
    value: 'BASIC',
  },
  {
    id: 'type-default',
    label: 'DEFAULT',
    value: 'DEFAULT',
  },
  {
    id: 'type-primary',
    label: 'PRIMARY',
    value: 'PRIMARY',
  },
  {
    id: 'type-success',
    label: 'SUCCESS',
    value: 'SUCCESS',
  },
  {
    id: 'type-info',
    label: 'INFO',
    value: 'INFO',
  },
  {
    id: 'type-warning',
    label: 'WARNING',
    value: 'WARNING',
  },
  {
    id: 'type-danger',
    label: 'DANGER',
    value: 'DANGER',
  },
  {
    id: 'type-transparent',
    label: 'TRANSPARENT',
    value: 'TRANSPARENT',
  },
  {
    id: 'type-dashed',
    label: 'DASHED',
    value: 'DASHED',
  },
];

const OPTION_SIZE_BUTTON = [
  {
    id: 'size-normal',
    label: 'NORMAL',
    value: 'NORMAL',
  },
  {
    id: 'type-extra-large',
    label: 'EXTRA-LARGE',
    value: 'EXTRA-LARGE',
  },
  {
    id: 'size-large',
    label: 'LARGE',
    value: 'LARGE',
  },
  {
    id: 'size-small',
    label: 'SMALL',
    value: 'SMALL',
  },
  {
    id: 'size-extra-small',
    label: 'EXTRA-SMALL',
    value: 'EXTRA-SMALL',
  },
];

const OPTION_DISABLED_BUTTON = [
  {
    id: 'disabled',
    label: 'DISABLE',
    value: true,
  },
  {
    id: 'custom',
    label: 'CUSTOM',
    value: true,
  },
];

export { OPTION_TYPE_BUTTON, OPTION_SIZE_BUTTON, OPTION_DISABLED_BUTTON, CODE };

export default META;
