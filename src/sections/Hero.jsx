function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* The Background Image */}
      <div className="hero-bg">
        <img 
          // src="https://media.istockphoto.com/id/1370782467/photo/shot-of-a-muscular-young-man-exercising-with-a-kettlebell-in-a-gym.jpg?s=612x612&w=0&k=20&c=1dnreYtIX9-4Nmcu8gB47b39Eu_DZd9DI7X0TpjjTdk=" 
          src="https://images.unsplash.com/photo-1728486145245-d4cb0c9c3470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gym background" 
        />
        {/* Dark overlay to make text readable */}
        <div className="hero-overlay"></div>
      </div>

      {/* The Content on top */}
      <div className="container">
        <div className="hero-content-box">
          <h1>
            WE ARE APEX. <br />
            OUR MISSION IS <br />
            YOUR STRENGTH.
          </h1>
          <p>
            Join Apex Fitness and achieve your fitness goals
            with expert coaching and structured training.
          </p>
          <button className="join-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;