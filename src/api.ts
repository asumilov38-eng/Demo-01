// Демонстрационная сборка YVL STORE не использует серверный API.
// Все товары заданы локально в App.tsx, избранное хранится в localStorage.
export const API = '';

export async function request<T>(_path: string, _options?: RequestInit): Promise<T> {
  throw new Error('В демонстрационной версии серверные функции отключены.');
}
