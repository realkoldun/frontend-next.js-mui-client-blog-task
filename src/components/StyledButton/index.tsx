import { MouseEvent } from 'react';

import styles from './button.module.scss';

interface StyledButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function StyledButton({ text, onClick }: StyledButtonProps) {
    return (
        <button onClick={onClick} className={styles.button}>
            {text}
        </button>
    );
}
