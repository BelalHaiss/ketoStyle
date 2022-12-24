import type { NextPage } from 'next';
import Section1 from 'src/components/Home/Section1';
import { Section2 } from 'src/components/Home/Section2';
import { Section3 } from 'src/components/Home/Section3';
import { Section4 } from 'src/components/Home/Section4';
import { Section5 as Section2_5 } from 'src/components/Home/Section22';
import { Section5 } from 'src/components/Home/Section5';
import { Section6 } from 'src/components/Home/Section6';
import { Section7 } from 'src/components/Home/Section7';
import { Section8 } from 'src/components/Home/Section8';
import { Section9 } from 'src/components/Home/Section9';
import Popup from 'src/components/Home/PopUp';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (num == 0) {
      console.log('pop up');
    }
  });
  return (
    <>
      <Popup />
      <Section1 />
      <Section2 />
      <Section2_5 />
      <Section3 />
      <Section4 />
      <Section9 />
      <Section8 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Home;
