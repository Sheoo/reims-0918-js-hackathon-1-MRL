import React from "react";

const CandiesList = ({list}) => (
<section>
    {list.map((candy, key) => (<p key={key}>{candy}</p>))}
</section>
)

export default CandiesList;
