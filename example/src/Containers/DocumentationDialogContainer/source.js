const CODE = `

<Dialog
  active={this.state.showDialog}
  onClose={() => this.setState({ showDialog: false })}
  onHide={() => this.setState({ showDialog: false })}
  header="Sample Dialogs' Header"
  footer="Sample Dialogs' Footer"
  body={
    <div className="row">
      Cras a velit iaculis, faucibus ante et, ultricies ante. Maecenas, consequat. 
      Quisque non enim varius, gravida metus quis. Phasellus in nibh fermentum, 
      condimentum felis nec, euismod arcu. Proin. Mauris congue cursus ultricies, 
      tellus erat ultrices neque, leo, varius in feugiat nec, interdum vel urna.
    </div>
  }
  size="SMALL"
  hideClose={false}
/>

`;

const PROPS = [
  {
    attribute: 'active',
    type: 'boolean',
    default: '-',
    description: 'Show/hide dialog.',
  },
  {
    attribute: 'onClose',
    type: 'Functions',
    default: '-',
    description: 'Callback on closing the modal',
  },
  {
    attribute: 'onHide',
    type: 'Functions',
    default: '',
    description: 'Callback on clinking outside of the modal',
  },
  {
    attribute: 'size',
    type: 'String',
    default: 'NORMAL',
    description: 'Modal Size, use any of: NORMAL | SMALL | LARGE | EXTRA-LARGE. Defines width of the dialog.',
  },
  {
    attribute: 'background',
    type: 'String',
    default: '',
    description: 'Dialogs background color.',
  },
  {
    attribute: 'hideClose',
    type: 'Boolean',
    default: '',
    description: 'Hide close button on top left of the dialog.',
  },
  {
    attribute: 'header',
    type: 'String | Element',
    default: '',
    description: 'Dialog\'s Header.',
  },
  {
    attribute: 'headerClass',
    type: 'String',
    default: '',
    description: 'This class will be applied on the header.',
  },
  {
    attribute: 'headerStyle',
    type: 'Object',
    default: '',
    description: 'React styles, will get applied on the header.',
  },
  {
    attribute: 'body',
    type: 'String | Element',
    default: '',
    description: 'Dialog\'s Header.',
  },
  {
    attribute: 'bodyClass',
    type: 'String',
    default: '',
    description: 'This class will be applied on the body.',
  },
  {
    attribute: 'bodyStyle',
    type: 'Object',
    default: '',
    description: 'React styles, will get applied on the body.',
  },
  {
    attribute: 'footer',
    type: 'String | Element',
    default: '',
    description: 'Dialog\'s footer.',
  },
  {
    attribute: 'footerClass',
    type: 'String',
    default: '',
    description: 'This class will be applied on the footer.',
  },
  {
    attribute: 'footerStyle',
    type: 'Object',
    default: '',
    description: 'React styles, will get applied on the footer.',
  },
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Dialog',
  },
  // {
  //   type: 'REMARK',
  //   render: `Creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it.`,
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
    style: { padding: 8 },
  },
];

const OPTION_DIALOG_SIZE = [
  {
    id: 'size-normal',
    label: 'Normal',
    value: 'NORMAL',
  },
  {
    id: 'size-large',
    label: 'Large',
    value: 'LARGE',
  },
  {
    id: 'size-extra-large',
    label: 'Extra Large',
    value: 'EXTRA-LARGE',
  },
  {
    id: 'size-small',
    label: 'Small',
    value: 'SMALL',
  }
]

const OPTION_DIALOG_OTHER = [
  {
    id: 'hide-close',
    label: 'Hide Close Button',
    value: true,
  }
];

export {
  OPTION_DIALOG_SIZE,
  OPTION_DIALOG_OTHER
}

export default META;
