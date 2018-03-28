/*
 * We are ignoring this line because this 'example code' is an exception.
 * We don't want this module to have react as a dependency.
 * Do not ignore this rule in your own projects.
 */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
/* eslint-enable import/no-extraneous-dependencies */

function Button({
    hidden = false,
}) {
    if (hidden) {
        return null;
    }

    return (
        <button>
            Click me!
        </button>
    );
}

class HiddenButton extends Component {
    constructor(props) {
        super(props);

        this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
        return this.props.greeting;
    }

    render() {
        return (
            <Button
                hidden
                onClick={this.sayHello}
            />
        );
    }
}

export default { HiddenButton };
