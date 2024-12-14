import React from 'react';
import style from './UserDetails.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface Props {
  selectedUser: User | null;
  activeTab: 'profile' | 'contact';
  setActiveTab: (tab: 'profile' | 'contact') => void;
}

const UserDetails: React.FC<Props> = ({ selectedUser, activeTab, setActiveTab }) => {
  if (!selectedUser) {
    return <p>Select a user to view details.</p>;
  }

  return (
    <div className={style.userDetails}>
      <h3>User Details</h3>
      <div className={style.verticalTabs}>
        <div className={style.tabButtons}>
          <button
            className={activeTab === 'profile' ? style.active : ''}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={activeTab === 'contact' ? style.active : ''}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
        <div className={style.tabContent}>
          {activeTab === 'profile' && (
            <div>
              <p><strong>Name:</strong> {selectedUser?.name}</p>
              <p><strong>Website:</strong> {selectedUser?.website}</p>
            </div>
          )}
          {activeTab === 'contact' && (
            <div>
              <p><strong>Email:</strong> {selectedUser?.email}</p>
              <p><strong>Phone:</strong> {selectedUser?.phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;