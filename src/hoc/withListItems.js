import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";

const withListItems = WrappedComponent => {
  const WithListItems = props => {
    const [isLoading, setLoading] = useState(true);
    const [listItems, setListItems] = useState([]);
    const [completedItems, setCompletedItems] = useState(null);

    useEffect(
      () => {
        if (isLoading) {
          axios
            .get("http://localhost:3000/api/todos")
            .then(({ data }) => {
              const sortedData = data.sort((a, b) => b.id - a.id);
              const completed = data.filter(item => item.completed);
              setListItems(sortedData);
              setCompletedItems(completed.length);
              setLoading(false);
            })
            .catch(error => console.log(error));
        }
      },
      [isLoading]
    );

    if (isLoading) return <Loading />;
    return (
      <WrappedComponent
        listItems={listItems}
        completedItems={completedItems}
        {...props}
      />
    );
  };
  return WithListItems;
};

export default withListItems;
