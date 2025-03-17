import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/products-kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1=""
        link1Name="Try demo"
        htmlString1={<b>&rarr;</b>}
        link2=""
        link2Name="Learn more"
        htmlString2={<b>&rarr;</b>}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/products-console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1=""
        link1Name="Learn more"
        htmlString1={<b>&rarr;</b>}
      />
      <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1=""
        link1Name="Coin"
        htmlString1={<b>&rarr;</b>}
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/products-kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1=""
        link1Name="Kite Connect"
        htmlString1={<b>&rarr;</b>}
      />
      <LeftSection
        imageURL="media/images/varsity-products.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay=""
        appStore=""
      />
      <div className="row text-center fs-4 my-5">
      <p>Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}} href="#">Zerodha.tech</a> blog.</p>
      </div>
      
      <Universe />
    </>
  );
}

export default ProductPage;
