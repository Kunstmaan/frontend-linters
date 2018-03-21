import React from 'react';

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

function HiddenButton() {
    return (
        <Button
            hidden
        />
    );
}

export default { HiddenButton };
