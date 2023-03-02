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
			]
		},
		sidebar: {
		}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('state changed')
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export default store; 