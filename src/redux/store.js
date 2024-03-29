import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you', likesCount: 10 },
				{ id: 2, message: "It's my first post", likesCount: 14 },
				{ id: 3, message: "It's my s post", likesCount: 14 },
				{ id: 4, message: "It's my t post", likesCount: 14 },
				{ id: 5, message: "It's my f post", likesCount: 14 }
			],
			newPostText: 'My new Post'
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dmitriy' },
				{ id: 2, name: 'Daria' },
				{ id: 3, name: 'Alexander' },
				{ id: 4, name: 'Tarek' },
				{ id: 5, name: 'Vadim' }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are U?' },
				{ id: 3, message: 'Okey' },
				{ id: 4, message: 'Write me later' },
				//{ id: 5, message: 'Nice' }
			],
			newMessageBody: ""
		},
		sidebar: {
		}
	},
	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;