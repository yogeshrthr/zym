function Stats() {
  return (
    <div className="d-flex flex-column gap-4">

      {/* Quick Stats Card */}
      <div className="af-card p-4">
        <p className="section-label mb-3">QUICK STATS</p>
        <div className="d-flex gap-4">
          <div className="text-center">
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle cx="40" cy="40" r="32" fill="none"
                stroke="rgba(30,167,255,0.1)" strokeWidth="6"/>
              <circle cx="40" cy="40" r="32" fill="none"
                stroke="#1ea7ff" strokeWidth="6"
                strokeDasharray="201" strokeDashoffset="80"
                strokeLinecap="round" transform="rotate(-90 40 40)"/>
              <text x="40" y="45" textAnchor="middle"
                fill="white" fontSize="13" fontWeight="700"
                fontFamily="Rajdhani, sans-serif">12/30</text>
            </svg>
            <small className="stat-label">DAYS ATTENDED</small>
          </div>
          <div className="text-center">
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle cx="40" cy="40" r="32" fill="none"
                stroke="rgba(30,167,255,0.1)" strokeWidth="6"/>
              <circle cx="40" cy="40" r="32" fill="none"
                stroke="#1ea7ff" strokeWidth="6"
                strokeDasharray="201" strokeDashoffset="160"
                strokeLinecap="round" transform="rotate(-90 40 40)"/>
              <text x="40" y="45" textAnchor="middle"
                fill="white" fontSize="16" fontWeight="700"
                fontFamily="Rajdhani, sans-serif">5</text>
            </svg>
            <small className="stat-label">ACTIVE STREAK</small>
          </div>
        </div>
      </div>

      {/* Next Class Card */}
      <div className="af-card p-4">
        <p className="section-label mb-2">NEXT CLASS</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="class-title">HIIT BLAST</h5>
            <p className="class-location mb-2">Studio B, 5:30 PM</p>
            <span className="today-badge">Today</span>
          </div>
          <img
            src="https://i.pravatar.cc/60?img=47"
            alt="instructor"
            style={{
              width: '54px', height: '54px',
              borderRadius: '12px', objectFit: 'cover',
              border: '2px solid rgba(30,167,255,0.35)'
            }}
          />
        </div>
      </div>

      {/* Workout Goals Card */}
      <div className="af-card p-4">
        <p className="section-label mb-3">WORKOUT GOALS</p>
        {[
          { label: 'Cardio',      val: 70, color: '#1ea7ff' },
          { label: 'Strength',    val: 45, color: '#2ecc71' },
          { label: 'Flexibility', val: 30, color: '#f39c12' },
        ].map(g => (
          <div key={g.label} className="goal-row">
            <div className="d-flex justify-content-between mb-1">
              <small style={{ color: '#8aafc8', fontSize: '12px' }}>{g.label}</small>
              <small style={{ color: g.color,   fontSize: '12px' }}>{g.val}%</small>
            </div>
            <div className="af-goal-track">
              <div className="af-goal-fill" style={{ width: `${g.val}%`, background: g.color }} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Stats;