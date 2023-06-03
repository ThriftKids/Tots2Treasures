import React from "react";
import "./Final.css"
import final from "../../images/final.gif"
import final_failed from "../../images/final_failed.gif"

const Final = (props) => {

    var image=final;
    var status="Completed";
    if(props.transactionFailed === true){
        image = final_failed
        status = "Failed"
    }


  return (
    <div className="finalScreen">
      <img src={image} alt="final" />
      <p>Transaction {status} </p>
      <a href="/purchases">Back to History</a>
    </div>
  );
};

export default Final;











