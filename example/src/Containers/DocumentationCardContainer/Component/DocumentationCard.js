import React from 'react';

import ChildLayout from '../../../Components/ChildLayout';

import './DocumentationCard.css';

import META from '../source';

import { Card, FormElements } from 'react-blended-components';

class DocumentationCard extends React.Component {
  renderDemo = () => (
    <div className="row">
      <div className="col-12">
        <Card header="Lorem ipsum" footer="Lorem ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum erat ex, ac pretium elit facilisis sed. Sed ligula arcu, commodo quis lectus
          in, mollis venenatis orci. Vivamus ac sollicitudin enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Card>
      </div>
    </div>
  );

  render() {
    return <ChildLayout meta={META(this.renderDemo)} />;
  }
}

export default DocumentationCard;
