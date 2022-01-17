import React from "react";

let View = ({ details, deleteBook, editBook }) => {
  console.log(details);
  return details.map((detail, index) => (
    <tr key={detail.isbn}>
      <td>{detail.title}</td>
      <td className="pl-[15px]">{detail.author}</td>
      <td className="pl-[60px]">{detail.till}</td>
      <td className="pl-[80px]">{detail.isbn}</td>
      <td className="pl-[70px]">{detail.city}</td>
      <button
        className="bg-red-500 text-white rounded-sm ml-[3px]"
        onClick={() => deleteBook(detail.isbn)}
      >
        Delete
      </button>
      <button
        className="bg-blue-400 text-white ml-3"
        onClick={() => editBook(detail)}
      >
        Edit
      </button>
    </tr>
  ));
};
export default View;

