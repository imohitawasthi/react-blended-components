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
    style: {padding: 8}
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
  {
    type: 'EXAMPLE',
    render: renderDemo()
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
