function setItem<T = any>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem<T>(key: string) {
  const values = localStorage.getItem(key);

  if (values) return JSON.parse(values) as T;
}

export { setItem, getItem };
