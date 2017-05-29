import React from 'react';
import {expect} from 'chai'

import {App} from './App';
import {MainBar} from './components/Main'

import { Table } from 'semantic-ui-react'

import Header from './components/Header'

import {shallow} from 'enzyme'

import store from './store'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App store={store}/>, div);
// });



describe('<Main />', ()=>{
  let wrapper
  beforeEach(()=>{
    wrapper = shallow(<MainBar store={store} />)
  })

  it('have check state on <Main />', ()=>{
    expect(wrapper.state().data).to.be.an('object')
  })

  it('must be Component <MainBar />', ()=>{
    const inst = wrapper.instance()
    expect(inst).to.be.instanceOf(MainBar)
  })

  it('must run handleEdit', ()=>{
    let data = {
      id : 0,
      username : 'zani',
      password : 'admin'
    }
    wrapper.instance().handleEdit(data)
    expect(wrapper.state().open).to.equal(true)
  })

  it('check listPassword', ()=>{
    console.log(wrapper.instance().props.store.getState().passList)
    expect(wrapper.instance().props.store.getState().passList).to.have.length(0)
  })

})