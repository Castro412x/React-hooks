// Receives trip data as props from TripList (its parent)
function TripCard({
  destination,
  route,
  days,
  groupSize,
  price,
  oldPrice,
  savings,
  departureDate,
  image
}) {
     const [liked, setLiked] = useState(false);
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        background: "white",
        width: "300px",
      }}
    >
      {/* Image with badge overlays */}
      <div style={{ position: "relative" }}>
        <img
          src={image}
          alt={destination}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />

        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "black",
            color: "white",
            padding: "3px 10px",
            borderRadius: "20px",
            fontSize: "0.75rem",
          }}
        >
          {days} days
        </span>

        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "black",
            color: "white",
            padding: "3px 10px",
            borderRadius: "20px",
            fontSize: "0.75rem",
          }}
        >
          {groupSize}
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0 0 0.25rem" }}>{destination}</h3>

        <p
          style={{
            color: "#666",
            fontSize: "0.85rem",
            margin: "0 0 0.75rem",
          }}
        >
          {route}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <strong style={{ fontSize: "1.3rem" }}>
            ${price.toLocaleString()}
          </strong>

          <s style={{ color: "#999", fontSize: "0.85rem" }}>
            ${oldPrice.toLocaleString()}
          </s>

          <span
            style={{
              background: "#22c55e",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "0.75rem",
            }}
          >
            SAVE ${savings}
          </span>
        </div>

        <p
          style={{
            color: "#e74c3c",
            fontSize: "0.8rem",
            marginTop: "0.5rem",
          }}
        >
          Departs on {departureDate}
        </p>
      </div>
    </div>
  );
}

export default TripCard;