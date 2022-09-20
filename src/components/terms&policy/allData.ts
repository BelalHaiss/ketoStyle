import {
  Flex,
  Heading,
  Table,
  Text,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
import { TermData } from './TermUtil';
export const termData1: TermData[] = [
  {
    heading: '(1) التعريفات',
    text: [
      `"كيتو ستايل" أو "الموقع" أو "نحن" أو "ضمائر المخاطب والملكية" يشير إلى موقع كيتو ستايل www.ketonestyle.com ومجموعة الطلب بالعربي وكافة خدماته الإلكترونية وكافة قنوات الاتصال الخاصة به أو التي تقدم خدماته من خلالها وكذلك كافة المجموعات التي نقوم بإدارتها.
    "العميل" أو "أنت" أو "ضمائر المخاطب" يشير إلى الشخص الذي يستخدم الموقع أو يقوم بزيارته أو يقوم بطلب أو شراء أو الاشتراك في أي من الخدمات التي نوفرها من خلال الموقع، و الذي يجب أن يلتزم بشروط وأحكام هذه الاتفاقية. 
    "الاشتراك" يشير إلى طلبات الاشتراك التي يقدمها العميل للاشتراك في أي من الخدمات التي نوفرها للعملاء والذي يكون محدد المدة وفقًا لسياسة الاشتراكات الخاصة بنا.
    "الخدمات" يشير إلى الخدمات التي نقدمها للعملاء من خلال الاشتراكات التي يقوم العميل بشرائها والتي تشمل حسب نوع اشتراكك حساب السعرات الحرارية وإعداد الوجبات وحساب كمية المياه إلى جانب الخدمات المضافة كخدمات التدريب وخدمات أخصائي التغذية.
    "الوجبات" يشير إلى وجبات الكيتو دايت التي يقوم الموقع بتحديدها للعميل ضمن أنظمة الاشتراك والتي تناسب حالة العميل وفقًا لرؤيتنا.
    "الاتفاقية" يشير إلى هذه الوثيقة التي تتضمن الشروط والأحكام والسياسات المختلفة بما في ذلك الشروط والسياسات الخاصة بشراء والاشتراك في خدمات الموقع وأي سياسات أخرى متوفرة بالموقع.`
    ]
  },
  {
    heading: '(2) وصف الخدمات',
    text: [
      `نوفر من خلال الموقع حميات غذائية متعددة ومتنوعة بهدف الوصول للوزن والشكل المثالي بطرق صحية وعلمية تحت إشراف فريق عمل الموقع.`,
      `تستطيع الاشتراك في الموقع والاستفادة من أي من الخدمات الآتية حسب نوع اشتراكك، فنوفر للعميل مجموعة من باقات الاشتراك التي يستطيع اختيار المناسب منها وكذلك مجموعة من الخدمات الإضافية.`,
      `نوفر لعملائنا من خلال الموقع وسائل دفع تناسب جميع العملاء مع الالتزام بكافة السياسات المتوفرة في هذه الوثيقة وسياسة الدفع.`,
      `تقدم الخدمات وفق الشروط الواردة في هذه الوثيقة كما نوفر الموقع وخدماتنا وفق أي سياسات أخرى متوفرة من خلال الموقع أو أي شروط إضافية خاصة بالخدمات أو المعاملات التي تتم من خلال الموقع نقوم بإشعارك بها بأي شكل من الأشكال.`
    ]
  },
  {
    heading: '(3) شروط الانضمام إلى الاتفاقية',
    text: [
      `باعتبار أن هذه الاتفاقية عقد إلكتروني بيننا وبين عملائنا، فيجب أن يتوافر في العميل الأهلية القانونية الكاملة وفق القوانين الوطنية المعمول بها في المملكة العربية السعودية.`,
      `يجب أن يطلع العميل على أحكام هذه الاتفاقية بشكل كامل قبل الاشتراك في خدمات الموقع، فدخول العميل معنا في هذه الاتفاقية و/أو شراء أو الاشتراك في أي من خدماتنا يعني اطلاعه على كافة شروطها، ويعد ملزمًا بها وبكافة الآثار القانونية الناشئة عن تطبيق أحكامها.`,
      `يجب أن يضمن العميل طوال فترة انضمامه إلى هذه الاتفاقية توافر جميع الشروط والمتطلبات المذكورة في الاتفاقية وكذلك كافة الشروط والمتطلبات المنصوص عليها في القوانين المعمول بها.`,
      `في حال فقد العميل أي شرط من شروط هذه الاتفاقية ستكون هذه الاتفاقية لاغية بالنسبة لهذا العميل مع تطبيق كافة الآثار القانونية الناشئة خلال فترة سريانها على العميل.`
    ]
  },
  {
    heading: '(4) العقد الإلكتروني',
    text: [
      `نقدم خدماتنا كاملة بشكل إلكتروني، ويتم التعامل مع جميع عملائنا بشكل إلكتروني، لذا تعد هذه الوثيقة العقد الإلكتروني بيننا وبينك يحل محل أي وثائق أو عقود خطية أو مطبوعة.`,
      `يترتب على هذه الاتفاقية باعتبارها عقد إلكتروني معترف به كافة الآثار القانونية التي ترتبها العقود الخطية بين الأطراف، ويحل هذا العقد محلها ويأخذ حكمها ويتمتع بنفس قوتها الملزمة.`,
      `يخضع هذا العقد الإلكتروني للتعديل والتحديث بشكل مستمر ليتوافق مع الخدمات التي يتم تقديمها من جانبنا، لذا يجب على العميل الاطلاع على هذه الوثيقة في كل مرة يطلب خدماتنا.`,
      `لا يجوز للعميل تفسير أو تأويل أي من شروط هذا العقد الإلكتروني، ويجب على العميل في حال عدم وضوح أي شروط واردة في هذه الاتفاقية التواصل معنا للحصول على التوضيحات والتفسيرات اللازمة.`
    ]
  },
  {
    heading: `(5) التوقيع الإلكتروني`,
    text: [
      `لن نكون بحاجة للحصول على توقيعك الخطي لقبول هذه الاتفاقية، ويعد استخدامك للموقع أو عرض الخدمات من خلال الموقع أو طلب شرائها أو الاشتراك فيها موافقة وتوقيع إلكتروني وقبول نهائي بأحكام هذه الاتفاقية، وأنت تقر بأن أي من هذه الأنشطة بمثابة توقيع رقمي من جانبك على هذه الاتفاقية ويكون ملزم لك ومعترف به أمام كافة الجهات القانونية والقضائية.`
    ]
  },
  {
    heading: '(6) مدة الاتفاقية',
    text: [
      `تكون هذه الاتفاقية ملزمة للعميل طوال مدة اشتراكه أو استخدامه لموقع كيتو ستايل أو الاستفادة منها بأي شكل من الأشكال، وتخضع هذه الاتفاقية للحق في التعديل والإلغاء وفقًا لأحكامها. ويلتزم المستخدم بكافة المعاملات التي تمت خلال فترة سريان الاتفاقية وأي التزامات قانونية ناشئة عنها.`
    ]
  },
  {
    heading: `(7) الإخطارات القانونية`,
    text: [
      `نظرًا للطبيعية الإلكترونية لخدماتنا فإن كافة الإخطارات القانونية المطلوب تبليغها وفقًا للأنظمة السعودية يتم إرسالها عبر وسائل الاتصال التي زودنا بها العميل، والتي تشمل الاتصال الصوتي عبر الهاتف أو الرسائل النصية المرسلة عبر الهاتف أو عبر البريد الالكتروني، أو من خلال الإشعارات التي يمكن إرسالها من خلال الموقع أو بأي وسيلة أخرى، وتحل هذه الإخطارات الهاتفية أو الإلكترونية محل كافة الإخطارات الخطية المطلوبة نظامًا، وتكون معتمدة بشكل رسمي بين الأطراف.`,
      `يقر كل عميل بتنازله عن أي حقوق قانونية في تلقي أي إخطارات خطية من جانبنا، ويقر العميل بأننا غير مُلزمين بتقديم الإخطارات الخطية ويحل محلها الإخطارات الهاتفية أو الإلكترونية أو الإشعارات المرسلة عبر الموقع أو بأي وسيلة إلكترونية أخرى في إنتاج آثارها القانونية على النحو المشار إليه أعلاه، ويتم الاعتداد بها أمام كافة الجهات الرسمية.`
    ]
  }
];

export const termData2: TermData[] = [
  {
    heading: `(9) شروط تسجيل الحساب`,
    text: [
      `يستطيع المستخدم تسجيل حسابه بالموقع عن طريق تزويدنا ببيانات تسجيل الحساب بالمتجر، وسوف يوفر الحساب تجربة شراء مخصصة للعميل مع تمكين العميل من إدارة اشتراكاته من خلال المتجر.
 `,
      `لتسجيل العضوية بالمتجر يجب على المستخدم تزويدنا ببياناته المطلوبة عبر الموقع في الصفحات المخصصة للتسجيل وأن يقوم بالمتابعة وتسجيل الحساب من خلال الصفحة المخصصة لذلك، ويقر العميل باطلاعه على سياسة الخصوصية التي توضح كيف نقوم بالتعامل مع بيانات العميل.
 `,
      `يجب على المستخدم تسجيل العضوية بموقع كيتو ستايل ببيانات اتصال خاصة به، حتى يتمكن من استلام أي إشعارات مرسلة له من إدارة الموقع.`,
      `
      يجب على المستخدم تسجيل العضوية بموقع كيتو ستايل ببيانات صحيحة ودقيقة وتقدم أي معلومات على مسئولية المستخدم دون تحمل المتجر أي نتائج بشأنها.
`,
      `يحظر على أي مستخدم التسجيل لدينا بأكثر من حساب بالموقع، فكل شخص يمكنه تسجيل حساب واحد بالموقع، وسنقوم بحذف جميع الحسابات في حال اكتشافنا وجود أكثر من حساب باسم شخص واحد.`,
      `يحظر على المستخدم استغلال الحساب لأغراض الاحتيال والتزوير أو عدم الالتزام بتنفيذ أي من الشروط والأحكام وسياسة الخصوصية.
`,
      `يجب على المستخدم الحفاظ على اسم المستخدم وكلمة المرور الخاصة به، وألا يقوم بالإفصاح عنهم للغير، وفي جميع الأحوال يلتزم العميل بكافة التعاملات التي تتم من خلال حسابه بالموقع.`,
      `تقدم العضوية بالموقع بنظام الترخيص بالاستخدام، وبالتالي يحق لنا سحب هذا الترخيص وإنهاء استخدام العضوية في أي وقت من الأوقات ودون إبداء أي أسباب.
 `
    ]
  },
  {
    heading: `(10) شروط الاستخدام`,
    text: [
      `يتم توفير الخدمات من خلال الموقع وفق القوانين المعمول بها في المملكة العربية السعودية، وبالتالي فأنت تلتزم بهذه القوانين بغض النظر عن الدولة التي تنتمي إليها.
 `,
      `يجب إدخال أي معلومات مطلوبة بالموقع بشكل صحيح وتكون مسئول عنها وعن دقتها وجودتها وحداثتها وقانونيتها، وتلتزم بتحديثها كلما حدث أي تغيير لها.
 `,
      `يجب أن يتم استخدام الموقع بشكل قانوني ووفق الأهداف والأغراض الموضحة من جانبنا، وأن يتسم هذا الاستخدام بالجدية وأن تبتعد عن استخدام الموقع لأغراض التدليس أو الاحتيال أو التواصل غير المشروع أو التواصل الوهمي أو الإضرار بأي طرف من الأطراف.
 `,
      `يجب على العميل إخطارنا في حالة اكتشاف أي معاملات أو ممارسات أو أنشطة غير قانونية من خلال الموقع.
 `,
      `يجب أن يحافظ العميل على سمعة الموقع وألا يسيء لها بشكل مباشر أو غير مباشر، وألا يتسبب لنا في أضرار مباشرة أو غير مباشرة، وألا يتسبب لنا في أي مطالبات قانونية.
 `,
      `يجب أن تكون التقييمات والتعليقات التي يقدمها العميل من خلال الموقع صادقة وقانونية ولا تتضمن أي تعدي على الموقع أو الجهات الأخرى.`,
      `يجب أن يكون المحتوى الذي يقدمه العميل من خلال الموقع قانوني ولا يتضمن أي اعتداء على الحقوق الخاصة بالآخرين.`,
      `
      يجب عليك الالتزام بالتعليمات الصادرة لك من جانبنا سواء تلك المتعلقة باستخدام الموقع، أو تلك المتعلقة باستخدام أي أنظمة أو برامج نقوم بتوفيرها.
`,
      `يجب عليك تقديم العون والتسهيلات اللازمة في حال قيامنا بإجراء أي تحقيقات بشأن أي استخدام نظن أنه يخالف أحكام هذه الاتفاقية أو يخالف القوانين المعمول بها أو يتسبب في نزاعات قانونية لنا أو يضر بأي من عملائنا أو الاطراف الثالثة.
`,
      `يجب استخدام الموقع في حدود الأغراض الموضحة من جانبنا من خلال أحكام هذه الاتفاقية أو تلك الموضحة من جانبنا عبر صفحات الموقع المختلفة، ويجب أن يتم استخدام هذه الخدمات بحسن نية وعدم التلاعب على الموقع أو العملاء أو الغير بأي صورة من الصور.
`,
      `يجب استخدام الموقع بشكل قانوني ومشروع ويحظر القيام بأي معاملات أو أفعال من شأنها تعريض الموقع للمساءلة القانونية أو المطالبات القضائية سواء من العملاء الآخرين أو من الأطراف الثالثة.
`,
      `الموقع مملوك بشكل كامل لنا، ونتيح لك استخدامها بنظام الترخيص بالاستخدام، وبالتالي يحظر عليك إعادة بيع أي جزء من الموقع أو استغلالها بشكل تجاري أو التربح من وراء ذلك.
`,
      `نحتفظ بكافة حقوقنا القانونية في حالة إخلال أي من عملائنا بحقوقنا القانونية والمشروعة أو بحقوقنا المنصوص عليها في هذه الاتفاقية، سواء كانت تلك الحقوق مالية أو غير مالية.
`,
      `الترخيص الذي نمنحه لك غير حصري، وبالتالي يحق لنا في أي وقت منح الترخيص لعدد لا نهائي من العملاء، كما أن الترخيص محدود وهذا يعني أنك تتمتع بالحقوق المنصوص عليها بشكل صريح في هذه الاتفاقية فقط، أما أي حقوق أخرى غير منصوص عليها في هذه الاتفاقية فهي غير ممنوحة لك وبالتالي نحتفظ بها لأنفسنا ولا يجوز لك استعمال هذه الحقوق إلا بعد الحصول على موافقة صريحة منا.
`,
      `في حال تجاوز العميل لنطاق الاستخدام المرسوم من جانبنا، سنقوم بتعطيل الموقع بالنسبة له وحظر تقديم الخدمات له مستقبلاً، كما سنقوم بتعطيل أي حساب أو رقم تواصل مسجل لدينا باسم العميل، ويحظر على العميل التسجيل لدينا مرة أخرى دون الحصول على موافقة صريحة منا.
`,
      `نحتفظ لأنفسنا بالحق في إجراء أية تعديلات أو تحسينات على الخدمات أو السياسات الخاصة بنا، وسنقوم بذلك وفق شروط هذه الاتفاقية. 
`,
      `في حال مخالفة العميل لأي شروط منصوص عليها في هذه الوثيقة يحق لنا وقف تقديم الخدمات له فورًا وحظره من التواصل معنا عبر أي وسيلة اتصال متاحة.
`
    ]
  },
  {
    heading: '(11) سياسة تقديم الخدمة',
    text: [
      `يكون الاستفادة من البرامج الغذائية والرياضية عن طريق الجداول أو التوجيهات التي نقوم بإرسالها للعميل من خلال وسائل التواصل المتاحة، وبالتالي يتم تقديم الخدمة بشكل إلكتروني وعن بُعد دون أي التزام علينا أو على فريق العمل بالتواصل المادي مع العميل.
    `,
      `يتحدد الاشتراك في الموقع في البرامج الغذائية والبرامج الرياضية التي نرسلها لك، ولا يمنحك الاشتراك أي حقوق في أي برامج أخرى غير مشترك فيها إلا بعد سداد قيمة الاشتراك.
    `,
      `يحظر على العميل بعد قيامنا بإرسال الحمية له طلب تغييرها بحمية أخرى إلا بعد دفع رسوم اشتراك جديدة المحددة لهذه الحمية.
    `,
      `نحن غير مسئولين عن توفير أي خصائص أو مميزات للخدمات التي يقوم العميل بشرائها من خلالنا، وسوف يتم الالتزام بالمواصفات والخصائص المحددة للخدمة قبل الاشتراك فيها.`,
      `يحظر القيام بأي شكل من الأشكال بالتحقير أو الاستخفاف أو التقليل من البرامج الغذائية أو البرامج الرياضية التي نقدمها للعملاء أو التشهير بالبرامج التي نوفرها، وفي حال المخالفة يحق لنا معاقبتك بالحرمان من التواصل معنا والمتابعة عن طريق الموقع أو غير ذلك من وسائل التواصل.
`,
      `يحظر على العميل مشاركة أي برامج غذائية أو برامج رياضية أو غيرها من المعلومات والمحتوى مع أي شخص أو جهات أخرى أو إعادة بثها أو نشرها عبر شبكة الانترنت بأي شكل من الأشكال. كما يحظر نشر صور لصفحات موقعنا الداخلية أو الوصفات التي نوفرها من خلال الموقع أو بأي طريقة أخرى.
`,
      `يحظر على العميل تصوير المحادثات مع أخصائي التغذية أو نشر هذه المحادثات أو عمل مشاركة لها أو نسخها أو نقلها بأي طريقة كانت.
`,
      `يحظر على العميل الإتجار في الخدمات التي نوفرها بما في ذلك الخدمات المدفوعة التي قام بشرائها، ولا يمنحك الاشتراك أو شراء خدماتنا الحق في إعادة بيع أو إعادة الترخيص للغير أو مشاركة الملفات أو الجداول أو المعلومات بمقابل أو دون مقابل باستخدام هذه الخدمات أو الاستفادة منها بأي طريقة سواء بشكل مباشر أو غير مباشر.
`,
      `نقدم المعلومات والتوجيهات والجداول وفق رؤيتنا وبالتالي يستفيد العميل من الخدمات كما نوفرها له، وعليه يتبع العميل التعليمات والتوجيهات، ويجب على العميل الالتزام بتلك التوجيهات للحصول على النتائج المطلوبة.
`,
      `في حال عدم التزام العميل بالتوجيهات والجداول المرسلة له فإننا لن نتحمل أي مسئولية أو نتائج متعلقة بعدم استفادة العميل من الخدمات وسيرجع ذلك لتقصير العميل في تنفيذ التوجيهات.
`,
      `يجب على العميل تنفيذ البرامج الغذائية والرياضية بشكل دقيق حتى يحقق العميل الأهداف المرجوة، وأن يتم التنفيذ خلال المواعيد والأوقات المحددة وبالكميات المحددة كذلك.
`,
      `يتم توقع الوزن والسعرات الحرارية بناءً على معادلات رياضية ثابتة وهي مجرد توقعات تقديرية فيها نسبة خطأ وإن كانت ضئيلة جداً.
`
    ]
  },
  {
    heading: `(12) الاستشارة والخدمات الطبية`,
    text: [
      `أنت تعلم وتقر بأن المعلومات والتعليمات والتوجيهات والجداول والبرامج الغذائية والبرامج الرياضية التي نرسلها لك لا تعد استشارة طبية أو توصية أو وصفة أو علاج أو غير ذلك من الأمور الطبية.
`,
      `لا نقدم أي خدمات طبية للعملاء، ولا تعد الخدمات التي نوفرها خدمات طبية أو استشارات طبية، وتقتصر الموقع على الأغراض المحددة فقط.
`,
      `في حال وجود أي مشكلة طبية لدي العميل أو عدم تناسب الموقع مع الحالة الصحية للعميل فيجب عليه التواصل مع طبيبه الخاص فورًا دون أدنى مسئولية قانونية علينا.
`,
      `في حالات الأمراض المزمنة ننصح بعدم استخدام خدماتنا، فإذا كان العميل يعاني من مرض مزمن يجب عليه عدم التسجيل في الموقع أو طلب الاشتراك في خدماتنا.
`,
      `الموقع غير مسئول عن أي مضاعفات صحية قد تحدث أو من الممكن أن تحدث نتيجة سوء الاستخدام من جانب العميل أو الاعتماد على أي معلومات غير دقيقة.
`
    ]
  },
  {
    heading: '(13) توفير البيانات',
    text: [
      `قد نطلب من العميل بعض البيانات التي نحتاجها بشكل ضروري لتقديم الخدمات للعميل والتي تشمل بعض البيانات الشخصية.
    `,
      ` يتم استغلال بياناتك للأغراض المحددة من جانبنا، وأنت تمنحنا الحق في التعامل مع بياناتك وترخص لنا باستغلالها للأغراض الخاصة بالموقع.
    `,
      `لا نحتفظ بأي من بياناتك المصرفية ويجب عليك إدخالها في كل مرة تقوم بشراء الخدمات أو سداد قيمة الاشتراكات من خلالنا.
    `,
      `أنت المسئول عن توفير الأمان لبياناتك التي لا تقدم لنا بشكل حصري، فلا نملك أي سيطرة إلا على البيانات التي تقدمها لنا بشكل حصري أما البيانات التي توفرها لنا وتكون متاحة لأطراف أخرى لن نكون مسئولين عن أمانها بأي شكل من الأشكال.
    `
    ]
  },
  {
    heading: '(14) التوثيق',
    text: [
      `نحن غير مسئولين عن توثيق أي بيانات توفرها لنا، وأنت تقدم لنا البيانات على مسئوليتك الشخصية وفي حال قدمت أي بيانات خاصة بالغير أو أي بيانات غير مفوض بتقديمها فسوف تتحمل المسئولية القانونية كاملة دون أدنى مسئولية قانونية علينا.
    `,
      `قد نطلب منك توثيق وسيلة الدفع التي تستخدمها في المدفوعات عبر الموقع، ويتطلب ذلك إثبات ملكية وسيلة الدفع، فقد يتم رفض الطلبات قبل أو بعد الدفع إذا لم تتمكن من إثبات ملكية وسيلة الدفع الخاصة بك، وهذا إجراء احترازي لضمان قانونية المعاملات التي تتم من خلال الموقع وعدم استغلال الموقع لأغراض غسيل الأموال أو استخدام الأموال غير المشروعة.
    `
    ]
  },
  {
    heading: '(15) السرية',
    text: [
      `تلتزم بالحفاظ على سرية كافة المراسلات والمعاملات والرسائل التي تتلقاها من خلال وسائل الاتصال الخاصة بنا بما في ذلك المجموعات وغيرها من وسائل الاتصال الجماعية أو الخاصة.
    `,
      `يحظر نسخ محتوى الرسائل أو اقتباسه أو عمل تصوير للشاشة أو عمل أي عمليات نشر أو مشاركة لمحتوى الرسائل من خلال أي وسيلة إلكترونية أو مادية.
    `,
      `يحظر استغلال أي برامج أو تقنيات أو أدوات تهدف إلى جمع البيانات من خلال الموقع أو أي وسيلة اتصال أخرى، وفي حال قيامك بذلك فإنك تتحمل المسئولية القانونية عن استغلال هذه الأدوات بشكل غير مصرح به.
    `,
      `يحظر استغلال أي بيانات خاصة بنا أو خاصة بعملاء آخرين في أي عمليات أو مشاركات أو غير ذلك من عمليات التسويق أو الترويج أو لأغراض إنشاء المجموعات أو إرسال الرسائل دون سابق إذن أو التواصل بأي شكل من الأشكال مع أصحاب البيانات.
    `
    ]
  },
  {
    heading: '(16) شروط والتزامات العميل',
    text: [
      `يلتزم بتوفير بيانات صحيحة من خلال الموقع وأن تكون هذه المعلومات متوافقة مع أي بيانات مطلوبة من خلال الموقع، ويلتزم العميل بكافة المعاملات والطلبات التي تتم من خلال حساب التواصل الخاص به سواء هو من قام بالمعاملات أو أي شخص آخر، فلا يجوز الادعاء بعد الاشتراك في الموقع أن شخص آخر هو من قام بالاشتراك في الموقع وعليه لا يجوز الاسترداد.
    `,
      `يجب أن يكون العميل مؤهل نظامًا لتقديم طلبات الشراء من خلال الموقع، فإذا كان العميل غير مكتمل الأهلية فيجب أن تتم طلبات الشراء من خلال وليه الجبري أو الوصي ونحن غير ملزمين بالتحقق من أهلية أي من العملاء.
    `,
      `يتعين على العميل الاطلاع على المعلومات ووصف الخدمات التي نوفرها من خلال الموقع، وأن يتأكد من الخدمات بنفسه عن طريق القراءة الدقيقة لوصف الخدمة أو التواصل معنا قبل شراء الخدمة من خلال الموقع.`,
      `يعلم ويقر العميل بأن جميع الخدمات التي يحصل عليها من خلالنا يتم تقديمها من جانبنا أو من جانب فريق العمل التابع لنا وأنت توافق على الاستفادة من الموقع من جانب الأشخاص المتخصصين المتعاقدين معنا تحت إشرافنا.
      `,
      `يعلم ويقر العميل بأن وصف الخدمات والاتفاق السابق على تقديم الخدمات سوف يكون ملزم له ولا يحق للعميل مطالبتنا بأي خصائص أو ميزات إضافية بعد الشراء إلا إذا وافقنا عليها صراحة سواء بمقابل أو دون مقابل.
      `,
      `يكون العميل مسؤول بشكل كامل عن كافة المعلومات والمرفقات التي يقوم بتزويدنا بها، ويتحمل نتيجة أي خطأ أو تأخير ينشأ عن عدم دقة هذه المعلومات أو وجود أي أخطاء بها.`,
      `يلتزم العميل بالسعر الذي قام بالشراء به من خلال الموقع ويعلم أن هذه الأسعار نهائية ويضاف إليها أي رسوم مطلوبة أو ضرائب حكومية.
      `,
      `يلتزم العميل بطلب الخدمات لأغراض قانونية ويحظر على العميل استغلال الموقع ومحاولة الحصول على الموقع بشكل غير قانوني أو لغرض ارتكاب أي جريمة قانونية أو أي عمل آخر محظور قانونًا.
      `,
      `يعلم العميل أن تقديم الطلبات عبر الموقع يعد قبول نهائي بالخدمات التي طلبها ولا يجوز للعميل طلب إرجاع أو إلغاء طلب الخدمات إلا وفقًا لأحكام هذه الاتفاقية.
      `,
      `يكون العميل مسؤول بشكل كامل عن الخطأ في اختيار وطلب الخدمات من خلالنا، ويلتزم العميل بعملية الشراء مادامت متوافقة مع بيانات الطلب المقدم منه عبر الموقع.
      `,
      `يلتزم العميل بدفع قيمة الخدمات التي طلب شرائها من خلالنا، وذلك من خلال وسائل الدفع المعتمدة من جانبنا.
      `,
      `نحن غير ملزمين بدفع أي تعويضات أو مبالغ مالية للعميل نظير أي أضرار يتعرض لها نتيجة استخدام سوء استخدام خدماتنا، ويجب على العميل الحرص أثناء طلب أو استخدام خدماتنا.
      `,
      `يلتزم العميل بأن يكون تقييمه للخدمة المقدمة من قِبلنا لا يتضمن أي إساءة أو ألفاظ نابية وأن يكون النقد أو التقييم في حدود المسموح به قانونًا.
      `,
      `يلتزم العميل بكافة الشروط والأحكام المنصوص عليها في هذه الوثيقة، ويقر بأنها التزامات عقدية لا يجوز التحلل منها لأي سبب من الأسباب.
      `
    ]
  },
  {
    heading: `(17) سياسة الإلغاء`,
    text: [
      `لا يحق للعميل المطالبة بإلغاء الاشتراك أو الخدمات التي قام بشرائها بعد الدفع حيث أن الخدمات التي نوفرها جميعها إلكترونية وغير قابلة للاسترجاع أو الإلغاء.
    `,
      `يحق لنا إلغاء الطلبات لأي سبب من الأسباب وفقًا لرؤيتنا.
    `
    ]
  },
  {
    heading: `(18) سياسة التقييمات`,
    subHead: `نتيح للعميل تقييم الخدمات التي يحصل عليها من خلالنا، ويجب أن تخضع التقييمات للشروط والضوابط الآتية:`,
    text: [
      `يجب أن يكون العميل قد قام بعملية شراء صحيحة من خلال الموقع سواء تم تنفيذ الطلب بشكل كامل من خلال الموقع أو تم إلغاء الطلب لأي سبب.
    `,
      `يجب أن يكون التقييم بكلمات مناسبة، وأن يكون متعلق بالخدمة أو تنفيذها، وأن يكون التقييم بناء لأغراض تحسين وتطوير الخدمات أو إبراز مميزاتها أو سلبياتها.
    `,
      `يجب أن يكون التقييم لائق وألا يتضمن عبارات مسيئة لنا أو لفريق العمل أو أي عميل آخر أو الأطراف المعنية داخل الموقع أو موظفينا أو جهات أخرى.
    `,
      `يجب ألا يسئ التقييم لأي خدمات أخرى غير تابعة لنا، كالأشخاص والتطبيقات والمواقع المنافسة أو غير ذلك من الخدمات الأخرى.
    `,
      `يجب ألا يتضمن التقييم محتوى دعائي أو إعلاني أو رسائل متكررة أو محتوى منسوخ وملصق أو غير ذلك من المحتويات التي لا ترتبط بالغرض من التقييم.
    `,
      `يحق لنا حذف التقييمات التي تخالف أحكام هذه السياسة أو أي بنود أخرى منصوص عليها في هذه الاتفاقية.
    `,
      `نحتفظ بحقنا القانوني في اقتضاء أي تعويضات مناسبة في حالة الإضرار بمصالحنا من خلال خدمة التقييم.
    `,
      `يحق لكل متضرر من التقييمات غير القانونية التي تتم من خلال الموقع اتخاذ الإجراءات القانونية التي تحفظ حقوقه المشروعة.
    `,
      `التقييم في النهاية يعبر عن رأي كاتبه، فالتقييم المتاح من خلال الموقع لا يتجاوز حدود التجربة الشخصية الخاصة بالعميل.
    `
    ]
  },
  {
    heading: `(19) سياسة المحتوى`,
    text: [
      `نتيح من خلال الموقع العديد من العناصر كالنصوص والرسومات والصور بكافة أشكالها وأنواعها والشعارات والرسوم التوضيحية والشروحات والبيانات والمواد الأخرى المقدمة من جانبنا على أو من خلال الموقع المختلفة، ويجب أن يكون استخدامك لهذه العناصر لأغراض تقديم الخدمات أو الاستفادة منها.`,
      `إن توفير المحتوى من خلال الموقع من جانبنا واختياره وتجميعه وترتيبه من المحتمل أن يحتوي على أخطاء أو إغفال أو أخطاء إملائية أو أن يكون غير محدث أو متزامن أو لا يتم مراجعته بشكل دائم، وبالتالي فأنت تعفينا من أي مسئولية ناشئة عن ذلك، وتتعهد بالتحقق من هذا المحتوى بنفسك قبل الاعتماد عليه.
`,
      `نتيح للعميل توفير المحتوى من خلال الموقع، ويقر العميل بأن هذا المحتوى يقدم على مسئوليته الخاصة، ونحن لا نتحمل أي مسئولية قانونية في حال مخالفة هذا المحتوى لأي من القوانين المعمول بها أو لأي حق من حقوق الأطراف الثالثة أو الأشخاص الآخرين.
`,
      `يجب أن يكون المحتوى المقدم من العميل عبر الموقع لأغراض تقديم الخدمات أو الاستفادة منها، ويحظر تقديم محتوى يتضمن إساءة أو تشويه للسمعة أو كيدي أو لأغراض التضليل أو الاحتيال علينا أو لأي أغراض غير قانونية.
`,
      `يكون العميل مسئول بشكل كامل عن الأضرار التي يسببها المحتوى الذي يقدمه لغيره لفريق العمل التابع لنا أو الأطراف الثالثة، سواء كانت الأضرار مباشرة أو غير مباشرة.
`,
      `يحق لنا حذف أي محتوى مقدم من خلال الموقع في أي وقت، سواء كان المحتوى خاص بنا، أو خاص بالعملاء، وقد لا نقوم بتقديم إخطارات في هذه الحالة، لذا إذا كنت تعتقد أن المحتوى الخاص بك تم حذفه بطريق الخطأ فيجب عليك التواصل معنا وتقديم شكوى بذلك.
`
    ]
  },
  {
    heading: `(20) الإبلاغ عن المحتوى`,
    text: [
      `أنت تعلم أننا غير ملزمين بمراجعة المحتوى المقدم من خلال الموقع في جميع الأوقات، فإذا رأيت أن المحتوى غير قانوني أو يخالف هذه الاتفاقية أو ينتهك أي حق من حقوقك، عليك إبلاغنا على الفور عبر وسائل الاتصال المتاحة بالصفحة الرئيسية للموقع وسوف نقوم بمراجعة المحتوى واتخاذ الإجراءات المناسبة بما في ذلك حذف المحتوى.
    `,
      `إذا كنت صاحب محتوى وترى أن المحتوى الذي تم الإبلاغ عنه يتوافر فيه جميع الشروط القانونية ولا يتعارض مع هذه الاتفاقية ولا ينتهك أي حق من حقوق الغير عليك التواصل معنا على الفور وتقديم شكوى مضادة مدعمة بالأدلة وسنقوم بمراجعتها، وقد نقوم بإعادة المحتوى الذي تم حذفه مرة أخرى، ومع ذلك أنت تعلم أن الطبيعة التقنية للموقع قد تفرض علينا استحالة إرجاع المحتوى، لذا سيكون متاح لك إعادة نشر هذا المحتوى مرة أخرى من خلالنا.
    `
    ]
  },
  {
    heading: `(21) حقوق الملكية الفكرية`,
    text: [
      `الموقع وجميع عناصرها المادية والمعنوية مملوكة ملكية خاصة لنا، ولا يجوز تقليده أو نسخه أو إعادة استغلاله بأي شكل من الأشكال. وجميع المحتويات الخاصة بالموقع من (محتوى، جداول، تعليمات وتوجيهات، قوائم، نصوص، صور، فيديو، رموز، أرقام، حروف، أيقونات، أزرار، موسيقى، بيانات، معلومات) خاضعة للحماية القانونية بموجب القوانين المعمول بها في المملكة العربية السعودية والاتفاقيات الدولية، ويحق لنا اتخاذ الإجراءات القانونية في حالة الاعتداء عليها.
    `,
      `أي اعتداء على حقوق التأليف والنشر الخاصة بنا، سنقوم معها باتخاذ كافة الإجراءات القانونية ضد مرتكب العمل غير المشروع بما يحفظ كافة حقوقنا المالية والأدبية.
    `,
      `"كيتو ستايل" علامة تجارية خاصة بنا لا يجوز استخدامها أو تقليدها. وقد يكون متوفر من خلال الموقع علامات تجارية خاصة بالغير، وفي حالة اعتداء أي من العملاء عليها فيحق لأصحابها الدفاع عنها واتخاذ الإجراءات القانونية ضد العميل.
    `,
      `يحق لنا وضع العلامة التجارية الخاصة بنا أو شعارات أو علامات مميزة أو علامات خدمة على أي محتوى يقدمه العميل عبر الموقع.
    `
    ]
  },
  {
    heading: `(22) المسئولية القانونية`,
    text: [
      `يكون العميل مسئول مسئولية شخصية عن كافة الأفعال والأنشطة التي يقوم بها من خلال الموقع، ولن نكون مسئول بالتضامن أو بالتبعية عن أي من العملاء.
    `,
      `يكون العميل مسئول مسئولية شخصية عن أي طلبات وهمية يقوم بتقديمها من خلال الموقع يكون الهدف منها إزعاجنا أو أي أغراض أخرى تتنافى مع مبدأ التعامل بحسن نية.
    `,
      `يكون العميل مسئول مسئولية شخصية عن أي عمليات احتيالية أو تدليس أو غش يقوم بها من خلال الموقع.
    `,
      `يكون العميل مسئول مسئولية شخصية في حالة عدم التزامه بالالتزامات المفروضة عليه بموجب هذه الشروط أو السياسات المطبقة.
      `,
      `يكون العميل مسئول مسئولية شخصية في حالة إخلاله بالقوانين المعمول بها في المملكة العربية السعودية، أو القوانين المعمول بها في بلده، ولن تكون الموقع مسئول بالتضامن أو بالتبعية عن أي من العملاء.
      `,
      `يحق لكل طرف من أطراف الاتفاقية الرجوع على الطرف الآخر في حالة الإخلال بأي من حقوقه القانونية أو أي من حقوقه المنصوص عليها في هذه الاتفاقية.
      `,
      `يتحمل العميل المسئولية القانونية في حالة إخلاله بأي حق من حقوقنا بموجب هذه الشروط والأحكام أو الاعتداء على أي حق من حقوقنا أو ملكيتنا للموقع أو أي من عناصرها.
      `,
      `يتحمل العميل المسئولية القانونية في حال تقديم أي بيانات كاذبة أو مضللة لنا، أو تقديم أي بيانات خاصة بالغير أو أي بيانات يكون العميل غير مفوض بتقديمها لنا.
      `
    ]
  },
  {
    heading: `(23) إخلاء المسئولية`,
    text: [
      `يخلي العميل مسئوليتنا عن كافة الأنشطة غير المشروعة غير التابعة لنا التي قد تحدث عبر الموقع، فنحن لا نستطيع السيطرة على كافة الأفعال التي تتم من خلاله ويجب على المتضرر إبلاغنا لاتخاذ اللازم نحو وقف مصدر الضرر.
    `,
      `الموقع قد تتوقف من وقت لآخر، وقد تنقطع الموقع أو تتوقف بشكل دائم سواء لأسباب إرادية أو غير إرادية، وبالتالي فأنت تعفينا من أي مسئولية قانونية في حالة التوقف الدائم أو المؤقت للموقع أو أي من خدماتها.
    `,
      `أنت تعلم وتوافق على أنك تستخدم كافة الموقع على مسئوليتك الشخصية، ولن نكون مسئولين في مواجهة أي من العملاء لأي سبب ناتج عن استخدام الموقع أو خدماته أو تنفيذ شروطنا وسياساتنا.
    `,
      `نحن غير مسئولين عن أي أخطاء في المحتوى أو وصف الخدمات التي نوفرها من خلال صفحات الموقع، ويجب على العميل إبلاغنا على الفور في حال وجود مثل هذا المحتوى.
    `,
      `نحن غير مسئولين بالنيابة عن العميل في أي حال من الأحوال، وسنقدم المساعدة للجهات المختصة في حال طلبها ذلك، حتى لو تطلب الأمر الكشف عن معاملات أو بيانات العميل لجهات التحقق المختصة.`
    ]
  },
  {
    heading: `(24) التعويضات`,
    text: [
      `نحن لا نقدم أي نوع من أنواع التأمين أو التعويضات لأي من العملاء، سواء عن الأضرار الناشئة عن خطأ غير متعمد أو جسيم من جانبنا أو من جانب موظفينا وكذلك عن أي خطأ متعمد أو غير متعمد من جانب الأطراف الثالثة.
    `,
      `يلتزم العميل بتعويضنا تعويضًا كاملاً عن كافة الأضرار المادية والمعنوية التي تنشأ عن الأفعال غير المشروعة التي يقوم بها من خلال الموقع، أو الناشئة بشكل عام عن استخدامه للموقع أو عدم الالتزام بأي من الشروط والأحكام أو عدم الالتزام بالقوانين المعمول بها.
    `
    ]
  },
  {
    heading: `(25) الاتصالات والإشعارات`,
    text: [
      `نقوم بالتواصل معك من وقت لآخر من خلال بيانات الاتصال التي قدمتها لنا، وبموجب هذه الاتفاقية فأنت تفوضنا بالتواصل معك إلكترونيًا أو هاتفيًا.
    `,
      `في حال عدم رغبتك في تلقي الاتصالات منا يجب عليك إخطارنا وسنتوقف فورًا عن التواصل معك، ولكن هذا يعني أن الموقع قد تتوقف بالنسبة لك بشكل دائم.
    `,
      `أي إشعارات نرغب في إبلاغها للعملاء تتم من خلال بيانات الاتصال الخاصة بهم، ويفترض علم العميل بالإشعار بمجرد قيام قيامنا بإرساله له. 
    `,
      `في حالة رغبة العميل في إرسال الإشعارات لنا يجب أن يتم ذلك من خلال وسائل الاتصال الخاصة بنا المتاحة عبر صفحات الموقع.
    `
    ]
  },
  {
    heading: `(26) التعديلات والإضافات`,
    text: [
      `أنت تعلم وتوافق على أن الموقع قد يتم تعديلها أو تحديثها بشكل مستمر، كما أن شروطنا وأحكامنا قد يتم تعديلها أو تحديثها أو الإضافة عليها من وقت لآخر. وتتحمل أنت مسئولية مراجعة هذه الاتفاقية بشكل دوري لمراجعة أي تعديل على تلك الشروط والأحكام، ويعد استخدامك أو وصولك للموقع بعد التعديلات التي قمنا بها موافقة صريحة منك عليها وقبولاً بالأحكام الجديدة.
    `,
      `تطبق التعديلات والإضافات على كافة استخدامك وكافة طلبات الاشتراك الجديدة أو طلبات تجديد الاشتراك.
    `
    ]
  },
  {
    heading: `(27) الإلغاء`,
    text: [
      `يحق لنا إلغاء أي من الخدمات المتاحة من خلالنا أو تعديل الموقع بشكل كامل أو تغييرها أو تغيير نشاطها. 
    `,
      `يحق لنا إلغاء الشروط والأحكام أو استبدالهم في أي وقت دون أن يتطلب ذلك الحصول على موافقتك. 
    `
    ]
  },
  {
    heading: `(28) الفسخ`,
    text: [
      `   تعد هذه الاتفاقية مفسوخة من تلقاء ذاتها مع العميل الذي يخالف أي من الشروط والأحكام المنصوص عليها فيها، أو الإخلال بالحقوق المالية الخاصة بنا، أو الإخلال بأي من القوانين المعمول بها في المملكة العربية السعودية.
    `,
      `في حال فسخ الاتفاقية بالنسبة للعميل نحتفظ بكافة حقوقنا القانونية في المطالبات والتعويضات القضائية عن الاستخدام غير المشروع من جانب العميل.
    `,
      `يحظر على العميل الوصول للموقع في حالة فسخ الاتفاقية دون الحصول على موافقتنا الصريحة، وفي حال مخالفة العميل ذلك سنقوم بحجب وصوله للموقع.
    `
    ]
  },
  {
    heading: '(29) حوالة الحق وحوالة الدين',
    text: [
      `يحق لنا تحويل كافة حقوقنا القانونية وهو ما يعرف بحوالة الحق إلى أي أشخاص آخرين، كما يحق لنا تحويل كافة التزاماتنا إلى أي أشخاص آخرين وهو ما يعرف بحوالة الدين، وذلك دون الرجوع إلى العميل أو الحصول على موافقته.
    `,
      `لا يحق للعميل تحويل أي من حقوقه والتزاماته بنظام حوالة الحق أو حوالة الدين دون الحصول على موافقتنا الصريحة، ويقع باطلاً كل تنازل من العميل عن حقوقه أو نقل التزاماته للغير.
    `
    ]
  },
  {
    heading: `(30) القانون`,
    text: [
      `يخضع تفسير وتنفيذ بنود هذه الوثيقة للأنظمة المعمول بها في المملكة العربية السعودية، ولا تقتصر هذه الشروط على البنود الواردة فيها وإنما تمتد لتشمل كافة النصوص القانونية المنظمة للعلاقات المدنية والتجارية المعمول بها في المملكة العربية السعودية طالما كانت قواعد مكملة ولا تتعارض بشكل مباشر أو غير مباشر مع البنود الواردة في هذه الوثيقة.
    `
    ]
  },
  {
    heading: `(31) الاختصاص القضائي`,
    text: [
      `يختص القضاء السعودي بالفصل في أي نزاع ينشأ بشأن تفسير أو تنفيذ أي بند من بنود هذه الوثيقة، وفي حالة استبعاد أي بند بموجب حكم قضائي فإن ذلك لا يخل بصلاحية البنود الأخرى وتظل سارية ومنتجة لآثارها القانونية ما لم نقم بإلغاء الاتفاقية.
    `
    ]
  },
  {
    heading: '(32) اللغة العربية',
    text: [
      `تم صياغة هذه الوثيقة باللغة العربية، وفي حالة ترجمتها لأي لغة أخرى فإن النص العربي هو المعمول به أمام كافة الجهات الرسمية وغير الرسمية إذا تعارضت الترجمة الأجنبية معه.
    `
    ]
  },
  {
    heading: `(33) الاتصال بنا`,
    subHead: `إذا كان لديك أي اتصال متعلق بالموقع يمكنك التواصل معنا عبر:`,
    text: [
      `رقم الهاتف +13126101416
    `,
      `الواتساب +13126101416
    `
    ]
  }
];

export const policyData: TermData[] = [
  {
    heading: '(1) بيانات الحساب',
    text: [
      `يقوم المستخدم بتزويدنا ببيانات تسجيل الحساب الأخرى التي قدم تشمل (الاسم، العمر، الوزن، الحالة الصحية، تفضيل الوجبات، رقم الجوال، البريد الالكتروني، الجنس، الطول).
    `,
      `أثناء عملية التسجيل يجب أن يوافق المستخدم على الشروط والأحكام وسياسة الخصوصية، وهذا يعني اطلاعه على كافة أحكامهم وموافقته عليها.
    `,
      `إن تسجيل حسابك لدينا يعني موافقتك على التواصل مع فريق عمل الموقع بما في ذلك المدربين وأخصائيين التغذية لأغراض تقديم الخدمات.
    `,
      `تقدم كافة البيانات من المستخدم على مسئوليته الشخصية ويلتزم بالدقة في البيانات التي يقدمها لنا. ويعلم المستخدم ويوافق على أن بعض هذه البيانات مرئية وسوف تظهر لجميع مستخدمي الموقع كالاسم وصورة الحساب الذي تم إضافة التقييمات من خلاله.
    `
    ]
  },
  {
    heading: '(2) طلبات الاشتراك',
    subHead: `يقدم لنا العميل أثناء تقديم طلبات الاشتراك من خلال موقع كيتو ستايل بعض البيانات والتي تشمل:
    `,
    text: [
      `تسجيل الدخول إلى موقع كيتو ستايل أو تسجيل حساب جديد بموقع كيتو ستايل.
  `,
      `بيانات العميل.
  `,
      `طريقة الدفع أو السداد (باي بال حاليًا).
  `,
      `مواصفات الاشتراك الذي يرغب العميل في الاشتراك به.
  `,
      `الخدمات الإضافية التي يرغب العميل بالحصول عليها.
  `,
      `ملاحظات الطلب "إن وجدت".
  `
    ]
  },
  {
    heading: '(3) بيانات الدفع',
    text: [
      `نجمع بيانات الدفع التي قدمها لنا العميل من خلال موقع كيتو ستايل لدفع مقابل الخدمات إلكترونيًا من خلالنا والتي قد تشمل في الوقت الراهن الدفع من خلال باي بال، وقد نقوم بإضافة وسائل دفع أخرى من خلال موقع كيتو ستايل.
    `,
      `قد نتيح من خلال موقع موقع كيتو ستايل بوابة دفع إلكتروني، وفي هذه الحالة سوف نتعاقد مع مزود خدمة دفع إلكتروني لتقديم الخدمة من خلال موقع كيتو ستايل، وأنت تفوضنا بالتعامل مع مزود خدمة الدفع نيابة عنك.
    `
    ]
  },
  {
    heading: '(4) المحتوى',
    text: [
      `يزودنا العميل ببعض المحتوى عن وصف حالته من خلال الموقع أو أثناء الاتصال بفريق العمل التابع لنا. كما يتم تسجيل طلبات الاشتراكات الخاصة بك في سجل الطلبات والمشتريات بالموقع. كذلك يوفر لنا العميل محتوى الرسائل والتعليقات من خلال موقع كيتو ستايل على مسئوليته الشخصية.
    `,
      `يزودنا المستخدم بمحتوى الرسائل التي يقوم بإرسالها إلى موقع كيتو ستايل للاستفسار عن محتوى الخدمات أو طلب الاشتراكات من موقع كيتو ستايل.
    `,
      `نجمع البيانات التي تقدمها لنا للإبلاغ عن التعليقات أو المشكلات التي تخالف الشروط والسياسات الخاصة بموقعنا الإلكتروني.
    `
    ]
  },
  {
    heading: '(5) بيانات الاتصال',
    text: [
      `يزودنا العميل برقم وبيانات الاتصال به، عندما يقوم بالاتصال بنا من خلال موقع كيتو ستايل سواء عبر موقع كيتو ستايل أو عبر البريد الالكتروني أو عبر أي وسيلة تواصل أخرى.
    `,
      `نتيح للمستخدم التواصل معنا عبر وسائل التواصل الاجتماعي المتاحة بالصفحة الرئيسية لموقع كيتو ستايل.
    `,
      `نجمع البيانات التي تقدمها لنا أثناء التواصل معنا للاستفسار عن أي من خدماتنا أو مواجهة المشكلات التي تواجه استخدامك للموقع.
    `
    ]
  },
  {
    heading: '(6) البيانات التي يتم جمعها تلقائيًا',
    text: [
      `يجمع موقع كيتو ستايل بعض البيانات الخاصة بالمستخدمين، والتي لا تحدد هوية المستخدم أو بيانات الاتصال به، ويتم جمع هذه البيانات بشكل تلقائي والتي تشمل على سبيل المثال (بيانات الأجهزة المستخدمة في عمليات الاتصال، ووقت الاتصال، ومدته، ومكان الاتصال، وعنوان IP، الصفحات التي يتم زيارتها، فئات الإعلانات التي يستهدفها المستخدم).
    `
    ]
  },
  {
    heading: '(7) ملفات تعريف الارتباط (سياسة الكوكيز)',
    text: [
      `يعتمد موقع كيتو ستايل www.ketonestyle.com تقنية ملفات تعريف الارتباط "الكوكيز" والتي هي عبارة عن ملفات صغيرة تخزّن ضمن القرص الصلب من جهاز الكمبيوتر الخاص بك. وعندما تقوم بزيارة صفحات إلكترونية محددة من موقعنا الإلكتروني، تقوم ملفات الكوكيز بتعريف المتصفح الخاص بك من خلال رقم مميز وعشوائي دون أن تكشف عن أي معلومات شخصية متعلقة بك. تساعدنا ملفات الكوكيز على تحسين تجربتك في استخدام موقع كيتو ستايل ومعرفة الأقسام التي تحظى بأكبر نسبة زيارة من موقعنا.
    `
    ]
  },
  {
    heading: `(8) أغراض جمع البيانات`,
    text: [
      `نجمع البيانات لتسجيل حسابك بموقع كيتو ستايل، لتتمكن من استخدام خدماتنا والمزايا المختلفة التي نوفرها مثل تقديم طلبات الشراء وتتبعها من خلال موقع كيتو ستايل.
    `,
      `نجمع بياناتك لتمكينك من تقديم طلبات الاشتراك من خلال موقع كيتو ستايل ومعالجة المشكلات المتعلقة باشتراكك "إن وجدت" وتأكيد المعاملة من خلال موقع كيتو ستايل.
    `,
      `نجمع بياناتك لعمل وصف عن حالتك لنتمكن من تحديد الوجبات والكميات وحساب السعرات وكميات المياه وغيرها من الخدمات.
    `,
      `نجمع بياناتك لتمكينك من الدفع عن طريق وسائل الدفع المتاحة والمعتمدة لدينا، ومعالجة المبالغ التي نقوم بردها لك في حال توافر شروط الاسترداد.
    `,
      `نجمع بياناتك لتمكينك من الاستفادة من خدمات الاشتراك وتواصل فريق العمل التابع لنا بما في ذلك المدربين وأخصائيين التغذية للاستفادة من باقة الاشتراك والخدمات الإضافية التي تقوم بالاشتراك فيها من خلال الموقع.
    `,
      `نجمع بياناتك لتمكينك من إضافة التعليقات وتلقي تقييماتك من خلال موقع كيتو ستايل. كما نجمع بياناتك لتمكينك من الاتصال بنا وتقديم الردود على الاستفسارات التي قدمتها لنا من خلال موقع كيتو ستايل.
    `,
      `نجمع بياناتك لأغراض توثيق بيانات الاتصال التي قمت بتزويدنا بها والتحقق من حيازتك لها.
    `,
      `نجمع بياناتك للتواصل معك بشأن أي عقبات تواجه تقديم طلبات الاشتراك من خلال موقع كيتو ستايل أو تواجه عمليات التواصل بينك وبين موقع كيتو ستايل.
    `,
      `نجمع بياناتك لتخصيص المحتوى والإعلانات لك من خلال موقع كيتو ستايل.
    `,
      `نجمع بياناتك لترشيح الإعلانات والخدمات التي نعتقد أنها تثير اهتمامك.
    `,
      `نجمع بياناتك للأغراض الإحصائية وأغراض العمل الداخلي بموقع كيتو ستايل.
    `,
      `نجمع بياناتك لأغراض تنفيذ القانون أو قرارات السلطة العامة.
    `
    ]
  },
  {
    heading: '(9) حدود الكشف عن بياناتك',
    text: [
      `نكشف عن بياناتك لشركائنا في موقع كيتو ستايل والموظفين والعاملين لدينا ومقدمي الخدمات للعملاء لأغراض تنفيذ الخدمات الخاصة بموقعنا الإلكتروني.
    `,
      `نكشف عن بياناتك للالتزام بأحكام القانون وتنفيذًا للأحكام القضائية وقرارات الجهات المختصة بالمملكة العربية السعودية وأي قرارات صادرة عن الجهات المختصة.
    `,
      `نكشف عن بياناتك لتنفيذ شروطنا وأحكامنا وأي اتفاق آخر بين موقع كيتو ستايل وبينك، ولأغراض إدارة طلبات الخدمات والمعاملات التي تتم من خلال المنصة.
    `,
      `قد نكشف عن بياناتك للجهات التي تشاركنا تقديم الخدمات كجهات الدفع الالكتروني وذلك لأغراض التأكد من صحة هذه العمليات. كذلك نزود شركة الشحن بتفاصيل الطلبية لأغراض توصيل الطلبية للأماكن المستحقة.
    `,
      `نكشف عن بياناتك في حدود الغرض المحدد لذلك فقط، ولا يعني الكشف عن بياناتك انتهاك خصوصيتك وسوف يتم إدارة البيانات طبقًا لأحكام هذه السياسة.
    `
    ]
  },
  {
    heading: '(10) تخزين البيانات',
    text: [
      `يقوم موقع كيتو ستايل بالتعاقد مع مزود خدمة استضافة لتخزين محتوى موقع كيتو ستايل وكافة البيانات التي يتم توفيرها من خلاله، والتي يعد من بينها البيانات الشخصية للمستخدم وبيانات الاستخدام والأنشطة وغيرها من البيانات المتعلقة بموقع كيتو ستايل.
    `,
      `قد يتم تخزين البيانات خارج الدولة التي تنتمي إليها، فمزودي خدمات الاستضافة تقدم خدماتهم على مستوى العالم، وبالتالي فأنت تفوضنا بنقل بياناتك خارج حدود الدولة التي تنتمي إليها عبر شبكة الانترنت.
    `,
      `قد نقوم بتخزين بياناتك أيضًا ضمن قواعد بيانات إلكترونية محلية أو ضمن سجلات مطبوعة أو ورقية لأغراض حفظ البيانات أو أي أغراض أخرى هدفها حماية أو إدارة البيانات.
    `
    ]
  },
  {
    heading: `(11) سلامة البيانات
    `,
    text: [
      `موقع كيتو ستايل يسعى لتوفير أقصى درجات الأمان لبياناتك التي زودتنا بها أو التي قمنا بجمعها طبقًا لأحكام هذه السياسة فنقوم بإضافة بياناتك ضمن قواعد بيانات مؤمنة ومشفرة وغير مصرح لأي شخص غير مفوض له من جانبنا بالإطلاع على بياناتك أو التعامل معها.
    `,
      `نتعامل في موقع كيتو ستايل مع بوابة دفع إلكتروني بهدف تأمين عمليات الدفع التي تقوم بها، فلا نحتفظ ببيانات بطاقتك المصرفية بموقع كيتو ستايل ويتم إدخال البيانات على بوابة الدفع بشكل مباشر، كما أن مزود خدمة الدفع الإلكتروني يعتمد معايير أمنية عالية الجودة لضمان عدم قرصنة البطاقة المستخدمة في عملية الدفع.
    `,
      `رغم قيامنا باتخاذ كافة التدابير والإجراءات المعقولة لتأمين بياناتك إلا أنه في حال حدوث اختراق لقواعد بياناتنا سوف نقوم بإخطارك وإبلاغ الجهات المختصة لضمان أكبر قدر من الشفافية ضمن إجراءات قانونية طبقًا للقوانين المعمول بها.
    `
    ]
  },
  {
    heading: `(12) التحديثات
    `,
    text: [
      `يحق لإدارة موقع كيتو ستايل تعديل وتحديث سياسة الخصوصية هذه وشروط استخدام موقع كيتو ستايل في أي وقت، وسنقوم بنشر التعديلات ضمن هذه الوثيقة بالصفحة المخصصة لسياسة الخصوصية عبر موقع كيتو ستايل كما سنقوم بتحديث تاريخ الإصدار الأخير، ويعد استمرارك في استخدام موقع كيتو ستايل بعد تعديلات هذه السياسة موافقة صريحة منك على هذه التعديلات، لذا يرجى مراجعة هذه السياسة باستمرار وخاصة قبل أي عملية شراء تقوم بها من خلال موقع كيتو ستايل للتأكد من أي تحديثات لاحقة على تسجيلك بموقع كيتو ستايل.
    `
    ]
  },
  {
    heading: `(13) الاتصال بنا
    `,
    subHead: `يمكنك الاتصال بنا عبر:
    `,
    text: [
      `البريد الإلكتروني Mangment@ketonestyle.com`,
      `رقم التواصل +13126101416
    `
    ]
  }
];
