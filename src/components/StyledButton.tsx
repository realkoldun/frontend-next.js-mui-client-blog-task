import styles from '@/styles/button.module.scss';

interface StyledButtonProps {
    text: string;
}

export default function StyledButton({ text }: StyledButtonProps) {
    return <button className={styles.button}>{text}</button>;
}
