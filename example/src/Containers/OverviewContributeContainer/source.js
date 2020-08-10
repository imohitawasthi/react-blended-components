const META = (renderFork, renderRemark, renderCustomSpacing) => [
  {
    type: 'HEADING',
    render: 'How to contribute',
  },
  {
    type: 'CONTENT',
    render: renderFork(),
  },
  {
    type: 'CONTENT',
    render: ' - Setup a working copy on your computer',
  },
//   {
//     type: 'CODE',
//     render: 'git clone https://github.com/imohitawasthi/react-blended-components.git',
//   },
  {
    type: 'CONTENT',
    render: ' - Create a topic branch from master',
  },
//   {
//     type: 'CODE',
//     render: 'git checkout -b topic',
//   },
  {
    type: 'CONTENT',
    render: ' - Make some commits to improve the project',
  },
  {
    type: 'CONTENT',
    render: ' - Push this branch to GitHub',
  },
//   {
//     type: 'CODE',
//     render: 'git push -u topic',
//   },
  {
    type: 'CONTENT',
    render: ' - Open a Pull Request on GitHub',
  },
  {
    type: 'CONTENT',
    render: ' - Discuss, and optionally continue committing',
  },
  {
    type: 'CONTENT',
    render: ' - The project owner(Me) merges or closes the Pull Request',
  },
  {
    type: 'CONTENT',
    render: ' - Sync the updated master back to your fork',
  },
  {
    type: 'CUSTOM',
    render: renderCustomSpacing(),
  },
  {
    type: 'REMARK',
    render: renderRemark(),
  },
];

export default META;
