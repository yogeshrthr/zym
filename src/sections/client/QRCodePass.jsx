import { QRCodeCanvas } from "qrcode.react";

function QRCodePass({ userId, status }) {
  const qrValue = `${userId}-${Date.now()}`;

  return (
    <div className="qr-access-pass">
      {/* Logo */}
      <div className="af-qr-logo">AF</div>
      <p className="qr-title-text">QR ACCESS PASS</p>

      {/* QR Code */}
      <div className="qr-glow-box mb-2">
        <QRCodeCanvas value={qrValue} size={160} />
      </div>

      {/* Scan label */}
      <div className="mb-3">
        <span className="scan-label">SCAN AT DOOR</span>
      </div>

      {/* Status */}
      <div className="mb-2">
        <span className={`status-active ${status !== 'ACTIVE' ? 'status-inactive' : ''}`}>
          MEMBER STATUS: {status}
        </span>
      </div>

      {/* Name */}
      <p className="member-name mt-2">JOHN D.</p>

      {/* Footer */}
      <div className="member-footer">
        <span>MEMBER ID</span>
        <span>PLAN: <span className="plan-highlight">ELITE</span></span>
      </div>
    </div>
  );
}

export default QRCodePass;