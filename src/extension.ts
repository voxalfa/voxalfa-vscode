import { ExtensionContext } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  Executable,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(_context: ExtensionContext) {
  const command = "voxalfa-ls";

  const run: Executable = {
    command: command,
    args: [],
  };

  const serverOptions: ServerOptions = {
    run,
    debug: run,
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "voxalfa" }],
  };

  client = new LanguageClient(
    "voxalfa_ls",
    "Voxalfa Language Server",
    serverOptions,
    clientOptions,
  );

  client.start();
}

export function deactivate() {
  if (!client) {
    return undefined;
  }

  return client.stop();
}
