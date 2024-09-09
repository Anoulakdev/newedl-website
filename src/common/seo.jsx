import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="www.edl.com.la, edl.com.la, edllao, edl, edllaowebsite, ​ລັດ​ວິ​ສາ​ຫະ​ກິດໄຟ​ຟ້າ​ລາວ, ຟ​ຟ​ລ, ໄຟ​ຟ້າ​ລາວ" />
      <meta name="robots" content="www.edl.com.la, edl.com.la, edllao, edl, edllaowebsite, ​ລັດ​ວິ​ສາ​ຫະ​ກິດໄຟ​ຟ້າ​ລາວ, ຟ​ຟ​ລ, ໄຟ​ຟ້າ​ລາວ" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/images/edl_logo.png" />
    </Head>
  </>
);

export default SEO;
