import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  const app = () => shallow(<App />);

  it('should render', () => {
    expect(app()).to.have.length(1);
  });
});
