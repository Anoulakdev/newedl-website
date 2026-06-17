const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "ໜ້າ​ຫຼັກ",
    link: "/",
    active: "active",
    sub_menus: [],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "ກ່ຽວ​ກັບ ຟ​ຟ​ລ",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "/administrator",
        title: "ໂຄງ​ຮ່າງ​ການ​ຈັດ​ຕັ້ງ ລັດ​ວິ​ສາ​ຫະ​ກິດ​ໄຟ​ຟ້າ​ລາວ",
      },
      {
        link: "/organization",
        title: "​ໂຄງ​ຮ່າງ​ສະ​ພາ​ບໍ​ລິ​ຫານ",
      },
      { link: "/branch_organize", title: "​​ໂຄງ​ຮ່າງສາ​ຂາ​ແຂວງ" },
      { link: "/organize", title: "​​ໂຄງ​ຮ່າງການ​ຈັດ​ຕັ້ງລວມ" },
      { link: "/about", title: "ວິ​ໄສ​ທັດ ແລະ ພາ​ລະ​ກິດ" },
      { link: "/iso", title: "ມາດ​ຕະ​ຖານ ISO" },
      { link: "/statistic", title: "ສະ​ຖິ​ຕິ" },
      { link: "/privacy", title: "privacy" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "​ຂ່າ​ວ​ສານ-ປະ​ຊາ​ສຳ​ພັນ",
    link: "",
    active: "",
    sub_menus: [
      { link: "/newslist", title: "​ຂ່າ​ວ​ສານ" },
      { link: "/knowledge", title: "ຄວາມ​ຮູ້​ກ່ຽວ​ກັບ​ໄຟ​ຟ້າ" },
      { link: "/turnoff", title: "ແຈ້ງມອດ​ໄຟ" },
      // { link: "/announcement", title: "ແຈ້ງການ" },
      { link: "/magazine", title: "ວ​າ​ລະ​ສານ" },
      { link: "/jobvacancy", title: "​ປະ​ກາດ​ຮັບ​ສະ​ໝັກ" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "​ຈັດ​ຊື້​-ຈັດ​ຈ້າງ",
    link: "",
    active: "",
    sub_menus: [{ link: "/notice-of-auction", title: "ແຈ້ງ​ການປະ​ມູນ" }],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "ນິ​ຕິ​ກຳ",
    link: "",
    active: "",
    sub_menus: [
      { link: "/legislation", title: "​ນິ​ຕິ​ກຳ" },
      { link: "/service-fee", title: "​ຄ່າ​ບໍ​ລິ​ການ" },
      { link: "/price", title: "​ອັດ​ຕາ​ລາ​ຄາ​ໄຟ" },
      { link: "/downloadform", title: "ດາວ​ໂຫຼດ​ແບບ​ຟອມ" },
    ],
  },

  // {
  //   id: 6,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "ບ​ໍ​ລິ​ການ",
  //   link: "",
  //   active: "",
  //   sub_menus: [

  //   ],
  // },

  {
    id: 7,
    mega_menu: false,
    has_dropdown: true,
    title: "ຕິດ​ຕໍ່",
    link: "",
    active: "",
    sub_menus: [
      { link: "/branch", title: "ສາ​ຂາແຂວງ" },
      { link: "/service-center", title: "ສູນ​ບໍ​ລິ​ການ" },
      { link: "/comment", title: "​ສະ​ແດງ​ຄຳຄິດ​ເຫັນຕໍ່ ຟ​ຟ​ລ" },
      // { link: "https://mail.edl.com.la/", title: "EDL mail" },
    ],
  },
];
export default menu_data;
