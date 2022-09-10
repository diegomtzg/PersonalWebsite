import React from "react";
import Fade from "react-reveal/Fade";
import WorkCard from "./cards/WorkCard";
import xLogo from "../static/images/X.jpg";
import googleLogo from "../static/images/Google.jpg";
import microsoftLogo from "../static/images/Microsoft.jpg";
import cmuLogo from "../static/images/CMU_Red.jpg";
import "../static/css/Work.css";

export default function Work() {
  return (
    <div className="section work ">
      <div className="slide">
        <h2 className="section-heading">Work Experience</h2>
        <Fade bottom>
          <div className="experience-cards-div">
            <WorkCard
              cardInfo={{
                company: "Google",
                companyLink: "https://mapsplatform.google.com/",
                logo: googleLogo,
                desc: "I'm currently on the Google Maps team in Seattle, WA.",
                date: "Current",
                role: "Software Engineer",
                descBullets: [
                  "Developing beautiful and intuitive product experiences, improving the accuracy of Google's geo data, and plotting a course for the future of mapping.",
                  "Building the most accurate, comprehensive, and useful maps for billions of users across the world.",
                ],
              }}
            />
            <WorkCard
              cardInfo={{
                company: "Google[X]",
                companyLink: "https://x.company/projects/everyday-robots/",
                logo: xLogo,
                desc: "Researched new robotic grasp representations that used graphical data embeddings in images to improve performance on an end-to-end RL grasping policy.",
                date: "Summer 2020",
                role: "AI Resident",
                team: "The Everyday Robot Project",
                descBullets: [
                  "Image embeddings leverage translational invariance of CNNs since a successful grasp is independent of the surrounding environment.",
                ],
              }}
            />
            <WorkCard
              cardInfo={{
                company: "Google[X]",
                companyLink: "https://x.company/projects/everyday-robots/",
                logo: xLogo,
                desc: "Developed an end-to-end VR interface to remotely teleoperate robots through human movement using an Oculus Quest.",
                date: "Summer 2019",
                role: "Robotics Software Intern",
                descBullets: [
                  "Wrote client and server code to set up and manage communication over HTTP.",
                  "This interface is actively being used to collect data so that robots can autonomously learn to perform new tasks.",
                ],
              }}
            />
          </div>
        </Fade>
      </div>
      <div className="slide">
        <h2 className="section-heading">Work Experience</h2>
        <div className="experience-cards-div">
          <WorkCard
            cardInfo={{
              company: "Google",
              companyLink:
                "https://chromium.googlesource.com/infra/infra/+/master/go/src/infra/tricium/README.md",
              logo: googleLogo,
              desc: "Developed a suite of static analyzers for Tricium, an automated code review tool for Chrome developers.",
              date: "Summer 2018",
              role: "Software Engineering Intern",
              descBullets: [
                "Analyzers include Python/C++ linters, comment spell checkers and whitespace checkers.",
                "The analyzers run 1,000’s reqs/hour and have generated hundreds of automated comments across Chrome dev teams.",
              ],
            }}
          />
          <WorkCard
            cardInfo={{
              company: "Carnegie Mellon University",
              companyLink: "https://www.cs.cmu.edu/~charlie/courses/17-214",
              logo: cmuLogo,
              desc: "Taught concepts of design for complex systems, object oriented programming, techniques for robustness and concurrent software.",
              date: "Fall 2018",
              role: "TA | Principles of Software Construction",
              descBullets: [
                "Held recitations, office hours and course-wide exam review sessions for 100+ students.",
                "Provided medium-scale software design and homework feedback.",
              ],
            }}
          />
          <WorkCard
            cardInfo={{
              company: "Microsoft",
              logo: microsoftLogo,
              companyLink:
                "https://www.microsoft.com/en-us/account/authenticator",
              desc: "Spearheaded the technical specification, user experience design and the implementation of various features for the Microsoft Authenticator Android app:",
              date: "Summer 2017",
              role: "Explore Intern",
              descBullets: [
                "Cloud-based backup and restore for 2FA accounts.",
                "In-app Microsoft account profile picture updates.",
              ],
              headerColor: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
