const Sidebar = ({ findings = [] }) => {
  return (
    <div
      style={{
        width: "250px",
        padding: "10px",
        borderRight: "1px solid #ccc",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <h2>Findings</h2>
      {findings.length === 0 ? (
        <p>No findings available</p>
      ) : (
        <ul style={{ padding: 0, listStyleType: "none" }}>
          {findings.map((item, index) => (
            <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>
              {item?.name || `Finding #${index + 1}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
