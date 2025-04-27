import React, { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    // Update page title
    document.title = "Team | TwinCoreTech";

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  return <div>Team</div>;
};

export default Team;
