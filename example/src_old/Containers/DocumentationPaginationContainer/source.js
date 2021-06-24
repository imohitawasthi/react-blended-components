const CODE = `

<Pagination
  limit={this.state.limit}
  offset={this.state.offset}
  total={this.state.total}
  onPageChange={(action) =>
    action === 'back' ? this.setState((p) => ({ offset: p.offset - p.limit })) : this.setState((p) => ({ offset: p.offset + p.limit }))
  }
  type={"BASIC"}
/>

`;

const PROPS = [
  {
    attribute: 'type',
    type: 'String',
    default: '-',
    description: 'Pagination type, One of BASIC | ONLY-NAVIGATION | BUTTON | CURRENT_PAGE',
  },
  {
    attribute: 'limit',
    type: 'Number',
    default: '-',
    description: 'Page size',
  },
  {
    attribute: 'offset',
    type: 'Number',
    default: '-',
    description: 'Page Offset',
  },
  {
    attribute: 'total',
    type: 'Number',
    default: '-',
    description: 'Total number of elements',
  },
  {
    attribute: 'onPageChange',
    type: 'Function',
    default: '-',
    description: 'Callback, on page change (Next/back)',
  }
];

const META = (renderDemo, renderOptions) => [
  {
    type: 'HEADING',
    render: 'Pagination',
  },
  // {
  //   type: 'REMARK',
  //   render: `Element for controlling/loading multi-page components.`,
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
  }
];

const OPTION_TYPE_PAGINATION = [
  {
    id: 'BASIC',
    label: 'BASIC',
    value: "BASIC",
  },
  {
    id: 'ONLY-NAVIGATION',
    label: 'ONLY NAVIGATION',
    value: "ONLY-NAVIGATION",
  },
  {
    id: 'BUTTON',
    label: 'BUTTON',
    value: "BUTTON",
  },
  {
    id: 'CURRENT-PAGE',
    label: 'CURRENT PAGE',
    value: "CURRENT-PAGE",
  },
]

export { OPTION_TYPE_PAGINATION }

export default META;
