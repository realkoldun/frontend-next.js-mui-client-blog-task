import { MouseEvent } from 'react';

import { Button } from '@mui/material';

import * as style from './styled';

interface StyledButtonProps {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    submit?: boolean;
    disabled?: boolean;
    isWide?: boolean;
}

export default function StyledButton(props: StyledButtonProps) {
    const { text, onClick, disabled, submit, isWide } = props;
    return (
        <Button
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
            {...style.button({ isWide })}
            disabled={disabled}
        >
            {text}
        </Button>
    );
}
