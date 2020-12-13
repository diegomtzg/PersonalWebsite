import React, { useState, useEffect, createRef } from "react";
import ColorThief from "colorthief";

export default function WorkExperienceCard({ cardInfo }) {
  const [imgColors, setImgColors] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setImgColors(colorThief.getColor(imgRef.current));
  }

  return (
    <div className="experience-card">
      <div
        style={{ background: imgColors.join(",") }}
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role dark-mode-text">{cardInfo.role}</h5>
        <h5 className="experience-text-date dark-mode-text">{cardInfo.date}</h5>
        <p className="subTitle experience-text-desc dark-mode-text">
          {cardInfo.desc}
        </p>
        <ul>
          <li className="subTitle dark-mode-text">I did this</li>
          <li className="subTitle dark-mode-text">and this</li>
        </ul>
      </div>
    </div>
  );
}
