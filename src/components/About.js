import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={require('./assets/libe-tz2.jpeg')}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>

              more Description about libe-tz should be written here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;