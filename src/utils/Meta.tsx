import Head from 'next/head';
const Meta = ({ title }: { title: string }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.svg' />
      <meta
        name='description'
        content='كيتو ستايل اول موقع عربي مختص بمجال الكيتو واخصائي الاغذية والكثير لصحة افضل'
      />
      <meta property='og:locale' content='ar_AR' />
      <meta property='og:title' content='كيتو ستايل' />
      <meta
        name='keywords'
        content='تمارين رياضية - قياس كتلة - اخصائي اغذية- وجبات كيتة'
      />

      {/* <link rel='manifest' href='/manifest.json' /> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'كيتو ستايل - KETO STYLE'
};

export default Meta;
