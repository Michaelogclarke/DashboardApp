import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    };
    updateDate();
    const interval = setInterval(updateDate, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Dashboard</h1>
          <div className="date-time">
            <span className="current-date">{currentDate}</span>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          <section className="personal-section">
            <h2>Personal Dashboard</h2>
            <div className="personal-overview">
              <div className="personal-stats">
                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Daily Progress</h3>
                    <div className="stat-icon">
                      <svg width="24" height="24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                  </div>
                  <div className="stat-value">73%</div>
                  <div className="stat-description">Tasks completed today</div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Weekly Goals</h3>
                    <div className="stat-icon">
                      <svg width="24" height="24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                      </svg>
                    </div>
                  </div>
                  <div className="stat-value">8/12</div>
                  <div className="stat-description">Goals achieved</div>
                </div>

                <div className="stat-card">
                  <div className="stat-header">
                    <h3>Streak</h3>
                    <div className="stat-icon">
                      <svg width="24" height="24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="stat-value">14 days</div>
                  <div className="stat-description">Current streak</div>
                </div>
              </div>
            </div>


            <div className="goals-section">
              <h3>Goals & Progress</h3>
              <div className="goals-container">
                <div className="goal-category">
                  <h4>Health & Fitness</h4>
                  <div className="goal-item">
                  <div className="goal-header">
                    <span>Daily Steps</span>
                    <span className="goal-value">8,245 / 10,000</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '82%'}}></div>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-header">
                    <span>Workout Sessions</span>
                    <span className="goal-value">3 / 5 this week</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>

              <div className="goal-category">
                <h4>Learning</h4>
                <div className="goal-item">
                  <div className="goal-header">
                    <span>Reading Progress</span>
                    <span className="goal-value">12 / 24 books</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-header">
                    <span>Online Course</span>
                    <span className="goal-value">7 / 12 modules</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '58%'}}></div>
                  </div>
                </div>
              </div>

              <div className="goal-category">
                <h4>Financial</h4>
                <div className="goal-item">
                  <div className="goal-header">
                    <span>Emergency Fund</span>
                    <span className="goal-value">$8,500 / $15,000</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '57%'}}></div>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-header">
                    <span>Investment Target</span>
                    <span className="goal-value">$24,000 / $30,000</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="habits-tracker">
              <h3>Daily Habits</h3>
              <div className="habits-grid">
                <div className="habit-item completed">
                  <div className="habit-icon">
                    <svg width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <span>Drink 8 glasses of water</span>
                  <div className="habit-status completed">
                    <svg width="16" height="16" fill="#059669" stroke="none">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="habit-item completed">
                  <div className="habit-icon">
                    <svg width="20" height="20" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                  </div>
                  <span>Read for 30 minutes</span>
                  <div className="habit-status completed">
                    <svg width="16" height="16" fill="#059669" stroke="none">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="habit-item">
                  <div className="habit-icon">
                    <svg width="20" height="20" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <span>Meditate</span>
                  <div className="habit-status">
                    <svg width="16" height="16" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <circle cx="8" cy="8" r="7"/>
                    </svg>
                  </div>
                </div>
                <div className="habit-item">
                  <div className="habit-icon">
                    <svg width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <span>Exercise</span>
                  <div className="habit-status">
                    <svg width="16" height="16" fill="none" stroke="#d1d5db" strokeWidth="2">
                      <circle cx="8" cy="8" r="7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tech-section">
            <h2>System Status</h2>

            <div className="deployment-status">
              <h3>Deployments</h3>
              <div className="status-list">
                <div className="status-item">
                  <div className="status-indicator success"></div>
                  <div className="status-content">
                    <p>Production</p>
                    <span className="status-time">v2.1.4 • 2h ago</span>
                  </div>
                  <div className="status-icon">
                    <svg width="16" height="16" fill="#059669" stroke="none">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                </div>

                <div className="status-item">
                  <div className="status-indicator warning"></div>
                  <div className="status-content">
                    <p>Staging</p>
                    <span className="status-time">v2.2.0-beta • 15m ago</span>
                  </div>
                  <div className="status-icon">
                    <svg width="16" height="16" fill="#f59e0b" stroke="none">
                      <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                  </div>
                </div>

                <div className="status-item">
                  <div className="status-indicator success"></div>
                  <div className="status-content">
                    <p>Development</p>
                    <span className="status-time">v2.2.0-dev • 5m ago</span>
                  </div>
                  <div className="status-icon">
                    <svg width="16" height="16" fill="#059669" stroke="none">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="system-metrics">
              <h3>System Health</h3>
              <div className="metric-cards">
                <div className="metric-card">
                  <div className="metric-label">CPU Usage</div>
                  <div className="metric-value">23%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '23%', backgroundColor: '#059669'}}></div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Memory</div>
                  <div className="metric-value">67%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '67%', backgroundColor: '#f59e0b'}}></div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-label">Disk Space</div>
                  <div className="metric-value">41%</div>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: '41%', backgroundColor: '#3b82f6'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-logs">
              <h3>Recent Activity</h3>
              <div className="log-list">
                <div className="log-item">
                  <div className="log-time">14:32</div>
                  <div className="log-message">Deployment successful</div>
                </div>
                <div className="log-item">
                  <div className="log-time">14:15</div>
                  <div className="log-message">Tests passed (47/47)</div>
                </div>
                <div className="log-item">
                  <div className="log-time">13:58</div>
                  <div className="log-message">Build completed</div>
                </div>
                <div className="log-item error">
                  <div className="log-time">13:45</div>
                  <div className="log-message">API rate limit warning</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
