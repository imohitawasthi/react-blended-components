const META = (demo) => [
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
    style: {padding: 8}
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
  {
    type: 'EXAMPLE',
    render: demo()
  }
];

export default META;
