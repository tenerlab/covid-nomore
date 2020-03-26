export const isRemoteDebuggingEnabled = () =>
  typeof DedicatedWorkerGlobalScope !== 'undefined'; // https://stackoverflow.com/a/50377644/3337236
