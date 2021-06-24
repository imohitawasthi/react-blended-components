
import iconSimple from './../../Theme/Icons/icon-oi-simple.svg';
import iconEffective from './../../Theme/Icons/icon-oi-effective.svg';
import iconCustomizable from './../../Theme/Icons/icon-oi-ruler.svg';
import iconHeart from './../../Theme/Icons/icon-oi-heart.svg';

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

const ICON_MAP = [
  {
    label: 'Easy to use',
    icon: iconSimple
  },
  {
    label: 'Effective like a spell',
    icon: iconEffective
  },
  {
    label: 'Highly customizable',
    icon: iconCustomizable
  },
  {
    label: 'Made with a lot of love!',
    icon: iconHeart
  }
]

export {
  ICON_MAP
}

export default META;
