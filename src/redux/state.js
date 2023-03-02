let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you', likesCount: 10 },
			{ id: 2, message: "It's my first post", likesCount: 14 },
			{ id: 3, message: "It's my s post", likesCount: 14 },
			{ id: 4, message: "It's my t post", likesCount: 14 },
			{ id: 5, message: "It's my f post", likesCount: 14 }
		]
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
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
}
export default state;