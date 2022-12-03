/* eslint-disable */

import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { TermUtil } from "src/components/terms&policy/TermUtil";
import TermPolicy from "src/components/terms&policy/TermTable";
import { policyData } from "src/components/terms&policy/allData";
import { useEffect } from "react";
export default function Privacy() {
  useEffect(() => {
    // track Page View for snapchat
    window.handleSnap("PAGE_VIEW");
  }, []);
  return (
    <Flex w="100%" gap="2" flexDir="column" p="2">
      <Heading fontSize="xl" textAlign={"center"}>
        سياسة الخصوصية
      </Heading>
      <UnorderedList>
        <ListItem>
          موقعنا الإلكتروني "كيتو ستايل" يسعى دائمًا إلى الحفاظ على خصوصية
          بياناتك الشخصية ونمتثل في ذلك لأحكام قوانين حماية البيانات والحق في
          الخصوصية ونظام التجارة الالكترونية ولائحته التنفيذية وذلك بشأن حماية
          بياناتك الشخصية، وقد قمنا بصياغة هذه السياسة "سياسة الخصوصية" لنوضح لك
          ماهية البيانات التي نقوم بجمعها عن مستخدمي موقع كيتو ستايل، والأغراض
          التي من أجلها يتم استخدام هذه البيانات، لذا يرجى قراءة هذه السياسة
          بعناية.
        </ListItem>
        <ListItem>
          يشير مصطلح البيانات ضمن سياسة الخصوصية هذه إلى كافة البيانات المتعلقة
          بمستخدمي موقعنا وأي بيانات أخرى متعلقة بالاشتراكات الخاصة بالعميل أو
          البيانات التي من شأنها من شأنها التعريف بهوية المستخدم كذلك البيانات
          الأخرى المتعلقة بأنشطة المستخدم من خلال موقع كيتو ستايل والبيانات
          المرتبطة بالأجهزة المستخدمة في عملية الدخول إلى موقع كيتو ستايل.{" "}
        </ListItem>
        <ListItem>
          باستخدامك موقع كيتو ستايل أو طلب شراء الخدمات التي نوفرها من خلاله
          فهذا يعني موافقتك الصريحة على الشروط والأحكام وسياسة الخصوصية التي
          تعتني بالبيانات وطريقة التعامل معها.
        </ListItem>
        <ListItem>
          {" "}
          أنت تعلم أن هذه السياسة قابلة للتحديث والتعديل في أي وقت، وتتعهد
          بزيارة هذه الصفحة قبل كل عملية تقوم بها من خلال موقع كيتو ستايل.
        </ListItem>
      </UnorderedList>

      <Heading fontSize="lg">الإصدار الأخير (18 سبتمبر 2022).</Heading>
      <Heading fontSize="md">مقدمة</Heading>

      {policyData.map((term, i) => (
        <TermUtil {...term} key={i} />
      ))}
    </Flex>
  );
}
