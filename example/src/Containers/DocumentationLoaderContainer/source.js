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
    render: 'Card',
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
    type: 'EXAMPLE',
    render: renderOptions()
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

const OPTION_LOADER_DURATION = [
  {
    id: 'duration-3',
    label: '3 Seconds',
    value: '3',
  },
  {
    id: 'duration-5',
    label: '5 Seconds',
    value: '5',
  },
  {
    id: 'duration-10',
    label: '10 Seconds',
    value: '10',
  },
  {
    id: 'duration-20',
    label: '20 Seconds',
    value: '20',
  }
]

const OPTION_LOADER_TYPE = [
  {
    id: 'type-circle',
    label: 'Circle',
    value: 'CIRCLE',
  },
  {
    id: 'type-bars',
    label: 'Bars',
    value: 'BARS',
  },
  {
    id: 'type-dot-spin',
    label: 'Dot Spin',
    value: 'DOT-SPIN',
  },
  // {
  //   id: 'type-dot-bounce',
  //   label: 'Dot Bounce',
  //   value: 'DOT-BOUNCE',
  // },
  {
    id: 'type-dot-circle',
    label: 'Dot Circle',
    value: 'DOT-CIRCLE',
  }
]

const OPTION_DIALOG_OTHER = [
  {
    id: 'block-ui',
    label: 'Block UI',
    value: true,
  }
];

export {
  OPTION_LOADER_DURATION,
  OPTION_LOADER_TYPE,
  OPTION_DIALOG_OTHER
}

export default META;
