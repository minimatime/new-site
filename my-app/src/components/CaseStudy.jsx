import React from 'react';
import './CaseStudy.css';

const CaseStudy = ({
  heading = 'Project Title',
  subheading = 'A brief description of the case study goes here.',
  videoSrc = '',
  videoPoster = '',
}) => {
  console.log('videoSrc:', videoSrc);
  return (
    <section className="case-study">
      <div className="case-study__text">
        <h1 className="case-study__heading">{heading}</h1>
        <p className="case-study__subheading">{subheading}</p>
      </div>

      <div className="case-study__video-wrapper">
        <video
          className="case-study__video"
          poster={videoPoster}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default CaseStudy;