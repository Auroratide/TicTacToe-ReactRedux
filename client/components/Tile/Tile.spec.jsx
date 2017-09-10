import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tile from './Tile';

describe('<Tile />', () => {
  const tile = () => shallow(<Tile />);

  it('should render', () => {
    expect(tile()).to.have.length(1);
  });
});
