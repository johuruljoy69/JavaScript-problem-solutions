const dialogButtons = document.querySelectorAll('[data-target]');
const dialogs = document.querySelectorAll('.dialog');

dialogButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetDialogId = button.getAttribute('data-target');
        const targetDialog = document.getElementById(targetDialogId);

        if (targetDialog) {
            dialogs.forEach(dialog => {
                dialog.style.display = 'none';
            });

            targetDialog.style.display = 'block';
        }
    });
});

dialogs.forEach(dialog => {
    const confirmButton = dialog.querySelector('.confirmBtn');
    const cancelButton = dialog.querySelector('.cancelBtn');
    const deleteButton = dialog.querySelector('.deleteBtn');

    if (confirmButton) {
        confirmButton.addEventListener('click', () => {
            // Add your confirm logic here
            dialog.style.display = 'none';
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            dialog.style.display = 'none';
        });
    }
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            dialog.style.display = 'none';
        });
    }
});