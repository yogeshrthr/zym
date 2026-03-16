import Stats from "../sections/client/Stats";
import QRCodePass from "../sections/client/QRCodePass";

function ClientDashboard() {
  return (
    <div className="container-fluid px-4 py-4">
      <div className="row g-4">

        <div className="col-12 col-lg-4">
          <Stats />
        </div>

        <div className="col-12 col-lg-8 d-flex justify-content-center align-items-start">
          <QRCodePass userId="USER123" status="ACTIVE" />
        </div>

      </div>
    </div>
  );
}

export default ClientDashboard;