import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import Header from './'

chai.use(chaiEnzyme())

describe('<Header />', () => {
  it('should render title when passed in as prop', () => {
    const sut = shallow(<Header title="I am a little teapot" />)
    expect(sut).to.contain("I am a little teapot")
  });

  it('should render children when passed in as prop', () => {
    const sut = shallow(<Header><h1>Small Header</h1></Header>)
    expect(sut).to.contain(<h1>Small Header</h1>)
  })
})
