import React from "react";

const ErrorPage = ({ message }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Fira+Sans');

        .error-page * {
          box-sizing: border-box;
        }

        .error-page {
          font-family: "Fira Sans", sans-serif;
          color: #f5f6fa;
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .error-page .background {
          position: absolute;
          inset: 0;
          background: linear-gradient(#0c0e10, #446182);
        }

        .error-page .ground {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 25vh;
          background: #0c0e10;
        }

        .error-page .container {
          position: relative;
          margin: 0 auto;
          width: 85%;
          height: 100%;
          display: flex;
          justify-content: space-around;
        }

        .error-page .left-section {
          width: 40%;
          position: relative;
        }

        .error-page .inner-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          width: 100%;
        }

        .error-page .heading {
          font-size: 9rem;
          margin: 0;
          text-shadow: 0 0 1rem #ffffff;
        }

        .error-page .subheading {
          font-size: 1.5rem;
          max-width: 480px;
          margin: 0 auto;
        }

        .error-page .right-section {
          width: 50%;
          position: relative;
        }

        .error-page .svgimg {
          position: absolute;
          bottom: 0;
          max-width: 100%;
          max-height: 100%;
        }

        .error-page .bench-legs {
          fill: #0c0e10;
        }

        .error-page .top-bench,
        .error-page .bottom-bench {
          stroke: #0c0e10;
          stroke-width: 1px;
          fill: #5b3e2b;
        }

        .error-page .lamp-details {
          fill: #202425;
        }

        .error-page .lamp-accent {
          fill: #2a2f33;
        }

        .error-page .lamp-light {
          fill: #efefef;
        }

        @media (max-width: 770px) {
          .error-page .container {
            flex-direction: column;
          }

          .error-page .left-section,
          .error-page .right-section {
            width: 100%;
          }

          .error-page .heading {
            font-size: 7rem;
          }

          .error-page .ground {
            height: 0;
          }
        }
      `}</style>

      <div className="error-page">
        <div className="background">
          <div className="ground"></div>
        </div>

        <div className="container">
          <div className="left-section">
            <div className="inner-content">
              <h1 className="heading">404</h1>
              <p className="subheading">
                {message || "Looks like the page you were looking for is no longer here."}
              </p>
            </div>
          </div>

          <div className="right-section">
            <svg
              className="svgimg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="51.5 -15.288 385 505.565"
            >
              <g className="bench-legs">
                <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z" />
              </g>

              <g className="top-bench">
                <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
                c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z" />
              </g>

              <g id="lamp">
                <path
                  className="lamp-details"
                  d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917"
                />
                <circle className="lamp-light" cx="119.676" cy="44.22" r="40.51" />

                <radialGradient
                  id="SVGID_1_"
                  cx="119.676"
                  cy="44.22"
                  r="65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="50%" stopColor="#EDEDED" stopOpacity="0.5">
                    <animate
                      attributeName="stop-opacity"
                      values="0;0.5;0"
                      dur="5000ms"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#EDEDED" stopOpacity="0" />
                </radialGradient>

                <circle
                  fill="url(#SVGID_1_)"
                  cx="119.676"
                  cy="44.22"
                  r="65"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
