import React from "react";

export function Table() {
  const [globalData, setGlobalData] = React.useState([]);
  const [state, setState] = React.useState([]);
  const [currPage, setCurrPage] = React.useState([]);

  const handlePagination = (pgNo) => {
    setCurrPage(pgNo);
    const start = (pgNo - 1) * 5, end = start + 5; 
    setState(globalData.slice(start, end));
  };

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
    )
      .then((data) => data.json())
      .then((res) => {
        setGlobalData(res);
        setState(res.slice(0, 5));
      });
  }, []);

  return (
    <div className="Table">
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {state.map((data) => (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </table>
      <div style={{ display: "flex" }}>
        <div
          style={{ height: "25px", width: "25px", margin: "10px" }}
          onClick={() => {
            if (currPage > 0)
              handlePagination(currPage - 1);
          }}
        >
          Prev
        </div>
        <div
          style={{ height: "25px", width: "25px", margin: "10px" }}
          onClick={() => {
            handlePagination(1);
          }}
        >
          1
        </div>
        <div
          style={{ height: "25px", width: "25px", margin: "10px" }}
          onClick={() => {
            handlePagination(2);
          }}
        >
          2
        </div>
        <div
          style={{ height: "25px", width: "25px", margin: "10px" }}
          onClick={() => {
            if (currPage < globalData.length - 1)
              handlePagination(currPage + 1);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
}
