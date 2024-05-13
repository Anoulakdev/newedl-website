"use client"
import React from 'react';
import Image from 'next/image';

import img from '@/public/images/organization/LaoOK1.png';

const Organize = () => {
    return (
      <>
        <div className="container-fluid mt-60 mb-60 text-center wow tpfadeUp">
        <Image src={img} className="img-fluid" alt="theme-pure" />
        </div>
      </>
    );
};

export default Organize;