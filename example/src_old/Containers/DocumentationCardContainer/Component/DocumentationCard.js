import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationCard.css';

import META, { OPTION_OTHER_CARD } from '../source';

import { Card, FormElements } from 'react-blended-components';

class DocumentationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFooter: false,
      hideHeader: false
    };
  }

  renderDemo = () => (
    <div className="row">
      <div className="col-12">
        <Card header="Lorem ipsum" footer="Lorem ipsum" hideFooter={this.state.hideFooter} hideHeader={this.state.hideHeader}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum erat ex, ac pretium elit facilisis sed. Sed ligula arcu, commodo quis lectus
          in, mollis venenatis orci. Vivamus ac sollicitudin enim. 
        </Card>
      </div>
    </div>
  );

  cardOptions = () => (
    <div className="col-lg-12">
      <FormElements.CheckBox
        name="card-other"
        label="Other"
        onChange={(value, id) => {
          if (id === `card-other-${OPTION_OTHER_CARD[0].id}`) {
            this.setState((pState) => ({ hideHeader: !pState.hideHeader }));
          } else if (id === `card-other-${OPTION_OTHER_CARD[1].id}`) {
            this.setState((pState) => ({ hideFooter: !pState.hideFooter }));
          }
        }}
        value={{
          [OPTION_OTHER_CARD[0].id]: this.state.hideHeader,
          [OPTION_OTHER_CARD[1].id]: this.state.hideFooter,
        }}
        options={OPTION_OTHER_CARD}
      />
    </div>
  );

  renderDemoOptions = () => (
    <div className="row">
      {this.cardOptions()}
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo, this.renderDemoOptions)} />;
  }
}

export default DocumentationCard;
