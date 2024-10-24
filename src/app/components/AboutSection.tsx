import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48 text-center'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        {/* Wrapper untuk tata letak fleksibel */}
        <div className='flex flex-col items-center justify-center md:flex-row md:space-x-12'>
          
          {/* Gambar yang berada di sebelah teks pada layar besar */}
          <div className='md:w-1/3 mt-8 md:mt-0'>
            <Image
              src='/music.jpg'
              alt=''
              width={325}
              height={325}
              className='rounded-full'
            />
          </div>

          {/* Teks deskripsi */}
          <div className='md:w-2/3 mt-8 md:mt-0'>
            <h1 className='text-2xl font-bold mb-6'>Get to know me!</h1>
            <p className='text-lg leading-7 mb-4 text-neutral-600'>
              Hi, my name is Aisyah Nurrachmawati,{' '}
              <span className='font-bold'>a student from SMKN 21 JAKARTA</span>{' '}
              and <span className='font-bold'>from class Phase F PPLG</span>.
              I'm born in Jakarta and I'm the first child of three siblings. I
              have one younger sister and one younger brother. My hobbies are
              watching movies or dramas, listening music, and being a fan of
              some K-pop groups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
