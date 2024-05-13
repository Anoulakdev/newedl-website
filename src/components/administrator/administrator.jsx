"use client"
import React from 'react';
import Image from 'next/image';

import img from '@/public/images/organization/LaoD.jpg';

const Administrator = () => {
    return (
      <>
        <div className="container-fluid mb-60 text-center wow tpfadeUp">
        <Image src={img} className="img-fluid" alt="theme-pure" />
        </div>
      </>
    );
};

export default Administrator;