import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationCard.css';

import META, { OPTION_CARD_WIDTH, OPTION_CARD_POSITION } from '../source';

import { Card, FormElements } from 'react-blended-components';

class DocumentationCard extends React.Component {

  constructor(props) {
    super(props) 

    this.state = {
      width: OPTION_CARD_WIDTH[OPTION_CARD_WIDTH.length - 1].value,
      align: OPTION_CARD_POSITION[OPTION_CARD_POSITION.length - 1].value
    }
  }

  renderDemo = () => (
    <div className="row">
      <div className="col-12">
        <Card header="Lorem ipsum" footer="Lorem ipsum" width={this.state.width} align={this.state.align}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum erat ex, ac pretium elit facilisis sed. Sed ligula arcu, commodo quis lectus
          in, mollis venenatis orci. Vivamus ac sollicitudin enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Card>
      </div>
    </div>
  );

  cardWidth = () => (
    <div className='col-12'>
      <FormElements.Radio
        name="card-width"
        label="Width"
        onChange={(e) => {
          this.setState({ width: e });
        }}
        value={this.state.width}
        options={OPTION_CARD_WIDTH}
      />
    </div>
  )

  cardPosition = () => (
    <div className='col-12'>
      <FormElements.Radio
        name="card-align"
        label="Align"
        onChange={(e) => {
          this.setState({ align: e });
        }}
        value={this.state.align}
        options={OPTION_CARD_POSITION}
      />
    </div>
  )

  renderDemoOptions = () => (
    <div className='row'>
      {this.cardWidth()}
      {this.cardPosition()}
    </div>
  )

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderDemoOptions)} />;
  }
}

export default DocumentationCard;
