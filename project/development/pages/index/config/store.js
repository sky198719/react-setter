import {observable,action,makeObservable} from 'mobx'

class store{
	constructor(){
		makeObservable(this)
	}
	@observable title = 'test'
	@action titleChange = (params) => {
		this.title = params
	}
}

export default new store()