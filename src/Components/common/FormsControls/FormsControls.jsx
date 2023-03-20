import React from 'react';
import s from '../FormsControls/FormsControls.module.css';

const FormsControl = ({ input, meta, child, ...props }) => {
	const hasError = meta.error && meta.touched;
	return (
		<div className={s.formControl + ' ' + (hasError ? s.error : '')}>
			<div>{props.children}</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormsControl {...props}>
			<textarea {...restProps} {...input} />
		</FormsControl>
	);
};
export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormsControl {...props}>
			<input {...restProps} {...input} />
		</FormsControl>
	);
};
