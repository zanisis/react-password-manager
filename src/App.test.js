import React from 'react';
import {expect} from 'chai'
import {App} from './App';
import {MainBar} from './components/Main'
import {Compku} from './components/Compku'
import { Table } from 'semantic-ui-react'

import Header from './components/Header'

import {shallow} from 'enzyme'

import store from './store'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App store={store}/>, div);
// });



describe('<Main />', ()=>{
  it('have children of <header>', ()=>{
    const wrapper = shallow(<MainBar store={store}  />)
    expect(wrapper.containsAllMatchingElements([
      <h1>A</h1>
    ])).to.equal(true)
  })

  it('have check state on <Main />', ()=>{
    const wrapper = shallow(<MainBar store={store} />)
    console.log(wrapper.state());
    expect(wrapper.state().data).to.be.an('object')
  })

  it('have check context', ()=>{
    const wrapper = shallow(<MainBar store={store} />)
    console.log(wrapper.context());
  })
})

