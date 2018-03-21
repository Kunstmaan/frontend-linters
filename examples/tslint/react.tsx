import React from 'react';

interface IButtonProps {
    hidden: boolean;
}

const defaultProps: IButtonProps = {
    hidden: false,
};

function Button({ hidden = false }: IButtonProps) {
    if (hidden) {
        return null;
    }

    return (
        <button>
            Click me
        </button>
    );
}

function HiddenButton() {
    return (
        <Button
            hidden
        />
    );
}

export { HiddenButton };
