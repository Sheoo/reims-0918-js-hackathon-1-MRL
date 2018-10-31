import React from "react";

const CandiesList = ({ list }) => (
  <section>
    {list.map((candy, key) => (
      <p style={{ color: "white" }} key={key}>
        {candy}
      </p>
    ))}
  </section>
);

export default CandiesList;
