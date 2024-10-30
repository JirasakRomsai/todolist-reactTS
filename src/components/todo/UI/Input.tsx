import { FC, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import classes from './Input.module.scss';

export interface InputForwardRefProps {
	getValue: () => string | undefined;
	setValue: (value: string) => void;
}

interface InputProps {
	placeHolder: string;
}

const Input = forwardRef<InputForwardRefProps, InputProps>(({ placeHolder, ...props }, ref) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useImperativeHandle(ref, () => ({
		getValue() {
			return textareaRef.current ? textareaRef.current.value : '';
		},
		setValue(value: string) {
			if (textareaRef.current) {
				textareaRef.current.value = value;
			}
		},
	}));

	useEffect(() => {
		const handleInput = () => {
			if (textareaRef.current) {
				textareaRef.current.style.height = 'auto';
				textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
			}
		};

		const currentTextarea = textareaRef.current;

		if (currentTextarea) {
			currentTextarea.addEventListener('input', handleInput);
			handleInput();
		}

		return () => {
			if (currentTextarea) {
				currentTextarea.value = '';
				currentTextarea.removeEventListener('input', handleInput);
			}
		};
	}, []);

	return (
		<div className='h-full'>
			<textarea ref={textareaRef} placeholder={placeHolder} className={classes.input} rows={1} />
		</div>
	);
});

export default Input;
