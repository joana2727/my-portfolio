import React from "react";

const Technical = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical</h3>

      <div className="skills__box">
        <div className="skills__group">
          <span className="section__subtitle2">Frontend</span>
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">Next.js</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-file-css"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-file-html"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <span className="section__subtitle2">Database</span>
          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-data"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <span className="section__subtitle2">Framework</span>
          <div className="skills__data">
            <i className="bx bxl-django"></i>
            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-code"></i>
            <div>
              <h3 className="skills__name">Laravel</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <span className="section__subtitle2">Cloud & Hosting</span>
          <div className="skills__data">
            <i className="bx bx-cloud"></i>
            <div>
              <h3 className="skills__name">Vercel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
