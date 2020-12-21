import React from "react";
import "../static/css/Projects.css";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ cardInfo }) {
  return (
    <div>
      <div className="repo-card-div">
        <div className="project-name-div">
          <FontAwesomeIcon icon={faCamera} size="lg" />
          <p className="project-name">InFrame</p>
        </div>
        <p className="repo-description">desc</p>
        <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div
                className="language-color"
                style={{ backgroundColor: "yellow" }}
              ></div>
              <p>lang</p>
            </span>

            <span>
              <svg
                aria-hidden="true"
                className="octicon"
                height="20"
                role="img"
                viewBox="0 0 10 16"
                width="12"
                fill="rgb(106, 115, 125)"
                className="repo-star-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>forks</p>
            </span>
            <span>
              <svg
                aria-hidden="true"
                className="octicon"
                height="20"
                role="img"
                viewBox="0 0 14 16"
                width="14"
                fill="rgb(106, 115, 125)"
                className="repo-star-svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                ></path>
              </svg>
              <p>stargazers</p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p>diskUsage KB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
