import React, { Component } from 'react';

interface IButtonProps {
    hidden: boolean;
    greeting?: () => string;
}

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

class HiddenButton extends Component {
    textInput: HTMLInputElement;

    public render() {
        return (
            <Button
                hidden
            />
        );
    }
}

export { HiddenButton };
