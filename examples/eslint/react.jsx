import React from 'react';

function Button({ hidden }) {
    if (hidden) {
        return (
            <button>
                Click me!
            </button>
        );
    }

    return null;
}

Button.defaultProps = {
    hidden: false,
};

function HiddenButton() {
    return (
        <Button
            hidden
        />
    );
}

export default { HiddenButton };
