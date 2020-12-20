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
                    cardInfo={{
                      company: "Google[X]",
                      companyLink:
                        "https://x.company/projects/everyday-robots/",
                      desc:
                        "Explored new grasp proposal representations for an end-to-end RL deep-grasping policy in robot applications that used image embeddings.",
                      date: "Summer 2020",
                      role: "AI Resident",
                      team: "The Everyday Robot Project",
                      descBullets: [
                        "Discovered grasp representations improved model performance by 4% on average.",
                      ],
                    }}
                  />
                  <WorkCard
                    cardInfo={{
                      company: "Google[X]",
                      companyLink:
                        "https://x.company/projects/everyday-robots/",
                      desc:
                        "Developed a VR interface to remotely teleoperate robots using an Oculus Quest.",
                      date: "Summer 2019",
                      role: "Robotics Software Intern",
                      descBullets: [
                        "This controller interface is actively being used to gather data to enable robots to autonomously learn new tasks.",
                      ],
                    }}
                  />
                  <WorkCard
                    cardInfo={{
                      company: "Google",
                      companyLink:
                        "https://chromium.googlesource.com/infra/infra/+/master/go/src/infra/tricium/README.md",
                      desc:
                        "Developed a suite of static analyzers for Tricium, an automated code review tool for the Chrome open source project.",
                      date: "Summer 2018",
                      role: "Software Engineering Intern",
                      descBullets: [
                        "The analyzers run 1,000’s reqs/hour and have generated hundreds of automated comments across Chrome dev teams.",
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="slide">
        <div id="experience">
          <div className="experience-container" id="workExperience">
            <div>
              <div className="experience-cards-div">
                <WorkCard
                  cardInfo={{
                    company: "Carnegie Mellon University",
                    companyLink:
                      "https://www.cs.cmu.edu/~charlie/courses/17-214",
                    desc: "Teaching assistant for 17-214",
                    date: "Summer 2018",
                    role: "TA",
                    descBullets: ["Ta'd"],
                  }}
                />
                <WorkCard
                  cardInfo={{
                    company: "Microsoft",
                    companyLink:
                      "https://www.microsoft.com/en-us/account/authenticator",
                    desc:
                      "Spearheaded the technical specification, user experience design and the implementation of various features for the Microsoft Authenticator Android app:",
                    date: "Summer 2017",
                    role: "Explore Intern",
                    descBullets: [
                      "Cloud-based backup and restore for 2FA accounts.",
                      "In-app Microsoft account profile picture updates.",
                    ],
                    headerColor:
                      "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
