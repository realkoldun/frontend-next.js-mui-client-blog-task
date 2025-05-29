import { MouseEvent } from 'react';

import styles from './button.module.scss';

interface StyledButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    submit?: boolean;
    disabled?: boolean;
}

export default function StyledButton(props: StyledButtonProps) {
    const { text, onClick, disabled, submit } = props;
    return (
        <button
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            className={styles.button}
            disabled={disabled}
        >
            {text}
        </button>
    );
}
