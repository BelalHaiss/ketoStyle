/* eslint-disable */

import { Flex, Heading, Text } from "@chakra-ui/react";
import { TermUtil } from "src/components/terms&policy/TermUtil";
import TermPolicy from "src/components/terms&policy/TermTable";
import { termData1, termData2 } from "src/components/terms&policy/allData";
import { useEffect } from "react";
export default function Terms() {
  useEffect(() => {
    // track Page View for snapchat
    window.handleSnap("PAGE_VIEW");
  }, []);
  return (
    <Flex w="100%" gap="2" flexDir="column" p="2">
      <Heading fontSize="xl" textAlign={"center"}>
        الشروط والأحكام
      </Heading>

      <Heading fontSize="lg">الإصدار الأخير (18 سبتمبر 2022).</Heading>
      <Heading fontSize="md">مقدمة</Heading>
      <Text>
        نعتز بزيارتكم لموقع كيتو ستايل بالمملكة العربية السعودية. موقع كيتو
        ستايل هو موقع إلكتروني متخصص في تقديم برامج الكيتو دايت مع توفير خدمات
        أخرى يمكنك الاستفادة منها حساب السعرات الحرارية وإعداد الوجبات وحساب
        كمية المياه إلى جانب الخدمات المضافة كخدمات التدريب وخدمات أخصائي
        التغذية، وندعوكم لقراءة هذه الوثيقة جيدًا فهي تمثل "عقد قانوني" بين
        الموقع كطرف أول في العقد، والعميل كطرف ثان في العقد، وتطبق هذه الوثيقة
        على العلاقة القانونية بين الطرفين أيًا كانت الوسيلة المستخدمة في التواصل
        أو تقديم الخدمة.
      </Text>
      {termData1.map((term, i) => (
        <TermUtil {...term} key={i} />
      ))}
      <TermPolicy />
      {termData2.map((term, i) => (
        <TermUtil {...term} key={i} />
      ))}
    </Flex>
  );
}
