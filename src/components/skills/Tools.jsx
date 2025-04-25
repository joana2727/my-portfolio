import React from "react";

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <span className="section__subtitle2">Developer Tools</span>
          <div className="skills__data">
            <i className="bx bxl-github"></i>
            <div>
              <h3 className="skills__name">Github</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-visual-studio"></i>
            <div>
              <h3 className="skills__name">VS Code</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-figma"></i>
            <div>
              <h3 className="skills__name">Figma</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <span className="section__subtitle2">Others</span>
          <div className="skills__data">
            <i className="bx bx-edit-alt"></i>
            <div>
              <h3 className="skills__name">Canva</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-microsoft"></i>
            <div>
              <h3 className="skills__name">Microsoft Office</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-google"></i>
            <div>
              <h3 className="skills__name">Google Workspace</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-slack"></i>
            <div>
              <h3 className="skills__name">Slack</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxs-videos"></i>
            <div>
              <h3 className="skills__name">Capcut & Filmora</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
