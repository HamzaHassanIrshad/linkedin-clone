import React from "react";
import "../css/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Sony’s new PS5 model weighs less because it has a smaller heatsink",
        "Tech News"
      )}
      {newsArticle(
        "Microsoft is threatening to withhold Windows 11 updates if your CPU is old",
        "Tech News"
      )}
      {newsArticle(
        "WhatsApp tricks: How to read messages without opening the chat",
        "Life Hacks"
      )}
      {newsArticle(
        "Apple will repair iPhone 12 models that have audio problems",
        "Trending News"
      )}
      {newsArticle(
        "Masters Berlin is scheduled to start on the 10th of September",
        "Valorant Champions Tour"
      )}
    </div>
  );
}

export default Widgets;
