
import React from 'react';

const META = () => [
    {
        'type': 'HEADING',
        'render': 'Installation'
    },
    {
        type: 'SPACING',
        style: {padding: 4},
    },
    {
        'type': 'SUB_HEADING',
        'render': 'Using npm'
    },
    {
        'type': 'CODE',
        'render': 'npm i react-blended-components'
    },
    {
        'type': 'SUB_HEADING',
        'render': 'Using yarn'
    },
    {
        'type': 'CODE',
        'render': 'yarn add react-blended-components'
    },
    {
        type: 'SPACING',
        style: {padding: 4},
    },
    {
        'type': 'REMARK',
        'render': [
            ' - Dependencies: "prop-types": "^15.7.2"',
            ' - Node Version >= 10'
        ]
    },
]

export default META
