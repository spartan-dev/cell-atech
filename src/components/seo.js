import React from 'react';
import { Helmet } from 'react-helmet';
import ogImg from '../images/assets/seo.jpg'

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{
        lang: `en`
      }}
      title={`Cella Technologies | Warehouse & Inventory Solutions`}
      meta={[
        {
          name: `description`,
          content: `Providing true cloud WMS and WES, Cella Technologies supports Plex customers’ warehouses and production facilities around the globe.`
        },
        {
          property: `og:title`,
          content: `Cella Technologies: Warehouse & Inventory Solutions Transforming Material Handling`
        },
        {
          property: `og:description`,
          content: `Providing true cloud WMS and WES, Cella Technologies supports Plex customers’ warehouses and production facilities around the globe.`
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: `https://cella-tech.com/`
        },
        {
          property: `og:image`,
          content: ogImg
        },
        {
          property: `og:image:height`,
          content: 56
        },
        {
          property: `og:image:width`,
          content: 165
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: `Cella Technologies`
        },
        {
          name: `twitter:title`,
          content: `Cella Technologies: Warehouse & Inventory Solutions Transforming Material Handling`
        },
        {
          name: `twitter:description`,
          content: `Providing true cloud WMS and WES, Cella Technologies supports Plex customers’ warehouses and production facilities around the globe.`
        },
        {
          name: `twitter:description`,
          content: `summary_large_image`
        },
        {
          name: `keywords`,
          content: `wms, seamless, mobile, cloud, manufacturing, handling, material`
        },
        {
          name: `robots`,
          content: `INDEX,FOLLOW`
        },
      ]}
    >
      <link rel="canonical" href={"https://cella-tech.com/"} />
    </Helmet>
  );
}

export default SEO;