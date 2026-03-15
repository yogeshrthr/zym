function Visit() {
  return (
<section id="visit" className="container my-5">
  {/* visit */}
  <div className="row g-0 overflow-hidden rounded-lg shadow"> 
    {/* Left Half: Map (6 columns) */}
    <div className="col-md-6 p-0">
      <div className="h-100" style={{ minHeight: "450px" }}>
        <iframe
          title="Google Map"
          // Replace this URL with your actual Google Maps Embed link
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.08639017658!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1631234567890"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    {/* Right Half: Form (6 columns) */}
    <div className="col-md-6 bg-white p-5 d-flex align-items-center">
      <div className=" w-100">
        <h2 className="fw-bold mb-3">VISIT US IN DOWNTOWN</h2>
        <p className="mb-1 text-muted">125 Address, Downtown</p>
        <p className="mb-4 text-muted">(505) 233-6800</p>

        <form className="d-flex flex-column gap-3">
          <input className="form-control" placeholder="Name" />
          <input className="form-control" type="email" placeholder="Email" />
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-dark btn-lg mt-2">Send Message</button>
        </form>
      </div>
    </div>
  </div>

  
</section>
  );
}

export default Visit;