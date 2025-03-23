import { useEffect, useState } from 'react';
import { useAuth } from '../../store/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import { Plus, Search, User, LayoutGrid, FileText } from 'lucide-react';

import './Dashboard.css';

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      void navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('my-forms');

  const myForms = [
    {
      id: 1,
      title: 'Customer Feedback',
      updatedAt: '2 days ago',
      responses: 24,
      isPublic: false,
    },
    {
      id: 2,
      title: 'Event Registration',
      updatedAt: '1 week ago',
      responses: 156,
      isPublic: true,
    },
    {
      id: 3,
      title: 'Product Survey',
      updatedAt: '3 days ago',
      responses: 78,
      isPublic: true,
    },
    {
      id: 4,
      title: 'Job Application',
      updatedAt: 'Just now',
      responses: 5,
      isPublic: false,
    },
  ];

  const communityForms = [
    {
      id: 101,
      title: 'Restaurant Review',
      author: 'Sarah K.',
      likes: 245,
      responses: 1204,
    },
    {
      id: 102,
      title: 'Travel Experience',
      author: 'Miguel L.',
      likes: 189,
      responses: 876,
    },
    {
      id: 103,
      title: 'Book Recommendation',
      author: 'Priya M.',
      likes: 132,
      responses: 543,
    },
    {
      id: 104,
      title: 'Fitness Goals',
      author: 'Alex T.',
      likes: 98,
      responses: 321,
    },
    {
      id: 105,
      title: 'Movie Ratings',
      author: 'Jordan B.',
      likes: 76,
      responses: 210,
    },
  ];

  const filteredMyForms = myForms.filter((form) =>
    form.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCommunityForms = communityForms.filter(
    (form) =>
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <p>Manage your forms and discover community templates</p>
        </div>
        <div className="dashboard-actions">
          <a href="/profile" className="profile-button">
            <User className="icon" />
          </a>
          <a href="/start-project" className="create-button">
            <Plus className="icon" />
            <span>Create Form</span>
          </a>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search forms..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-list">
          <button
            className={`tab-button ${activeTab === 'my-forms' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-forms')}
          >
            <FileText className="tab-icon" />
            My Forms
          </button>
          <button
            className={`tab-button ${activeTab === 'community' ? 'active' : ''}`}
            onClick={() => setActiveTab('community')}
          >
            <LayoutGrid className="tab-icon" />
            From the Community
          </button>
        </div>

        <div
          className={`tab-content ${activeTab === 'my-forms' ? 'active' : ''}`}
        >
          {filteredMyForms.length === 0 ? (
            <div className="empty-state">
              <p>No forms found. Create your first form!</p>
              <a href="/create" className="create-button">
                <Plus className="icon" />
                Create Form
              </a>
            </div>
          ) : (
            <div className="forms-grid">
              {filteredMyForms.map((form) => (
                <div key={form.id} className="form-card">
                  <div className="form-card-header">
                    <div className="form-card-title-row">
                      <h3 className="form-card-title">{form.title}</h3>
                      <span
                        className={`form-badge ${form.isPublic ? 'public' : 'private'}`}
                      >
                        {form.isPublic ? 'Public' : 'Private'}
                      </span>
                    </div>
                    <p className="form-card-subtitle">
                      Updated {form.updatedAt}
                    </p>
                  </div>
                  <div className="form-card-content">
                    <p className="form-responses">{form.responses} responses</p>
                  </div>
                  <div className="form-card-footer">
                    <button className="form-action-button">Edit</button>
                    <button className="form-action-button">View Results</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className={`tab-content ${activeTab === 'community' ? 'active' : ''}`}
        >
          {filteredCommunityForms.length === 0 ? (
            <div className="empty-state">
              <p>No community forms found matching your search.</p>
            </div>
          ) : (
            <div className="forms-grid">
              {filteredCommunityForms.map((form) => (
                <div key={form.id} className="form-card">
                  <div className="form-card-header">
                    <h3 className="form-card-title">{form.title}</h3>
                    <div className="form-card-author">
                      <div className="author-avatar">
                        {form.author.split(' ')[0][0]}
                        {form.author.split(' ')[1]?.[0]}
                      </div>
                      <span>{form.author}</span>
                    </div>
                  </div>
                  <div className="form-card-content">
                    <div className="form-stats">
                      <span>{form.responses} responses</span>
                      <span>{form.likes} likes</span>
                    </div>
                  </div>
                  <div className="form-card-footer">
                    <button className="form-action-button">Preview</button>
                    <button className="form-action-button">Use Template</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
