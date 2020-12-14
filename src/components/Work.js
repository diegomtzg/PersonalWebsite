import React from "react";
import Fade from "react-reveal/Fade";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="section work">
      <div className="slide">
        <div id="experience">
          <Fade bottom duration={1000} distance="20px">
            <div className="experience-container" id="workExperience">
              <div>
                <div className="experience-cards-div">
                  <WorkCard
                    isDark={true}
                    cardInfo={{
                      company: "Facebook",
                      desc:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      date: "June 2018 – Present",
                      companylogo: require("../assets/images/facebookLogo.png"),
                      role: "Software Engineer",
                      descBullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                      ],
                    }}
                  />
                  <WorkCard
                    isDark={true}
                    cardInfo={{
                      company: "Facebook",
                      desc:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      date: "June 2018 – Present",
                      companylogo: require("../assets/images/facebookLogo.png"),
                      role: "Software Engineer",
                      descBullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                      ],
                    }}
                  />
                  <WorkCard
                    isDark={true}
                    cardInfo={{
                      company: "Facebook",
                      desc:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                      date: "June 2018 – Present",
                      companylogo: require("../assets/images/facebookLogo.png"),
                      role: "Software Engineer",
                      descBullets: [
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="slide"></div>
    </div>
  );
}
