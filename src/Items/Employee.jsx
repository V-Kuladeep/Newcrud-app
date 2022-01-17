import React, { useState, useEffect } from "react";
import View from "./View";

// getting the values of local storage
let getDatafromLS = () => {
  let data = localStorage.getItem("details");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

let Employee = () => {
  let [details, setdetails] = useState(getDatafromLS());

  // input field states
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [isbn, setIsbn] = useState("");
  let [till, setTill] = useState("");
  let [city, setCity] = useState("");
  let [edit, setEdit] = useState("");

  // form submit event
  let handleAddBookSubmit = e => {
    e.preventDefault();
    // creating an object
    let detail = {
      title,
      author,
      isbn,
      till,
      city,
    };
    setdetails([...details, detail]);
    setTitle("");
    setAuthor("");
    setIsbn("");
    setTill("");
    setCity("");
  };

  // delete data from LS
  let deleteBook = isbn => {
    let filteredBooks = details.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setdetails(filteredBooks);
  };
  // Edit the text
  let editBook = value => {
    let editBooks = details.filter((detail, index) => detail !== value);
    setEdit(editBooks);
    setTitle(value.title);
    setAuthor(value.author);
    setIsbn(value.isbn);
    setTill(value.till);
    setCity(value.city);
    setdetails(editBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  return (
    <div>
      <div className="grid justify-center mt-7">
        <div>
          <form
            autoComplete="off"
            onSubmit={handleAddBookSubmit}
            className="border-[1px] w-[350px] h-[370px] rounded-md shadow-xl ml-[55px]"
          >
            <center>
              <h1 className="text-xl text-blue-500">EXPERIENCE</h1>
            </center>
            <h2 className="ml-2">Company:</h2>
            <input
              type="text"
              required
              onChange={e => setTitle(e.target.value)}
              value={title}
              className="border-2 w-[80%] ml-2 rounded-sm"
            ></input>
            <br></br>
            <h2 className="ml-2">Designation:</h2>
            <input
              type="text"
              required
              onChange={e => setAuthor(e.target.value)}
              value={author}
              className="border-2 w-[80%] ml-2 rounded-sm"
            ></input>
            <br></br>
            <h2 className="ml-2">Working Since:</h2>
            <input
              type="text"
              required
              onChange={e => setIsbn(e.target.value)}
              value={isbn}
              className="border-2 w-[80%] ml-2 rounded-sm"
            ></input>
            <br></br>
            <h2 className="ml-2">Working Till:</h2>
            <input
              type="text"
              required
              onChange={e => setTill(e.target.value)}
              value={till}
              className="border-2 w-[80%] ml-2 rounded-sm"
            ></input>
            <br></br>
            <h2 className="ml-2">City:</h2>
            <input
              type="text"
              required
              onChange={e => setCity(e.target.value)}
              value={city}
              className="border-2 w-[80%] ml-2 rounded-sm"
            ></input>
            <br></br>
            <button
              type="submit"
              className="bg-blue-400 text-white rounded-lg ml-[280px] mt-[8px] w-[50px]"
            >
              ADD
            </button>
          </form>
        </div>
        <div className="mt-[30px]">
          <table>
            <thead>
              <tr>
                <th className="pr-[10px]">Company</th>
                <th>Designation</th>
                <th className="pl-[15px]">WorkingSince</th>
                <th className="pl-[15px]">WorkingTill</th>
                <th className="pl-[15px]">City</th>
              </tr>
            </thead>
          </table>
        </div>

        <div>
          {details.length > 0 && (
            <>
              <div>
                <table>
                  <tr>
                    <View
                      details={details}
                      deleteBook={deleteBook}
                      editBook={editBook}
                    />
                  </tr>
                </table>
              </div>
              <button
                className="bg-red-500 text-white rounded-sm"
                onClick={() => setdetails([])}
              >
                Remove All
              </button>
            </>
          )}
          {details.length < 1 && <div>No data are added yet</div>}
        </div>
      </div>
    </div>
  );
};

export default Employee;
