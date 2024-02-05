function setItem<T = any>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem<T>(key: string) {
  const value = localStorage.getItem(key);

  if (value) return JSON.parse(value) as T;
}

function clearItem(key: string) {
  localStorage.removeItem(key);
}

export { setItem, getItem, clearItem };
