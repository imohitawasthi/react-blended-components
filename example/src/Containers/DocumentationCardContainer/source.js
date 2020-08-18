const META = (renderDemo, renderDemoOptions) => [
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
    style: {padding: 8}
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
    render: renderDemoOptions()
  }
];

const OPTION_CARD_WIDTH = [
  {
    id: 'width-30',
    label: '30%',
    value: '30%',
  },
  {
    id: 'width-50',
    label: '50%',
    value: '50%',
  },
  {
    id: 'width-80',
    label: '80%',
    value: '80%',
  },
  {
    id: 'width-100',
    label: '100%',
    value: '100%',
  },
]

const OPTION_CARD_POSITION = [
  {
    id: 'width-left',
    label: 'Left',
    value: 'LEFT',
  },
  {
    id: 'width-right',
    label: 'Right',
    value: 'RIGHT',
  },
  {
    id: 'width-center',
    label: 'Center',
    value: 'CENTER',
  }
]

export {
  OPTION_CARD_WIDTH,
  OPTION_CARD_POSITION
}

export default META;
