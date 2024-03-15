//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    // @ts-ignore
    const vscode = acquireVsCodeApi();

    document.querySelector('.login-button')?.addEventListener('click', () => {
        onLoginClicked();
    });
    document.querySelector('.change-settings-button')?.addEventListener('click', () => {
        onChangeSettingsClicked();
    });


    function onLoginClicked() {
        vscode.postMessage({ type: 'loginSelected', value: null });
    }

    function onChangeSettingsClicked() {
        vscode.postMessage({ type: 'changeSettings', value: null });
    }
  
}());


