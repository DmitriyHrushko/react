import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let posts = [
		{ id: 1, message: 'Hi, how are you', likesCount: 10 },
		{ id: 2, message: "It's my first post", likesCount: 14 },
		{ id: 3, message: "It's my s post", likesCount: 14 },
		{ id: 4, message: "It's my t post", likesCount: 14 },
		{ id: 5, message: "It's my f post", likesCount: 14 },
	];
	const postsElement = posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add</button>
				</div>
			</div>
			<div className={s.posts}>{postsElement}</div>
		</div>
	);
};
export default MyPosts;
