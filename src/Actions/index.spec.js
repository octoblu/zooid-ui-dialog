import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import Actions from './'

chai.use(chaiEnzyme())

describe('<Actions />', () => {
  it('should render children when passed in as prop', () => {
    const sut = shallow(<Actions><h1>Small Actions</h1></Actions>)
    expect(sut).to.contain(<h1>Small Actions</h1>)
  })
})
