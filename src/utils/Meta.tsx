import Head from 'next/head';
const Meta = ({ title }: { title: string }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.svg' />
      {/* <link rel='manifest' href='/manifest.json' /> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Keto Style'
};

export default Meta;
