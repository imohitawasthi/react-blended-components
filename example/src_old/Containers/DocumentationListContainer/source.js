const CODE = `

<Table 
  name='tableDemo' 
  className={{
    rootClassName: "",
    headClassName: "",
    rowClassName: "",
  }}
  header={ /* SEE HEADER META */ } 
  data={ /* SEE DATA META */ }
/>

`;

const PROPS = [
  {
    attribute: 'name',
    type: 'String',
    default: '-',
    description: 'Name of table',
  },
  {
    attribute: 'className',
    type: 'Object',
    default: '-',
    description: 'Class Object for over-writing default classes. Object can have "rootClassName", "headClassName", and "rowClassName" as property.',
  },
  {
    attribute: 'header',
    type: 'Object',
    default: '',
    description: 'See Header Meta-Data',
  },
  {
    attribute: 'data',
    type: 'Object',
    default: '',
    description: 'See data Meta-Data',
  },
];

const META = (renderDemo, renderOptions, renderMetaStructure) => [
  {
    type: 'HEADING',
    render: 'List',
  },
  // {
  //   type: 'REMARK',
  //   render: `An arrangement of data in rows and columns, or possibly in a more complex structure.`,
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
    render: 'Meta Structure',
  },
  {
    type: 'DEMO_CODE',
    render: renderMetaStructure(),
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
  },
  {
    label: 'favorite superhero',
    dataKey: 'favoriteSuperhero',
    thStyle: {}
  },
  {
    label: 'Black or White',
    dataKey: 'bOrW',
    thStyle: {}
  }
]

const DATA = [
  {
    sNo: 1,
    firstName: 'Demo',
    lastName: 'One',
    favoriteSuperhero: 'Spider Man',
    bOrW: 'Black'
  },
  {
    sNo: 2,
    firstName: 'demonstrace',
    lastName: 'Two',
    favoriteSuperhero: 'Iron Man',
    bOrW: 'Black'
  },
  {
    sNo: 3,
    firstName: 'demonstration',
    lastName: 'Three',
    favoriteSuperhero: 'Bob the builder',
    bOrW: 'White'
  }
]

const META_FORM_STRUCTURE = [
  {
    label: "Header",
    code: `
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
        },
        {
          label: 'favorite superhero',
          dataKey: 'favoriteSuperhero',
          thStyle: {}
        },
        {
          label: 'Black or White',
          dataKey: 'bOrW',
          thStyle: {}
        }
      ]
    `
  },
  {
    label: 'Data',
    code: `
      const DATA = [
        {
          sNo: 1,
          firstName: 'Demo',
          lastName: 'One',
          favoriteSuperhero: 'Spider Man',
          bOrW: 'Black'
        },
        {
          sNo: 2,
          firstName: 'demonstrace',
          lastName: 'Two',
          favoriteSuperhero: 'Iron Man',
          bOrW: 'Black'
        },
        {
          sNo: 3,
          firstName: 'demonstration',
          lastName: 'Three',
          favoriteSuperhero: 'Bob the builder',
          bOrW: 'White'
        }
      ]
    `
  }
]

export { HEADER, DATA, META_FORM_STRUCTURE }

export default META;
