import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import Body from './'

chai.use(chaiEnzyme())

describe('<Body />', () => {
  it('should render children when passed in as prop', () => {
    const sut = shallow(<Body><h1>Small Body</h1></Body>)
    expect(sut).to.contain(<h1>Small Body</h1>)
  })
})
