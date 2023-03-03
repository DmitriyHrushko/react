const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
				{ id: 5, message: 'Nice' }
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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({ id: 6, message: body });
			this._callSubscriber(this._state);
		}
	}
}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewActionPostCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;  