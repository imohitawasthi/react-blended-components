const META = (demo, demoOptions) => [
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
    type: 'CONTENT',
    render: demo()
  },
  {
    type: 'EXAMPLE',
    render: demoOptions()
  }
];

const OPTION_TYPE_BUTTON = [
  {
    id: 'type-primary',
    label: 'BASIC',
    value: 'BASIC',
  },
  {
    id: 'type-primary',
    label: 'DEFAULT',
    value: 'DEFAULT',
  },
  {
    id: 'type-primary',
    label: 'PRIMARY',
    value: 'PRIMARY',
  },
  {
    id: 'type-primary',
    label: 'SUCCESS',
    value: 'SUCCESS',
  },
  {
    id: 'type-primary',
    label: 'INFO',
    value: 'INFO',
  },
  {
    id: 'type-primary',
    label: 'WARNING',
    value: 'WARNING',
  },
]

const OPTION_SIZE_BUTTON = [
  {
    id: 'size-normal',
    label: 'NORMAL',
    value: 'NORMAL',
  },
  {
    id: 'type-extra-large',
    label: 'EXTRA-LARGE',
    value: 'EXTRA-LARGE',
  },
  {
    id: 'size-large',
    label: 'LARGE',
    value: 'LARGE',
  },
  {
    id: 'size-small',
    label: 'SMALL',
    value: 'SMALL',
  },
  {
    id: 'size-extra-small',
    label: 'EXTRA-SMALL',
    value: 'EXTRA-SMALL',
  }
]

export {
  OPTION_TYPE_BUTTON,
  OPTION_SIZE_BUTTON
}

export default META;
