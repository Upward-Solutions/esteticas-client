const initialStorage = {
    'token': '',
}

export const setInitialLocalStorage = () => {
    localStorage.setItem('storage_app', JSON.stringify(initialStorage));
}
