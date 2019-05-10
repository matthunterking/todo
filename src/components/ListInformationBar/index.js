import React from "react";

const ListInformationBar = ({ numberOfItems, numberOfCompletedItems }) => {
  return (
    <div>
      <p>Total number of items {numberOfItems}</p>
      <p>Total number completed {numberOfCompletedItems}</p>
    </div>
  );
};

export default ListInformationBar;
