const appendToScreen = (value) => {
    document.getElementById('screen').value += value;
}

const calculate = () => {
    const screen = document.getElementById('screen');
    if (!screen.value) {
        showToast('Faça alguma operação!');
        return;
    }

    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Erro';
    }
}

const clearScreen = () => {
    document.getElementById('screen').value = '';
}


const showToast = (message) => {
    const toastHTML = `
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Erro</strong>
                <small>1 seg ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>`;

    const toastContainer = document.getElementById('toast-container');
    toastContainer.innerHTML = toastHTML;

    const toastElement = toastContainer.querySelector('.toast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}
