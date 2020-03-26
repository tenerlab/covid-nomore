import { useCallback } from 'react';

export const useDepCallback = (depCallback, deps) =>
  useCallback(depCallback(deps), deps);
