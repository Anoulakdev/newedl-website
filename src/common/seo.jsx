import Head from "next/head";

const SEO = ({ pageTitle, description }) => (
  <>
    <Head>
      <title>{pageTitle ? `${pageTitle} | EDL` : "EDL - ລັດ​ວິ​ສາ​ຫະ​ກິດໄຟ​ຟ້າ​ລາວ"}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* ✅ Correct: description for search engines */}
      <meta
        name="description"
        content={
          description ||
          "EDL - ລັດ​ວິ​ສາ​ຫະ​ກິດໄຟ​ຟ້າ​ລາວ (ຟ​ຟ​ລ). ໄຟ​ຟ້າ​ລາວ, Electricite Du Laos, edl.com.la"
        }
      />

      {/* ✅ Correct: keywords meta tag (separate from robots) */}
      <meta
        name="keywords"
        content="www.edl.com.la, edl.com.la, edllao, edl, edllaowebsite, ​ລັດ​ວິ​ສາ​ຫະ​ກິດໄຟ​ຟ້າ​ລາວ, ຟ​ຟ​ລ, ໄຟ​ຟ້າ​ລາວ, Electricite Du Laos"
      />

      {/* ✅ Correct: robots directive for search engine crawlers */}
      <meta name="robots" content="index, follow" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/images/edl_logo.png" />
    </Head>
  </>
);

export default SEO;
