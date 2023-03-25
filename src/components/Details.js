import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [postData, setPostData] = useState();
  const [inputValue, setInputValue] = useState("");

  const a = useParams();
  let pincode = a["*"];

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    let data = await fetch(`https://api.postalpincode.in/pincode/` + pincode);
    let json = await data.json();
    setPostData(json[0].PostOffice);
  }
  return (
    <>
      <div className="">
        <h3>Pincode: {pincode}</h3>
        <h3>Message: Number of pincodes found: {postData?.length}</h3>

        <input
          type="text"
          placeholder="Filter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="grid-container">
        {postData != undefined ? (
          postData
            .filter((a) =>
              a.Name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((post) => {
              return (
                <div className="details-container">
                  <p>
                    {" "}
                    <b>Name:</b> {post.Name}
                  </p>
                  <p>
                    {" "}
                    <b>Branch Type:</b> {post.BranchType}
                  </p>
                  <p>
                    <b>Delivery Status: </b> {post.DeliveryStatus}
                  </p>
                  <p>
                    <b>District: </b> {post.District}
                  </p>
                  <p>
                    {" "}
                    <b>Division:</b> {post.Division}
                  </p>
                </div>
              );
            })
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </>
  );
};

export default Details;
