import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Board from './Board';

describe('<Board />', () => {
  let props;
  const board = () => shallow(<Board {...props} />);

  beforeEach(() => {
    props = {
      board: ['', '', '', '', '', '', '', '', '']
    };
  });

  it('should render', () => {
    expect(board()).to.have.length(1);
  });
});
