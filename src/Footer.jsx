import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        background: "rgba(16, 212, 16, 0.7)", // translucent green
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: "white",
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.3)",
      }}
    >
      {/* Branding */}
      <h3 style={{ margin: 0, fontWeight: 600 }}>
        Turi’s Loofahs - Naturally soft, sustainably yours.
      </h3>

      {/* Locations */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Galleria Mall, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Village Market, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>The Hub Karen, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>WestGate Mall, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Sarit Mall, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Yaya Center, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Nanyuki Cedar Mall, Kenya</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaMapMarkerAlt />
          <span>Nakuru Westside Mall, Kenya</span>
        </div>
      </div>

      {/* Socials */}
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="https://www.instagram.com/turisloofahs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "1.5rem",
            transition: "transform 0.2s, color 0.2s",
          }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/190443102"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "white",
            fontSize: "1.5rem",
            transition: "transform 0.2s, color 0.2s",
          }}
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Small note */}
      <p style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
        © {new Date().getFullYear()} Turi’s Loofahs. Handmade, natural, and
        sustainable.
      </p>
    </footer>
  );
}

export default Footer;
