function Pricing() {
  return (
    <section id="membership" className="py-5 text-center" style={{ background: '#0b1d2a' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ color: 'white' }}>
          FIND YOUR FIT. FLEXIBLE PLANS.
        </h2>

        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          
          {/* Card 1: Starter */}
          <div className="col">
            <div className="card h-100 border-0 p-4 shadow-sm" style={{ background: '#122b3d', color: 'white', borderRadius: '15px' }}>
              <div className="card-body">
                <h3 className="h5 opacity-75">Starter</h3>
                <h1 className="display-4 fw-bold my-4">$49<span className="fs-4">/mo</span></h1>
                <button className="btn btn-outline-light w-100 rounded-pill mt-3">Select Plan</button>
              </div>
            </div>
          </div>

          {/* Card 2: Elite (Popular) */}
          <div className="col">
            <div className="card h-100 p-4 shadow-lg" 
                 style={{ 
                   background: '#122b3d', 
                   color: 'white', 
                   borderRadius: '15px', 
                   border: '2px solid #2bc0ff',
                   transform: 'scale(1.05)' // Makes it pop as "Popular"
                 }}>
              <div className="card-body">
                <span className="badge rounded-pill mb-2" style={{ background: '#2bc0ff', color: '#0b1d2a' }}>MOST POPULAR</span>
                <h3 className="h5">Elite</h3>
                <h1 className="display-4 fw-bold my-4" style={{ color: '#2bc0ff' }}>$89<span className="fs-4 text-white">/mo</span></h1>
                <button className="btn w-100 rounded-pill mt-3 text-white" style={{ background: '#1ea7ff' }}>Select Plan</button>
              </div>
            </div>
          </div>

          {/* Card 3: Pro */}
          <div className="col">
            <div className="card h-100 border-0 p-4 shadow-sm" style={{ background: '#122b3d', color: 'white', borderRadius: '15px' }}>
              <div className="card-body">
                <h3 className="h5 opacity-75">Pro</h3>
                <h1 className="display-4 fw-bold my-4">$129<span className="fs-4">/mo</span></h1>
                <button className="btn btn-outline-light w-100 rounded-pill mt-3">Select Plan</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;