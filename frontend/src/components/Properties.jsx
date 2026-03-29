const PROPERTIES = [
    { id: 1, title: "Modern Downtown Loft", price: "$485,000", location: "Manhattan, New York", beds: 2, baths: 2, sqft: 1200, type: "Apartment", tag: "For Sale", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
    { id: 2, title: "Suburban Family Home", price: "$720,000", location: "Naperville, Illinois", beds: 4, baths: 3, sqft: 2800, type: "House", tag: "New", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
    { id: 3, title: "Beachfront Villa", price: "$1,250,000", location: "Malibu, California", beds: 5, baths: 4, sqft: 4100, type: "Villa", tag: "Featured", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
    { id: 4, title: "City View Penthouse", price: "$980,000", location: "Chicago, Illinois", beds: 3, baths: 2, sqft: 2100, type: "Penthouse", tag: "For Sale", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80" },
    { id: 5, title: "Mediterranean style villa", price: "$785,000", location: "Villamartín, Spain", beds: 4, baths: 4, sqft: 1500, type: "Villa", tag: "For Sale", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, title: "Luxurious swimming pool", price: "$520,000", location: "CRD Gardenia, Road, Velgaon, Maharashtra, India", beds: 4, baths: 3, sqft: 2800, type: "House", tag: "New", img: "https://images.unsplash.com/photo-1711114378532-bab7d55311f3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, title: "Luxurious tropical themed", price: "$1,750,000", location: "CRD Gardenia, Road, Velgaon, Maharashtra, India", beds: 5, baths: 4, sqft: 4100, type: "Villa", tag: "Featured", img: "https://images.unsplash.com/photo-1711114378455-b1f479d94a19?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, title: "Suburban Family Home", price: "$720,000", location: "Naperville, Illinois", beds: 4, baths: 3, sqft: 2800, type: "House", tag: "New", img: "https://images.unsplash.com/photo-1711114377434-5ea6f68ad0c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, title: "Exterior Pool Side Perspective", price: "$250,000", location: "San Remigio, Cebu, Philippines", beds: 5, baths: 4, sqft: 4100, type: "Villa", tag: "Featured", img: "https://images.unsplash.com/photo-1734310137869-c48afc7fc0ab?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, title: "Swimming pool villa", price: "$450,000", location: "Sri Lanka", beds: 5, baths: 4, sqft: 4100, type: "Villa", tag: "Featured", img: "https://images.unsplash.com/photo-1743525922686-badbeac16a34?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Properties() {
    return (
        <section className="section" id="properties">
            <div className="properties-header">
                <div><p className="section-label">Our Listings</p><h2 className="section-title" style={{ marginBottom: 0 }}>Featured Properties</h2></div>
                <button className="btn-ghost">View All Listings →</button>
            </div>
            <div className="properties-grid">
                {PROPERTIES.map(p => (
                    <div className="prop-card" key={p.id}>
                        <div className="prop-img-wrap">
                            <img src={p.img} alt={p.title} />
                            <span className={`prop-tag${p.tag === "New" ? " new" : p.tag === "Featured" ? " featured" : ""}`}>{p.tag}</span>
                        </div>
                        <div className="prop-body">
                            <p className="prop-type">{p.type}</p>
                            <h3 className="prop-title">{p.title}</h3>
                            <p className="prop-location">📍 {p.location}</p>
                        </div>
                        <div className="prop-meta">
                            <div className="prop-meta-item">🛏 <span>{p.beds}</span> Beds</div>
                            <div className="prop-meta-item">🚿 <span>{p.baths}</span> Baths</div>
                            <div className="prop-meta-item">📐 <span>{p.sqft.toLocaleString()}</span> sqft</div>
                        </div>
                        <div className="prop-footer">
                            <span className="prop-price">{p.price}</span>
                            <button className="btn-view">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}