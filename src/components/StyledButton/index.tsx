import { MouseEvent } from 'react';

import styles from './button.module.scss';

interface StyledButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    submit?: boolean;
}

export default function StyledButton({
    submit,
    text,
    onClick,
}: StyledButtonProps) {
    return (
        <button
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            className={styles.button}
        >
            {text}
        </button>
    );
}
