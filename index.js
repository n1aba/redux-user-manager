import 'babel-polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './components/reducers/reducer.js'
import UserManager from './components/userManager.js'

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

render(
	(<Provider store={store}>
  		<UserManager/>
    </Provider>)
  , document.getElementById('root')
)
