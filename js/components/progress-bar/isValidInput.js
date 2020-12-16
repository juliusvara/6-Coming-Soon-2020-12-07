function isValidInput (selector, data) {
    if (typeof selector !== 'string' || typeof selector === '' || selector.length > 100 || data.length === 0) {
        return false;
    }
    
    if (!Array.isArray(data)) {
        return false;
    }
    return true;
}

export {isValidInput}