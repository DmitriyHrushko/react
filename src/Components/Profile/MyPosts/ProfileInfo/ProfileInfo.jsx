import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../preloader/Preloader';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			{/*<img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="" />*/}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava + description
			</div>
		</div>
	);
};
export default ProfileInfo;
