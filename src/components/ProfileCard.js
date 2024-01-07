import React, { useState, useEffect } from 'react';
import Male from '../assets/illustrations/male-illus.png';
import { LuMapPin } from 'react-icons/lu';
import { BsFillDiamondFill } from 'react-icons/bs';

const truncateText = (text, maxWords) => {
  const words = text.split(/\s+/);
  const truncated = words.slice(0, maxWords).join(' ');
  return truncated + '...';
};

const ProfileCard = () => {
  const bioText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod augue vel risus facilisis, at facilisis leo blandit. Aenean ut ante ut libero interdum tincidunt. Sed et justo id tellus vestibulum cursus vel vel velit. Vestibulum quis est sed neque efficitur rhoncus. Sed ullamcorper metus eu vestibulum cursus. Nulla facilisi. Curabitur nec venenatis erat, vel suscipit purus. Integer aliquet, odio id hendrerit vulputate, elit ligula tincidunt nulla, id tincidunt nulla tortor a mauris. Vivamus quis est eget elit interdum vulputate. Proin tincidunt, velit eu finibus volutpat, mi libero condimentum libero, in fermentum elit arcu vel arcu. Maecenas et ligula justo. Suspendisse.';

  const [truncatedLoremIpsum, setTruncatedLoremIpsum] = useState('');

  useEffect(() => {
    setTruncatedLoremIpsum(truncateText(bioText, 20));
  }, [bioText]);

  return (
    <div className="profile-card bg-[#FFF4F6] rounded-2xl px-6 pt-6 pb-8 flex flex-col gap-8 w-[335px] cursor-pointer">
      <div className="w-[128px] h-[128px] rounded-full border-4 border-[#FE8D9F] flex items-center justify-center z-30 relative overflow-hidden mx-auto">
        <img
          src={Male}
          alt="user-illustration"
          className="w-full h-full object-cover z-40"
        />
      </div>

      <div className="text-[#2D133A]">
        <div className="flex items-center gap-2  text-xl font-bold">
          <p>Muhammad</p>
          <BsFillDiamondFill className="h-2 w-2" />
          <p>27</p>
        </div>

        <div className="flex items-center gap-[6px] ">
          <LuMapPin className="w-[18px] h-[18px]" />
          <p className="text-sm font-light">Lagos, Nigeria</p>
        </div>
      </div>

      <div>
        <p>{truncatedLoremIpsum}</p>
      </div>

      <div className="flex items-center justify-between text-[#FF4164] text-sm font-semibold">
        <p>Single</p>
        <BsFillDiamondFill className="h-1 w-1" />
        <p>Engineer</p>
        <BsFillDiamondFill className="h-1 w-1" />
        <p>Hausa</p>
        <BsFillDiamondFill className="h-1 w-1" />
        <p>5ft 6</p>
      </div>
    </div>
  );
};

export default ProfileCard;
