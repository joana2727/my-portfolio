import React from "react";
import cert1 from "../../assets/cert1.webp";
import cert2 from "../../assets/cert2.webp";
import cert3 from "../../assets/cert3.webp";

const Certificates = () => {
  return (
    <div>
      <h1>Certifications</h1>
      <div className="cert">
        {/* Certification 1 */}
        <div className="certification-box">
          <div className="certification">
            <img src={cert1} alt="Certification 1" className="certification__image" />
            <h5 className="certification__title">Vice President's Lister</h5>
            <p className="certification__description">
            Awarded for exceptional academic performance and consistent excellence, 
            recognized for being on the Vice President's list for outstanding achievements during the academic term.
            </p>
          </div>
        </div>

        {/* Certification 2 */}
        <div className="certification-box">
          <div className="certification">
            <img src={cert2} alt="Certification 2" className="certification__image" />
            <h5 className="certification__title">Digital Arts</h5>
            <p className="certification__description">
            Awarded 1st Place in the Digital Arts Canva Category during DCS Week for outstanding creativity
             and exceptional design skills demonstrated throughout the competition.
            </p>
          </div>
        </div>

        {/* Certification 3 */}
        <div className="certification-box">
          <div className="certification">
            <img src={cert3} alt="Certification 2" className="certification__image" />
            <h5 className="certification__title">Mental Health Awareness</h5>
            <p className="certification__description">
            Recognized for completing the Mental Health Awareness program, demonstrating a deep understanding of mental health issues and promoting the importance of mental well-being.
            </p>
          </div>
        </div>

        {/* Add more certifications as needed */}
      </div>
    </div>
  );
};

export default Certificates;
