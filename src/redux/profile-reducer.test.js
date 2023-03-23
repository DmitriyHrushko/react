import React from "react";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


it('length of posts should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator("it-socialNetwork");
	let state = {
		posts: [
			{ id: 1, message: 'Hi, how are you', likesCount: 10 },
			{ id: 2, message: "It's my first post", likesCount: 14 },
			{ id: 3, message: "It's my s post", likesCount: 14 },
			{ id: 4, message: "It's my t post", likesCount: 14 },
			{ id: 5, message: "It's my f post", likesCount: 14 }
		]
	};
	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(6)
});

it('after deleting length of messages decrement', () => {
	// 1. test data
	let action = deletePost(1);
	let state = {
		posts: [
			{ id: 1, message: 'Hi, how are you', likesCount: 10 },
			{ id: 2, message: "It's my first post", likesCount: 14 },
			{ id: 3, message: "It's my s post", likesCount: 14 },
			{ id: 4, message: "It's my t post", likesCount: 14 },
			{ id: 5, message: "It's my f post", likesCount: 14 }
		]
	};
	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(5)
});


