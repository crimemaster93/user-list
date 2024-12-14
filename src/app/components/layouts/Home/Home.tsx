'use client'
import { useState, useEffect } from 'react';
import UserList from '../../modules/UserList/UserList';
import UserDetails from '../../modules/UserDetails/UserDetails';
import ActionPanel from '../../modules/ActionPanel/ActionPanel';
import styles from './Home.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  users: User[];
}

const Home: React.FC<Props> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'profile' | 'contact'>('profile');

  useEffect(()=>{
    setSelectedUser(users[0]);
    setActiveTab('profile')
  },[]);

  return (
    <div className={styles.container}>
      <UserList
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setActiveTab={setActiveTab}
      />
      <UserDetails
        selectedUser={selectedUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ActionPanel />
    </div>
  );
};

export default Home;
