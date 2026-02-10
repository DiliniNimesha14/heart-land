import React from "react";

const MaintenancePage: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Keyframes for loader animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.container}>
          <div style={styles.logoWrapper}>
            {/* Replace with official Heartland General Trading logo */}
            <img
              src="/logo.png"
              alt="Heartland General Trading Logo"
              style={styles.logo}
            />
          </div>

          <h1 style={styles.heading}>Maintenance in Progress</h1>

          <div style={styles.loader} />

          <p style={styles.text}>
            Even the best websites need a little <strong>“me time.”</strong>
            <br />
            We’re busy adding some new magic behind the scenes.
          </p>

          <footer style={styles.footer}>
            © {year} Heartland General Trading. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "20px",
  },
  container: {
    maxWidth: "720px",
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "48px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    borderTop: "6px solid #c62828",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "24px",
  },
  logo: {
    maxWidth: "120px",
    width: "100%",
    height: "auto",
    display: "block",
  },
  heading: {
    color: "#c62828",
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "18px",
  },
  text: {
    color: "#596063",
    fontSize: "18px",
    lineHeight: 1.6,
    margin: 0,
  },
  loader: {
    width: "56px",
    height: "56px",
    margin: "36px auto",
    border: "6px solid #111111",
    borderTop: "6px solid #c62828",
    borderRadius: "50%",
    animation: "spin 1.2s linear infinite",
  },
  footer: {
    marginTop: "36px",
    fontSize: "14px",
    color: "#596063",
  },
};

export default MaintenancePage;