import _ from 'lodash'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'

import Dialog from './'

chai.use(chaiEnzyme())

describe('<Dialog />', () => {
  it('should render nothing when show is falsy', () => {
    const sut = shallow(<Dialog><div className="unique">Boom!</div></Dialog>)
    expect(sut).to.be.empty
  });


  describe('when show is true', () => {
    it('should adopt the className passed in as prop', () => {
      const sut = shallow(<Dialog show={true} className="I-AM-GROOT" />)
      expect(sut).to.have.className('I-AM-GROOT')
    })

    it('should render children when passed in as prop', () => {
      const sut = shallow(<Dialog show={true}><div className="unique"/></Dialog>)
      expect(sut).to.contain(<div className="unique" />)
    });
  })

  // width [ SMALL, MEDIUM, LARGE, ]
})
