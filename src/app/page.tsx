// src/app/page.tsx
import Home from './components/layouts/Home/Home';
import { fetchUsers } from './services/userService';

export default async function HomePage() {
  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  const users = await fetchUsers(endpoint);
  return <Home users={users} />;
}
