import React from "react";
import "./expenseDate.css";

const ExpenseDate = ({ date }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthNames[date.getMonth()]}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">{date.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
