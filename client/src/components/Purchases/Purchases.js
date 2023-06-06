import React from "react";
import "./Purchases.css";
import PurchasesCard from "./Card";
import one from "../images/one.jpg";
import testImage from "../images/testImage.jpg";

const Purchases = () => {
  return (
    <div className="purchasesContainer">
      <h2 className="purchaseHistoryTitle">Your purchase history</h2>
      <div className="column historyContainer">
        <PurchasesCard title="Title 1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus, dictum quis ullamcorper ut, dignissim sed nunc." img={one} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
        <PurchasesCard title="Title 2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor nunc ut lectus vulputate efficitur. Aenean magna ligula, volutpat at feugiat commodo, pharetra vel erat. Donec varius finibus tincidunt. Suspendisse nec dui vitae lorem finibus tempus. Morbi purus risus" img={testImage} date="12/12/23" price="$100" />
      </div>
    </div>
  );
};

export default Purchases;
