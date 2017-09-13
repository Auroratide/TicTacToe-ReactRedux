import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Board from '../../client/components/Board';
import td from 'testdouble';

import { mountWithStore, eventually } from './helpers';
import * as API from '../../client/api/tictactoe';

describe('<Board /> Functional', () => {

  before(() => {
    const getTile = td.replace(API, 'getTile');
    td.when(getTile('o', td.matchers.isA(Array))).thenResolve(0);
  });

  it('should perform AI\'s move after player move', () => {
    const board = mountWithStore(<Board />);
    const tiles = board.find('.tile');
    tiles.at(1).simulate('click');

    eventually(() => {
      expect(tiles.at(1).text()).to.contain('x');
      expect(tiles.at(0).text()).to.contain('o');
    });
  });

  after(() => td.reset());
});
