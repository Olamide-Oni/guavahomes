import { useLoaderData } from "@remix-run/react";

export default function LatestProperties() {
  const { latestProperties, baseUrl } = useLoaderData();

  if (!latestProperties || latestProperties.length === 0) {
    return <div>No properties found.</div>;
  }

  return (
    <div className="latest-properties">
      <h2>Latest Properties</h2>
      <div className="property-list">
        {latestProperties.map((property) => (
          <div key={property.id} className="property-card">
            <div>
              <img 
                src={`${baseUrl}/${property.image_url[0]}`} 
                alt="property-image" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3>{property.property_type}</h3>
              <p>Price: {property.dollar_buy_price || `₦${property.naira_buy_price?.toLocaleString()}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
