export function safeJsonParce<T>(val: unknown): T | null {
  if (typeof val === 'string') {
    try {
      return JSON.parse(val);
    } catch {
      return null;
    }
  }

  return null;
}

