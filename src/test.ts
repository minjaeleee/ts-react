export type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

export type Paginate<T> = {
  data: T[];
  first: number;
  items: number;
  last: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export async function getTodos(): Promise<Paginate<Todo>> {
  const res = await fetch("http://localhost:4000/todos?_page=1&_per_page=25");
  const data: Paginate<Todo> = await res.json()

  return data
}