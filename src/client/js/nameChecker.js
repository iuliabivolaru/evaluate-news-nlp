function checkUrl(inputText) {
    let pattern = /^((http|https):\/\/)/;
    return pattern.test(inputText);
}

export { checkUrl }
