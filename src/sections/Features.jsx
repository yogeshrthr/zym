function Features() {
  return (
    <section id="" className="py-5" style={{ background: '#0b1d2a' }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="text-center p-5 shadow-sm h-100" 
                 style={{ background: '#122b3d', borderRadius: '15px', border: '1px solid #1c3d52' }}>
              <div className="mb-3">
                <i className="bi bi-people text-info fs-1"></i> {/* Icons look great here */}
              </div>
              <h3 className="fw-bold text-white">Community</h3>
              <p className="text-white-50 mt-2">Join a supportive group of like-minded individuals.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="text-center p-5 shadow-sm h-100" 
                 style={{ background: '#122b3d', borderRadius: '15px', border: '1px solid #1c3d52' }}>
              <div className="mb-3">
                <i className="bi bi-award text-info fs-1"></i>
              </div>
              <h3 className="fw-bold text-white">Expertise</h3>
              <p className="text-white-50 mt-2">Learn from certified professionals with years of experience.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="text-center p-5 shadow-sm h-100" 
                 style={{ background: '#122b3d', borderRadius: '15px', border: '1px solid #1c3d52' }}>
              <div className="mb-3">
                <i className="bi bi-graph-up-arrow text-info fs-1"></i>
              </div>
              <h3 className="fw-bold text-white">Results</h3>
              <p className="text-white-50 mt-2">Achieve your fitness goals with proven methodologies.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;