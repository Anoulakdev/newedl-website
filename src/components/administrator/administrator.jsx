"use client"
import React from 'react';
import Image from 'next/image';

import img from '@/public/images/organization/LaoS.jpg';

const Administrator = () => {
    return (
      <>
        <div className="container-fluid mt-50 mb-50 text-center wow tpfadeUp">
        <Image src={img} className="img-fluid" alt="theme-pure" />
        </div>
      </>
    );
};

export default Administrator;