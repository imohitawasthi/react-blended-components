const CODE = `

<Card 
  header="Lorem ipsum" 
  footer="Lorem ipsum" 
  classNames={
    root: '',
    header: 'center',
    child: '',
    footer: ''
  }
  style={
    header: {fontWeight: "bolder"},
    footer: {fontWeight: "bold"}
  }
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum erat ex, ac pretium elit facilisis sed. Sed ligula arcu, commodo quis lectus
  in, mollis venenatis orci. Vivamus ac sollicitudin enim. 
</Card>

`;

const PROPS = [
  {
    attribute: 'children',
    type: 'String | Element',
    default: '',
    description: 'It will get rendered as the main content.',
  },
  {
    attribute: 'header',
    type: 'String | Element',
    default: '',
    description: '',
  },
  {
    attribute: 'hideHeader',
    type: 'Boolean',
    default: 'false',
    description: '',
  },
  {
    attribute: 'footer',
    type: 'String | Element',
    default: '',
    description: '',
  },
  {
    attribute: 'hideFooter',
    type: 'Boolean',
    default: 'false',
    description: '',
  },
  {
    attribute: 'classNames',
    type: 'Object',
    default: '{}',
    description:
      'Object may contains the following properties: rootClass(Parent Element), headClass(Card head), childClass(Child/Main content), and footClass(Card Foot). It is not necessary to add all the properties, any of them will work for their respective block. Once the property is used it will replace the default respective class.',
  },
  {
    attribute: 'styles',
    type: 'Object',
    default: '{}',
    description: 
    'Object may contains the following properties: rootStyle(Parent Element), headStyle(Card head), childStyle(Child/Main content), and footStyle(Card Foot). It is not necessary to add all the properties, any of them will work for their respective block. Works with default React style Object.',
  },
  {
    attribute: 'width',
    type: 'String | Number',
    default: '',
    description: '',
  },
  {
    attribute: 'height',
    type: 'String | Number',
    default: '',
    description: '',
  },
  {
    attribute: 'align',
    type: 'String',
    default: '',
    description: 'use any of: LEFT | RIGHT | CENTER',
  },
];

const META = (renderDemo, renderDemoOptions) => [
  {
    type: 'HEADING',
    render: 'Card',
  },
  // {
  //   type: 'REMARK',
  //   render: `A warping element for some awesome content.`,
  // },
  {
    type: 'SPACING',
    style: {padding: 4}
  },
  // {
  //   type: 'SUB_HEADING',
  //   render: 'Demo',
  // },
  {
    type: 'CONTENT',
    render: renderDemo(),
  },
  {
    type: 'EXAMPLE',
    render: renderDemoOptions(),
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

const OPTION_OTHER_CARD = [
  {
    id: 'hide-header',
    label: 'Hide Header',
    value: false,
  },
  {
    id: 'hide-footer',
    label: 'Hide Footer',
    value: false,
  },
];

export { OPTION_OTHER_CARD };

export default META;
