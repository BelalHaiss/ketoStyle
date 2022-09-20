import type { NextPage } from 'next';
import Section1 from 'src/components/Home/Section1';
import { Section2 } from 'src/components/Home/Section2';
import { Section3 } from 'src/components/Home/Section3';
import { Section4 } from 'src/components/Home/Section4';
import { Section5 } from 'src/components/Home/Section5';
import { Section6 } from 'src/components/Home/Section6';
import { Section7 } from 'src/components/Home/Section7';
import { Section8 } from 'src/components/Home/Section8';

const Home: NextPage = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
};

export default Home;
