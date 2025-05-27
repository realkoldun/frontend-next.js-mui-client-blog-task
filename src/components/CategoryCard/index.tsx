import Image from 'next/image';
import { useTranslations } from 'use-intl';

import styles from './categoryCard.module.scss';

import { imageConfig } from '@/components/CategoryCard/config';
import { Categories } from '@/types';

interface CategoryCardProps {
    id: string;
    isSelected: boolean;
    title: Categories;
}

export default function CategoryCard(props: CategoryCardProps) {
    const { title, isSelected } = props;
    const t = useTranslations('Categories');

    return (
        <section
            className={isSelected ? styles.selectedSection : styles.section}
        >
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image
                        src={t(`${title}.imgUrl`)}
                        alt={t(`${title}.title`)}
                        {...imageConfig}
                    />
                </div>
                <p className={styles.title}>{t(`${title}.title`)}</p>
                <p className={styles.description}>
                    {t(`${title}.description`)}
                </p>
            </div>
        </section>
    );
}
