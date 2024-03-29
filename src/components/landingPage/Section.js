import React from 'react';
import BgSectionTop from '../../assets/images/bg-section-top-desktop-1.svg';
import BgSectionBottom from '../../assets/images/bg-section-bottom-desktop-1.svg';
import Illusone from '../../assets/images/illustration-grow-together.svg';
const Section = () => {
  return (
    <div className="">
      <div>
        <img src={BgSectionTop} alt="" />
        <div className="bg-[#FFF4F6] px-6 sm:px-12 ">
          <div className=" w-4/5 mx-auto flex items-center justify-center gap-10">
            <div className="text-[#2D133A] ">
              <p className="text-2xl font-bold mb-3">Nigerian Heritage</p>
              <p className="text-lg">
                Whether you are the guardian of children born and bred in
                Nigeria or diaspora; or they have japa! You will find a
                welcoming community of individuals from all walks of life for
                your child to choose from.
              </p>
            </div>
            <div>
              <img src={Illusone} alt="" />
            </div>
          </div>
        </div>
        <img src={BgSectionBottom} alt="" />
      </div>
    </div>
  );
};

export default Section;
