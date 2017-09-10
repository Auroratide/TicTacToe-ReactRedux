import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Board from './Board';

describe('<Board />', () => {
  const board = () => shallow(<Board />);

  it('should render', () => {
    expect(board()).to.have.length(1);
  });
});
