import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter,Route} from 'react-router-dom'
import {Provider} from 'mobx-react'

import Home from './mods/home/index.jsx'
import store from './config/store.js'

import './../../assets/css/global.scss'

ReactDom.render(
	(
		<Provider store={store}>
			<HashRouter>
				<Route path="/" exact component={Home}></Route>
				<Route path="/home" component={Home}></Route>
			</HashRouter>
		</Provider>
	),
	document.getElementById('index')
)