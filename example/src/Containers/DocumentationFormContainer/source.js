const CODE = `

<Form 
  name='customForm'
  meta={ SEE META STRUCTURE }
  onChange={()=>{/*HANDLE CHANGE HERE*/}}
  onBlue={()=>{/*HANDLE BLUR HERE*/}}
  className=''
/>

`;

const PROPS = [
  {
    attribute: 'active',
    type: 'Boolean',
    default: '-',
    description: 'Show/hide dialog.',
  },
  {
    attribute: 'blockUI',
    type: 'Boolean',
    default: '-',
    description: 'Switch between inline and modal view of loader.',
  },
  {
    attribute: 'type',
    type: 'String',
    default: 'BARS',
    description: 'Loader type, use any of: BARS | CIRCLE | DOT-SPIN | DOT-BOUNCE | DOT-CIRCLE.',
  },
  {
    attribute: 'message',
    type: 'String',
    default: '',
    description: 'Message to show while screen is loading.',
  },
  {
    attribute: 'headerClass',
    type: 'String',
    default: '',
    description: 'Message class.',
  },
  {
    attribute: 'headerStyle',
    type: 'String',
    default: '',
    description: 'Message style.',
  },
  {
    attribute: 'bodyClass',
    type: 'String',
    default: '',
    description: 'Loader class.',
  },
  {
    attribute: 'bodyStyle',
    type: 'Style',
    default: '',
    description: 'Loader style',
  },
];

const META = (renderDemo, renderMetaStructure) => [
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
    style: { padding: 4 },
  },
  {
    type: 'SUB_HEADING',
    render: 'Demo',
  },
  {
    type: 'CONTENT',
    render: renderDemo(),
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
    render: 'Remarks',
  },
  {
    type: 'REMARK',
    render: [
      ` - Meta structure objects should be combined and passed into an array `,
      ` - "className" object can have rootClassName, groupClassName, labelClassName, fieldClassName, and errorClassName`
    ],
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
  },
];

const META_FORM = [
  {
    name: 'textFieldName',
    label: 'Name',
    placeholder: 'Full Name',
    type: 'text',
    className: {
      rootClassName: 'col-6',
    },
  },
  {
    name: 'textFieldPassword',
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    className: {
      rootClassName: 'col-6',
    },
  },
  {
    name: 'textareaFieldDescription',
    label: 'Description',
    placeholder: 'A short description',
    type: 'textarea',
    className: {
      rootClassName: 'col-12',
    },
  },
  {
    name: 'radioFieldFavFood',
    label: 'Favorite food',
    type: 'radio',
    className: {
      rootClassName: 'col-12',
    },
    options: [
      {
        id: 'pizza',
        label: 'Pizza',
        value: '0',
      },
      {
        id: '2pizza',
        label: '2 Pizzas',
        value: '1',
      },
      {
        id: '3pizza',
        label: '3 Pizzas',
        value: '2',
      },
      {
        id: '4pizza',
        label: 'Or better, 3 Pizzas and Booze',
        value: '3',
      },
    ],
  },
  {
    name: 'checkboxFieldMood',
    label: 'Current Mood',
    type: 'checkbox',
    className: {
      rootClassName: 'col-12',
    },
    options: [
      {
        id: 'good',
        label: 'Good',
        value: 'good',
      },
      {
        id: 'calm',
        label: 'Calm',
        value: 'calm',
      },
      {
        id: 'happy',
        label: 'Happy',
        value: 'happy',
      },
      {
        id: 'hungry',
        label: 'Hungry',
        value: 'hungry',
      },
      {
        id: 'hungrier',
        label: 'Hungrier',
        value: 'hungrier',
      },
    ],
  },
  {
    name: 'selectFieldSuperhero',
    label: 'Select the best one',
    type: 'select',
    className: {
      rootClassName: 'col-6',
    },
    options: [
      {
        label: 'Superman',
        value: 'superman',
      },
      {
        label: 'Batman',
        value: 'batman',
      },
      {
        label: 'Iron man',
        value: 'ironMan',
      },
      {
        label: 'Dr. Strange',
        value: 'drStrange',
      },
      {
        label: 'Spider Man',
        value: 'spiderMan',
      },
      {
        label: 'Doremon',
        value: 'doremon',
      },
    ],
  },
  {
    name: 'selectFieldParticles',
    label: 'Select the most amazing',
    type: 'select',
    className: {
      rootClassName: 'col-6',
    },
    options: [
      {
        label: 'Quarks',
        meta: [
          {
            value: 'up',
            label: 'Up',
          },
          {
            value: 'down',
            label: 'Down',
          },
          {
            value: 'charm',
            label: 'Charm',
          },
          {
            value: 'strange',
            label: 'Strange',
          },
          {
            value: 'top',
            label: 'Top',
          },
          {
            value: 'bottom',
            label: 'Bottom',
          },
        ],
      },
      {
        label: 'Leptons',
        meta: [
          {
            value: 'electron',
            label: 'Electron',
          },
          {
            value: 'electronNeutrino',
            label: 'Electron Neutrino',
          },
          {
            value: 'muon',
            label: 'Muon',
          },
          {
            value: 'muonNeutrino',
            label: 'Muon Neutrino',
          },
          {
            value: 'tau',
            label: 'Tau',
          },
          {
            value: 'tauNeutrino',
            label: 'Tau Neutrino',
          },
        ],
      },
    ],
  },
  {
    name: 'datepickerFieldAnyTime',
    label: 'Any time',
    type: 'datepicker',
    className: {
      rootClassName: 'col-6',
    },
  },
  {
    name: 'switchFieldPartyMode',
    label: 'Party Mode',
    type: 'switch',
    className: {
      rootClassName: 'col-6',
    },
  },
  {
    name: 'sliderFieldEnthusiasm',
    label: 'Enthusiasm',
    type: 'slider',
    className: {
      rootClassName: 'col-12',
    },
  },
];

const META_FORM_STRUCTURE = [
  {
    label: "Text",
    code: `
      {
        name: 'textFieldName',
        label: 'Name',
        placeholder: 'Full Name',
        type: 'text',
        className: {
          rootClassName: 'col-6',
        },
      }
    `
  },
  {
    label: "Password",
    code: `
      {
        name: 'textFieldPassword',
        label: 'Password',
        placeholder: 'Password',
        type: 'password',
        className: {
          rootClassName: 'col-6',
        },
      }
    `
  },
  {
    label: "Text Area",
    code: `
      {    
        name: 'textareaFieldDescription',
        label: 'Description',
        placeholder: 'A short description',
        type: 'textarea',
        className: {
          rootClassName: 'col-12',
        },
      }
    `
  },
  {
    label: "Radio",
    code: `
      {
        name: 'radioFieldFavFood',
        label: 'Favorite food',
        type: 'radio',
        className: {
          rootClassName: 'col-12',
        },
        options: [
          {
            id: 'pizza',
            label: 'Pizza',
            value: '0',
          },
          {
            id: '2pizza',
            label: '2 Pizzas',
            value: '1',
          }
        ],
      }
    `
  },
  {
    label: "Checkbox",
    code: `
      {
        name: 'checkboxFieldMood',
        label: 'Current Mood',
        type: 'checkbox',
        className: {
          rootClassName: 'col-12',
        },
        options: [
          {
            id: 'good',
            label: 'Good',
            value: 'good',
          },
          {
            id: 'calm',
            label: 'Calm',
            value: 'calm',
          }
        ],
      }
    `
  },
  {
    label: "Select",
    code: `
      {
        name: 'selectFieldSuperhero',
        label: 'Select the best one',
        type: 'select',
        className: {
          rootClassName: 'col-6',
        },
        options: [
          {
            label: 'Superman',
            value: 'superman',
          },
          {
            label: 'Batman',
            value: 'batman',
          }
        ],
      }
    `
  },
  {
    label: "Select (With Sub Options)",
    code: `
      {
        name: 'selectFieldParticles',
        label: 'Select the most amazing',
        type: 'select',
        className: {
          rootClassName: 'col-6',
        },
        options: [
          {
            label: 'Quarks',
            meta: [
              {
                value: 'up',
                label: 'Up',
              },
              {
                value: 'down',
                label: 'Down',
              },
            ],
          },
          {
            label: 'Leptons',
            meta: [
              {
                value: 'electron',
                label: 'Electron',
              },
            ],
          },
        ],
      }
    `
  },
  {
    label: "Date Picker",
    code: `
      {
        name: 'datepickerFieldAnyTime',
        label: 'Any time',
        type: 'datepicker',
        className: {
          rootClassName: 'col-6',
        },
      }
    `
  },
  {
    label: "",
    code: `

    `
  },
  {
    label: "",
    code: `

    `
  },
  {
    label: "",
    code: `

    `
  },
  {
    label: "",
    code: `

    `
  }
]

export { META_FORM, META_FORM_STRUCTURE };

export default META;
