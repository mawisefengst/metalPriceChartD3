import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from  "../redux/store"
import { Provider } from  "react-redux"
import APP_DATA from "../components/DATA"

let initState = {
	currentPatch: 0,
	patchAmount: 20,
	repeatedItem: APP_DATA.slice(0,20),
	showLoadMore : "",
	detailViewId: 0,
	showId :0 
};

let store = configureStore(initState);

render(<Provider store={store}><App/></Provider>, document.getElementById('app'))