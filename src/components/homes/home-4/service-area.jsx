
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Mantenance from "@/public/images/services/Mantenance-2.png";
import EV from "@/public/images/services/EV_Charger.png";
import Auction from "@/public/images/services/Auction.png";
import Other from "@/public/images/services/other.png";


const  service_data = [
    
    {
        id: 1,
        
        img: Mantenance,
        title: "ສ້ອມແປງ",
        sub_title: "Cloud Backup",
        cls: "1",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        link : "",
    },
    {
        id: 2,
        
        img: EV,
        title: "EV Charger",
        sub_title: "Cloud Backup",
        cls: "2",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        link : "https://e-service.edl.com.la",
    },
    {
        id: 3,
        
        img: Auction,
        title: "ແຈ້ງການປະມູນ",
        sub_title: "Cloud Backup",
        cls: "3",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        path : "/notice-of-auction",
    },
    {
        id: 4,
        
        img: Other,
        title: "ບໍລິການອື່ນໆ",
        sub_title: "Cloud Backup",
        cls: "4",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        link : "",
    },

];


const ServiceArea = () => {
    return (
        <>
           <div className="tp-service-area blue-bg p-relative pt-50 pb-30">
               
               <div className="container">
                  <div className="row align-items-end mb-30">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-service-section-four">
                           <h3 className="tp-section-title-4">ບໍ​ລິ​ການ</h3>
                        </div>
                     </div>
                     
                  </div>
                  <div className="tp-service-4-border-top  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                     <div className="row">
                        {service_data.map((item , i) => 
                            <div key={i} className={`col-xl-3 col-lg-4 col-md-6 col-6 mb-50 tp-service-4-border-right service-border-trang-${item.cls}`}>
                                <div className="tp-service-4-item z-index">

                                    <Link
                                        href={item.link? item.link : item.path? item.path: ""}
                                        target={item.link? "_blank" : ""}> 
                                        <div className="tp-service-4-icon">
                                            <Image src={item.img} alt="theme-pure" />
                                        </div>
                                        <div className="tp-service-4-content">
                                            
                                            <h4 className="tp-service-4-title" style={{fontFamily: 'Noto Sans Lao'}}>{item.title}</h4>
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}          
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default ServiceArea;