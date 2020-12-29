import React from "react";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import WorkCard from "./cards/WorkCard";
import xLogo from "../assets/images/X.jpg";
import googleLogo from "../assets/images/Google.jpg";
import microsoftLogo from "../assets/images/Microsoft.jpg";
import cmuLogo from "../assets/images/CMU_Red.jpg";
import "../static/css/Work.css";

export default function Work() {
  return (
    <div className="section work ">
      <div className="slide">
        <Typography className="section-heading" component="h2" variant="h2">
          Work Experience
        </Typography>
        <Fade bottom>
          <div className="experience-cards-div">
            <WorkCard
              cardInfo={{
                company: "Google[X]",
                companyLink: "https://x.company/projects/everyday-robots/",
                logo: xLogo,
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
                companyLink: "https://x.company/projects/everyday-robots/",
                logo: xLogo,
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
                logo: googleLogo,
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
        </Fade>
      </div>
      <div className="slide">
        <Typography className="section-heading" component="h2" variant="h2">
          Work Experience
        </Typography>
        <div className="experience-cards-div">
          <WorkCard
            cardInfo={{
              company: "Carnegie Mellon University",
              companyLink: "https://www.cs.cmu.edu/~charlie/courses/17-214",
              logo: cmuLogo,
              desc:
                "Taught concepts of design for complex systems, object oriented programming, techniques for robustness and concurrent software.",
              date: "Summer 2018",
              role: "TA | Principles of Software Construction",
              descBullets: [
                "Held recitations, 1:1 office hours and course-wide exam review sessions for 100+ students.",
                "Provided medium-scale software design feedback and helped with homework grading.",
              ],
            }}
          />
          <WorkCard
            cardInfo={{
              company: "Microsoft",
              logo: microsoftLogo,
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
              headerColor: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
