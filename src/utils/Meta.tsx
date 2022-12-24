import Head from 'next/head';

const site = {
  name: 'كيتو ستايل',
  url: 'https://www.ketonestyle.com',
  logo: '/logo.svg',
  description:
    'كيتو ستايل اول موقع عربي مختص بمجال الكيتو واخصائي الاغذية والكثير لصحة افضل',
  keywords:
    'تمارين رياضية - قياس كتلة - اخصائي اغذية- وجبات كيتة - كيتو ستايل - keto style - keto - diet - nutritionist'
};
const Meta = ({ title }: { title: string }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.svg' />
      <meta name='description' content={site.description} />
      <meta property='og:url' content={site.url} />

      <meta property='og:locale' content='ar_AR' />
      <meta property='og:title' content='كيتو ستايل' />
      <meta name='keywords' content={site.keywords} />

      <meta property='og:site_name' content={site.name} />
      <meta property='og:url' content={site.url} />
      <meta property='og:type' content='website' />
      <meta name='title' property='og:title' content={site.name} />
      <meta name='image' property='og:image' content={site.logo} />
      <meta property='og:image:type' content='image/svg' />
      <meta property='og:image:width' content='1024' />
      <meta property='og:image:height' content='1024' />
      <meta
        name='description'
        property='og:description'
        content={site.description}
      />
      <meta name='twitter:card' content={site.description} />
      <meta name='twitter:title' content={site.name} />
      <meta name='twitter:description' content={site.description} />
      <meta name='twitter:image:src' content={site.logo} />
      <meta name='twitter:domain' content={site.url} />

      {/* <link rel='manifest' href='/manifest.json' /> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'كيتو ستايل - KETO STYLE'
};

export default Meta;
