import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				followed: true,
				photoUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSHvVFzW-lTwbSThX_--UHW5mP08bN2labw&usqp=CAU',
				name: 'Dmitriy',
				status: 'Admin',
				location: { city: 'Sumy', country: 'Ukraine' },
			},
			{
				id: 2,
				followed: true,
				photoUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSHvVFzW-lTwbSThX_--UHW5mP08bN2labw&usqp=CAU',
				name: 'Daria',
				status: 'Admin',
				location: { city: 'Lugansk', country: 'Ukraine' },
			},
			{
				id: 3,
				followed: false,
				photoUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSHvVFzW-lTwbSThX_--UHW5mP08bN2labw&usqp=CAU',
				name: 'Vadim',
				status: 'Admin',
				location: { city: 'Trostyanets', country: 'Ukraine' },
			},
			{
				id: 4,
				followed: false,
				photoUrl:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSHvVFzW-lTwbSThX_--UHW5mP08bN2labw&usqp=CAU',
				name: 'Tarek',
				status: 'Admin',
				location: { city: 'Krakow', country: 'Poland' },
			},
		]);
	}
	return (
		<div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={s.userPhoto} />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.city}</div>
							<div>{u.location.country}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};
export default Users;
