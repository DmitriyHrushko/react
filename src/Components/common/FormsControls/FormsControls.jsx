import React from 'react';
import { Field } from 'redux-form';
import s from '../FormsControls/FormsControls.module.css';

const FormsControl = ({ input, meta: { touched, error }, child, children, ...props }) => {
	const hasError = error && touched;
	return (
		<div className={s.formControl + ' ' + (hasError ? s.error : '')}>
			<div>{children}</div>
			{hasError && <span>{error}</span>}
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

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
	<div>
		<Field validate={validators} name={name} placeholder={placeholder} component={component} {...props} /> {text}
	</div>
);
