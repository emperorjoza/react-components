import React, { useState } from 'react';
import { Bell, ThumbsUp, Search, X } from 'lucide-react';

// Styles for components
const styles = {
  container: {
    padding: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '16px',
    marginBottom: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    marginBottom: '16px',
  },
  // Add more styles as needed
};

// 1. Notification Banner Component
const NotificationBanner = ({ message, onClose }) => {
  const bannerStyle = {
    backgroundColor: '#EFF6FF',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  return (
    <div style={bannerStyle}>
      <Bell size={20} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold' }}>Notification</div>
        <div>{message}</div>
      </div>
      <button 
        onClick={onClose}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <X size={20} />
      </button>
    </div>
  );
};

// 2. Search Bar Component
const SearchBar = ({ onSearch }) => {
  const searchStyle = {
    position: 'relative',
    marginBottom: '16px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 36px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
  };

  return (
    <div style={searchStyle}>
      <Search style={iconStyle} size={16} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

// 3. Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    const baseStyle = {
      padding: '4px 12px',
      borderRadius: '16px',
      fontSize: '14px',
      fontWeight: '500',
      display: 'inline-block',
    };

    const colors = {
      active: { background: '#DCF7E3', color: '#166534' },
      pending: { background: '#FEF3C7', color: '#92400E' },
      inactive: { background: '#FEE2E2', color: '#991B1B' },
    };

    return { ...baseStyle, ...colors[status.toLowerCase()] };
  };

  return (
    <span style={getStatusStyle()}>
      {status}
    </span>
  );
};

// 4. Like Counter Component
const LikeCounter = () => {
  const [likes, setLikes] = useState(0);

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
  };

  return (
    <button
      onClick={() => setLikes(prev => prev + 1)}
      style={buttonStyle}
    >
      <ThumbsUp size={16} color={likes > 0 ? '#3B82F6' : '#666'} />
      <span>{likes} Likes</span>
    </button>
  );
};

// 5. Progress Bar Component
const ProgressBar = ({ progress }) => {
  const containerStyle = {
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: '9999px',
    height: '10px',
    overflow: 'hidden',
  };

  const fillStyle = {
    width: `${Math.min(Math.max(progress, 0), 100)}%`,
    backgroundColor: '#3B82F6',
    height: '100%',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <div style={fillStyle} />
    </div>
  );
};

// 6. User Card Component
const UserCard = ({ name, role }) => {
  const cardStyle = {
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    background: 'white',
  };

  const avatarStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '16px',
    fontSize: '20px',
  };

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={avatarStyle}>
          {name.charAt(0)}
        </div>
        <div>
          <div style={{ fontWeight: '500' }}>{name}</div>
          <div style={{ color: '#666', fontSize: '14px' }}>{role}</div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ComponentShowcase = () => {
  const [showNotification, setShowNotification] = useState(true);
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Component Showcase</h1>
      
      {showNotification && (
        <NotificationBanner
          message="Welcome to the component showcase!"
          onClose={() => setShowNotification(false)}
        />
      )}
      
      <SearchBar onSearch={(value) => console.log('Searching:', value)} />
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={{ marginBottom: '16px' }}>Status Indicators</h2>
          <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
            <StatusBadge status="Active" />
            <StatusBadge status="Pending" />
            <StatusBadge status="Inactive" />
          </div>
        </div>
        
        <div style={styles.card}>
          <h2 style={{ marginBottom: '16px' }}>Engagement</h2>
          <LikeCounter />
        </div>
      </div>
      
      <div style={styles.card}>
        <h2 style={{ marginBottom: '16px' }}>Progress Tracking</h2>
        <ProgressBar progress={75} />
      </div>
      
      <div style={styles.grid}>
        <UserCard
          name="John Doe"
          role="Software Engineer"
        />
        <UserCard
          name="Jane Smith"
          role="Product Designer"
        />
      </div>
    </div>
  );
};

export default ComponentShowcase;