import React, { Component } from 'react';

interface IButtonProps {
    hidden: boolean;
    greeting?: () => string;
}

function Button({ hidden = false, greeting }: IButtonProps) {
    if (hidden) {
        return null;
    }

    return (
        <button onClick={greeting}>
            Click me
        </button>
    );
}

class HiddenButton extends Component {
    public render() {
        return (
            <Button
                hidden
                greeting={this.sayHello}
            />
        );
    }

    private sayHello() {
        return 'Hello';
    }
}

export { HiddenButton };
