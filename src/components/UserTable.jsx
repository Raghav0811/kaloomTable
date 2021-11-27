import React, { useState } from "react";
import "../styles/userTable.css";

const UserTable = ({ users }) => {
  const data = users.map((user) => {
    let vip;
    vip = user.VIP || "false";
    return { ...user, VIP: vip };
  });

  const [userData, setUserData] = useState(data);
  const [userNameOrder, setUserNameOrder] = useState("");
  const [idOrder, setIdOrder] = useState("");
  const [firstNameOrder, setFirstNameOrder] = useState("");
  const [lastNameOrder, setLastNameOrder] = useState("");
  const [vipOrder, setVipOrder] = useState("");

  const ORDER_MAP = {
    Username: { order: userNameOrder, fn: setUserNameOrder },
    "First Name": { order: firstNameOrder, fn: setFirstNameOrder },
    "Last Name": { order: lastNameOrder, fn: setLastNameOrder },
    Identifier: { order: idOrder, fn: setIdOrder },
    VIP: { order: vipOrder, fn: setVipOrder },
  };

  const sortData = (col, currentOrder, fn) => {
    if (!currentOrder) currentOrder = "DSC";
    const sortConstant = currentOrder === "ASC" ? 1 : -1;
    const newOrder = currentOrder === "ASC" ? "DSC" : "ASC";

    const sortedData = userData.sort((a, b) => {
      return a[col].toLowerCase() > b[col].toLowerCase()
        ? sortConstant
        : -1 * sortConstant;
    });

    setUserData(sortedData);
    fn(newOrder);
  };

  const renderTableHeader = () => {
    let header = Object.keys(userData[0]);
    return header.map((key, index) => {
      return (
        <th
          className="table-header"
          key={index}
          onClick={() => sortData(key, ORDER_MAP[key].order, ORDER_MAP[key].fn)}
        >
          {key.toUpperCase()}
        </th>
      );
    });
  };

  const renderTableData = () => {
    return userData.map((user) => {
      return (
        <tr key={user.Identifier}>
          <td>{user.Username}</td>
          <td>{user.Identifier}</td>
          <td>{user["First Name"]}</td>
          <td>{user["Last Name"]}</td>
          <td>{user.VIP}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 id="title">User Table</h1>
      <table id="users">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
