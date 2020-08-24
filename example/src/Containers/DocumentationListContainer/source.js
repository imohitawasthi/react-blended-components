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

const HEADER = [
  {
    label: 'S.No.',
    dataKey: 'sNo',
    thStyle: {}
  },
  {
    label: 'First Name',
    dataKey: 'firstName',
    thStyle: {}
  },
  {
    label: 'Last Name',
    dataKey: 'lastName',
    thStyle: {}
  }
]

const DATA = [
  {
    sNo: 1,
    firstName: 'Test',
    lastName: 'One'
  },
  {
    sNo: 2,
    firstName: 'Test',
    lastName: 'Two'
  },
  {
    sNo: 3,
    firstName: 'Test',
    lastName: 'Three'
  }
]

export { HEADER, DATA }

export default META;
