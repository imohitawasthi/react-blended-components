const CODE = `

<Avatar 
  round={true} 
  name="Sample Avatar" 
  size={50} 
  fontSize={20} 
/>

`;

const PROPS = [
  {
    attribute: 'round',
    type: 'Boolean',
    default: '-',
    description: 'Controls shape',
  },
  {
    attribute: 'name',
    type: 'String',
    default: '-',
    description: 'Avatar Display Name',
  },
  {
    attribute: 'src',
    type: 'String',
    default: '-',
    description: 'Path to image to display. Preferred over name(initials)',
  },
  {
    attribute: 'size',
    type: 'Number',
    default: '-',
    description: 'Size of Avatar',
  },
  {
    attribute: 'fontSize',
    type: 'Number',
    default: '-',
    description: 'Font size for Initials',
  }
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Avatar',
  },
  {
    type: 'REMARK',
    render: `Is used to mean a virtual representation of a user.`,
  },
  {
    type: 'SPACING',
    style: { padding: 4 },
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
  {
    type: 'CONTENT',
    render: renderDemo(),
  },
  // {
  //   type: 'EXAMPLE',
  //   render: renderOptions(),
  // },
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

export {};

export default META;
