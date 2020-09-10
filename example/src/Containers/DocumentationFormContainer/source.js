const CODE = `

<Loader 
  active={this.state.showLoader} 
  type="CIRCLE" 
  blockUI={false} 
  message="Please Wait!"
/>

`;

const PROPS = [
  {
    attribute: 'active',
    type: 'Boolean',
    default: '-',
    description: 'Show/hide dialog.',
  },
  {
    attribute: 'blockUI',
    type: 'Boolean',
    default: '-',
    description: 'Switch between inline and modal view of loader.',
  },
  {
    attribute: 'type',
    type: 'String',
    default: 'BARS',
    description: 'Loader type, use any of: BARS | CIRCLE | DOT-SPIN | DOT-BOUNCE | DOT-CIRCLE.',
  },
  {
    attribute: 'message',
    type: 'String',
    default: '',
    description: 'Message to show while screen is loading.',
  },
  {
    attribute: 'headerClass',
    type: 'String',
    default: '',
    description: 'Message class.',
  },
  {
    attribute: 'headerStyle',
    type: 'String',
    default: '',
    description: 'Message style.',
  },
  {
    attribute: 'bodyClass',
    type: 'String',
    default: '',
    description: 'Loader class.',
  },
  {
    attribute: 'bodyStyle',
    type: 'Style',
    default: '',
    description: 'Loader style',
  }
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Form',
  },
  {
    type: 'REMARK',
    render: `A warping element for some awesome content.`,
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
    render: renderDemo()
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
    style: { padding: 8 }
  }
];

const META_FORM = [
  {
    name: 'textFieldName',
    label: 'Name',
    placeHolder: 'Name',
    type: 'text'
  },
  {
    name: 'textFieldPassword',
    label: 'Password',
    placeHolder: 'Password',
    type: 'password'
  }
]

export {
  META_FORM
}

export default META;
