import { useState, useEffect } from "react";

const API = "http://localhost:5000/api";
const DEFAULT_IMG = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80";

export default function PropertyDetails({ property, setPage }) {
  const [details, setDetails] = useState(property || null);
  const [loading, setLoading] = useState(!property);

  useEffect(() => {
    if (property?.id) {
      setLoading(true);
      fetch(`${API}/properties/${property.id}`)
        .then((r) => r.json())
        .then((data) => { setDetails(data.property); setLoading(false); })
        .catch(() => setLoading(false));
    }
  }, [property]);

  const statusColor = {
    available: { bg: "#d1fae5", color: "#065f46" },
    sold: { bg: "#fee2e2", color: "#991b1b" },
    rented: { bg: "#ede9fe", color: "#5b21b6" },
  };

  if (loading) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", color: "#94a3b8", fontSize: 18 }}>
      Duke ngarkuar...
    </div>
  );

  if (!details) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif", color: "#94a3b8" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏠</div>
        <p>Prona nuk u gjet.</p>
        <button onClick={() => setPage("properties")} style={{ marginTop: 12, padding: "10px 24px", background: "#2563eb", color: "white", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 600 }}>
          Kthehu
        </button>
      </div>
    </div>
  );

  const sc = statusColor[details.status] || statusColor.available;

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Back button */}
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 40px 0" }}>
        <button onClick={() => setPage("properties")}
          style={{ background: "none", border: "none", color: "#2563eb", fontWeight: 600, fontSize: 14, cursor: "pointer", padding: 0 }}>
          ← Kthehu te lista
        </button>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "20px 40px 60px" }}>

        {/* Image */}
        <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 28, height: 420 }}>
          <img
            src={details.image_url || DEFAULT_IMG}
            alt={details.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.src = DEFAULT_IMG; }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>

          {/* Left — Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ background: "#e0f2fe", color: "#0369a1", borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 600 }}>{details.type}</span>
              <span style={{ background: sc.bg, color: sc.color, borderRadius: 8, padding: "4px 12px", fontSize: 13, fontWeight: 600 }}>{details.status}</span>
            </div>

            <h1 style={{ margin: "0 0 8px", fontSize: 28, fontWeight: 700, color: "#1e293b" }}>{details.title}</h1>
            <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 15 }}>📍 {details.location}</p>

            <div style={{ background: "white", borderRadius: 12, padding: "20px 24px", border: "1px solid #e2e8f0", marginBottom: 20 }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}>Pershkrimi</h3>
              <p style={{ margin: 0, color: "#475569", fontSize: 15, lineHeight: 1.6 }}>
                {details.description || "Nuk ka pershkrim per kete prone."}
              </p>
            </div>

            <div style={{ background: "white", borderRadius: 12, padding: "20px 24px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}>Detajet</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["Tipi", details.type],
                  ["Statusi", details.status],
                  ["Lokacioni", details.location],
                  ["Postuar me", new Date(details.created_at).toLocaleDateString("sq-AL")],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p style={{ margin: "0 0 2px", fontSize: 12, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase" }}>{label}</p>
                    <p style={{ margin: 0, fontSize: 14, color: "#1e293b", fontWeight: 600 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Price + Seller */}
          <div>
            <div style={{ background: "white", borderRadius: 16, padding: 24, border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <p style={{ margin: "0 0 4px", fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>CMIMI</p>
              <p style={{ margin: "0 0 20px", fontSize: 32, fontWeight: 700, color: "#2563eb" }}>
                Euro {Number(details.price).toLocaleString()}
              </p>
              <button style={{ width: "100%", padding: "12px 0", background: "#2563eb", color: "white", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 10 }}
                onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
                onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
                onClick={() => setPage && setPage("dashboard")}
              >
                Kontakto Shitesin
              </button>
              <button style={{ width: "100%", padding: "12px 0", background: "white", color: "#2563eb", border: "1px solid #2563eb", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}
                onClick={() => setPage("properties")}
              >
                Kthehu te Lista
              </button>
            </div>

            {/* Seller info */}
            {details.seller_name && (
              <div style={{ background: "white", borderRadius: 16, padding: 24, border: "1px solid #e2e8f0" }}>
                <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700, color: "#1e293b" }}>Shitesi</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#2563eb" }}>
                    {details.seller_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, color: "#1e293b" }}>{details.seller_name}</p>
                    {details.seller_email && (
                      <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>{details.seller_email}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}