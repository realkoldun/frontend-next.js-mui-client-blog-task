import styles from '@/styles/contentSection.module.scss';
import { PropsWithChildren } from 'react';

export default function ContentSection({ children }: PropsWithChildren) {
    return <section className={styles['content-section']}>{children}</section>;
}
