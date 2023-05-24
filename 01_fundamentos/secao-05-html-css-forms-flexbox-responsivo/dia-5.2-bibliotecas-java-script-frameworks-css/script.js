window.onload = () => {
    const button = document.querySelector('button[type=submit]');
    button.addEventListener('click', (event) => {
        event.preventDefault();
    });

}