// Saves options to chrome.storage
const saveOptions = () => {
    const paramName = document.getElementById('paramName').value;

    chrome.storage.sync.set(
        { paramName: paramName },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                window.close();
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        { paramName: 'nocache' },
        (items) => {
            document.getElementById('paramName').value = items.paramName;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
