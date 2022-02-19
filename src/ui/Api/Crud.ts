export interface Crud<T> {
  create: (value: T) => Promise<number>;
  list: () => Promise<T[]>;
  read: (id: number) => Promise<T>;
  update: (value: T) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

export function createCrud<T>(point: string): Crud<T> {
  return {
    async create(value) {
      const resp = await fetch(
        `/api/${point}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ value })
        }
      );
      const id = (await resp.json())?.id;
      if (id) {
        return id;
      } else {
        throw new Error('Missing ID in response.');
      }
    },
    async list() {
      const resp = await fetch(`/api/${point}`);
      return (await resp.json()) as T[];
    },
    async read(id) {
      const resp = await fetch(`/api/${point}/${id}`);
      return (await resp.json()) as T;
    },
    async update(value) {
      await fetch(
        `/api/${point}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ value })
        }
      );
    },
    async delete(id) {
      await fetch(
        `/api/${point}/${id}`,
        {
          method: 'DELETE'
        }
      );
    }

  }
}
