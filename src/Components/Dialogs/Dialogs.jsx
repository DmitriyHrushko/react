import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to="/dialogs/1">First</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Second</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Third</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Fourth</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>hi</div>
				<div className={s.message}>hi</div>
				<div className={s.message}>hi</div>
			</div>
		</div>
	);
};

export default Dialogs;
