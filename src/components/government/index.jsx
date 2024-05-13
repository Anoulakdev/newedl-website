"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import feature_data from '@/src/data/feature-data';

import gover1 from '@/public/images/government/image58_1.png';
import gover2 from '@/public/images/government/image59_1.png';
import gover3 from '@/public/images/government/image57_1.png';
import gover4 from '@/public/images/government/image60_1.png';

const feature_data = [
    {
        id: 1, 
        color: "1",
        img: gover1,
        title: <>ກະ​ຊວງ​ການ​ເງິນ <div style={{ marginBottom: '26px' }}></div></>,
        description: <>Ministere des <br />Finances</>,

    },
    {
        id: 2, 
        color: "2",
        img: gover2,
        title: <>ກະ​ຊວງ​ແຜນ​ການ<br /> ແລະ ການ​ລົງ​ທຶນ</>,
        description: <>Ministry of Planning <br />and Investment</>,

    },
    {
        id: 3, 
        color: "3",
        img: gover3,
        title: <>ບໍ​ລິ​ສັດ​ຜະ​ລິດ<br />​ໄຟ​ຟ້າ​ລາວ​ມະ​ຫາ​ຊົນ</>,
        description: <>EDL-GENERATION PUBLIC COMPANY</>,

    },
    {
        id: 4, 
        color: "4",
        img: gover4,
        title: <> ກະ​ຊວງພະ​ລັງ​ງານ<br />ແລະ ບໍ່​ແຮ່</>,
        description: <>ENERGY AND <br />MINES</>,

    },
];


const FeatureArea = ({style_integraton}) => {
    return (
        <>
            <div className={`blue-bg tp-feature-area ${style_integraton ? "pt-30 pb-10" : "grey-bg-3 pt-30 pb-10"}`}>
                  <div className="container">
                     
                     <div className="row gx-0 tp-feature-five-wrapper-main blue-bg">
                        {feature_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tp-feature-five-wrapper">
                                    <div className={`tp-feature-five-item tp-feature-five-item-${item.color} text-center rounded-4 m-2`}>
                                        <div className="tp-feature-five-icon p-relative">
                                            <Image src={item.img} alt="theme-pure" width={85} />
                                            <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                        </div>
                                        <div className="tp-feature-five-content mb-3">
                                            <h4 className="tp-feature-five-title-sm" style={{ fontFamily: 'Noto Sans Lao' }}>{item.title}</h4>
                                            {/* <p>{item.description}</p> */}
                                        </div>
                                        <div className="tp-feature-five-btn">
                                            <Link className="tp-btn-purple" href="#">ເຂົ້າ​​ Website</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                     </div>
                     
                  </div>
               </div>
        </>
    );
};

export default FeatureArea;