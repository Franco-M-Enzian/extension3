import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "extension3" is now active!');

	const disposable = vscode.commands.registerCommand('extension3.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from extension3!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
