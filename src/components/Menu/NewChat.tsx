import React from 'react';
import Avatar from '@src/assets/user.png';

const NewChat = () => {
  return (
    <div className='border-t shrink-0 px-4 pt-6 pb-5 relative'>
      <div className='right-4	bg-gradient-to-tr text-sm from-btnStart to-btnEnd absolute text-white py- text-center rounded py-0.5 px-2'>
        Free
      </div>
      <div className='flex items-center pb-4'>
        <div className='mr-2'>
          <img className="w-10 h-10" src={Avatar} alt="" />
        </div>
        <div>
          <div className='text-black text-base'>User</div>
          <div className='text-gray-500	text-sm'>0xfw...gw35</div>
        </div>
      </div>
      <div className='font-bold	text-white text-base flex items-center justify-center rounded-lg	bg-gradient-to-tr from-btnStart to-btnEnd h-8 w-[212px] cursor-pointer mx-auto mb-3'>
        Upgrade to Pro
      </div>
      <div className='flex text-sm text-gray-900 items-center'>
        <svg
          className='mr-1'
          width='10'
          height='14'
          viewBox='0 0 10 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.857117 7V12C0.857117 12.5523 1.30483 13 1.85712 13H4.19045C4.74273 13 5.19045 12.5523 5.19045 12V10.3333M0.857117 7V2C0.857117 1.44772 1.30483 1 1.85712 1H4.19045C4.74273 1 5.19045 1.44772 5.19045 2V3.66667M0.857117 7H8.85712M8.85712 7L6.19045 4.33333M8.85712 7L6.19045 9.66667'
            stroke='#949494'
          />
        </svg>{' '}
        Log out
      </div>
    </div>
  );
};

export default NewChat;
