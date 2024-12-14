import styles from './UserList.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  users: User[];
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
  setActiveTab: (tab: 'profile' | 'contact') => void;
}

const UserList: React.FC<Props> = ({ users, selectedUser, setSelectedUser, setActiveTab }) => {
  return (
    <div className={styles.userList}>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li
            key={user?.id}
            className={selectedUser?.id === user?.id ? styles.selected : ''}
            onClick={() => {
              setSelectedUser(user);
              setActiveTab('profile');
            }}
          >
            {user?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
