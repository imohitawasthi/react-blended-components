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
    attribute: 'name',
    type: 'String',
    default: '-',
    description: 'Name of the form',
  },
  {
    attribute: 'meta',
    type: 'Object',
    default: '-',
    description: 'Form is created based on this meta, see "Meta Structure" for more.',
  },
  {
    attribute: 'onChange',
    type: 'Function',
    default: '-',
    description: 'Callback on change',
  },
  {
    attribute: 'onBlur',
    type: 'Function',
    default: '',
    description: 'Callback on blur',
  }
];

const META = (renderDemo, renderMetaStructure) => [
  {
    type: 'HEADING',
    render: 'Form',
  },
  {
    type: 'REMARK',
    render: `Allows to create dynamic forms with meta-data. Also, each element in form can be used independently.`,
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
    label: "Switch",
    code: `
      {
        name: 'switchFieldPartyMode',
        label: 'Party Mode',
        type: 'switch',
        className: {
          rootClassName: 'col-6',
        },
      }
    `
  },
  {
    label: "Slider",
    code: `
      {
        name: 'sliderFieldEnthusiasm',
        label: 'Enthusiasm',
        type: 'slider',
        className: {
          rootClassName: 'col-12',
        },
      }
    `
  }
]

export { META_FORM, META_FORM_STRUCTURE };

export default META;
