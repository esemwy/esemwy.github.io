if ((location.hostname != 'localhost') && (location.protocol !== 'https:')) {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
