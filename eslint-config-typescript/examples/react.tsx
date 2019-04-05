/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
/* eslint-enable import/no-extraneous-dependencies */

interface IButtonProps {
    hidden: boolean;
    greeting?: () => string;
}

function Button({ hidden = false, greeting }: IButtonProps) {
    if (hidden) {
        return null;
    }

    return (
        <button type="button" onClick={greeting}>
            Click me
        </button>
    );
}

class HiddenButton extends Component {
    private HELLO = 'Hello';

    public render() {
        return (
            <Button
                hidden
                greeting={this.sayHello}
            />
        );
    }

    private sayHello() {
        return this.HELLO;
    }
}

export { HiddenButton };
