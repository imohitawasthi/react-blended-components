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
  }
];

const OPTION_LOADER_DURATION = [
  {
    id: 'duration-3',
    label: '3 Seconds',
    value: 3,
  },
  {
    id: 'duration-5',
    label: '5 Seconds',
    value: 5,
  },
  {
    id: 'duration-10',
    label: '10 Seconds',
    value: 10,
  },
  {
    id: 'duration-20',
    label: '20 Seconds',
    value: 20,
  }
]

export {
  OPTION_LOADER_DURATION
}

export default META;
