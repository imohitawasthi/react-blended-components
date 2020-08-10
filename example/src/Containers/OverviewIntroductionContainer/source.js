const META = (renderIcons, renderFootNotes) => [
  {
    type: 'HEADING',
    render: 'Introduction',
  },
  {
    type: 'CONTENT',
    render: `
            The package is intended to be the standard way of creating React applications. 
            With highly customizable components and agility to embed into different workflows, 
            it allows building systems for the enterprise level as well as personal projects.
        `,
  },
  {
    type: 'CUSTOM',
    render: renderIcons(),
  },
  {
    type: 'REMARK',
    render: [' - React Blended Components comes under MIT licence © (imohitawasthi) Mohit Awasthi.', renderFootNotes(), ' - Fork it on Github!'],
  },
];

export default META;
