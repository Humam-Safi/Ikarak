import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">سياسة الخصوصية</h1>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. المقدمة</h2>
          <p className="text-gray-600">
            في شركة إكراك للعقارات، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدام خدماتنا.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. المعلومات التي نجمعها</h2>
          <p className="text-gray-600">
            قد نجمع الأنواع التالية من المعلومات:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>معلومات التعريف الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
            <li>تفضيلات ومتطلبات العقارات</li>
            <li>المعلومات المالية لمعاملات العقارات</li>
            <li>بيانات الاستخدام ومعلومات تفاعل الموقع</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. كيفية استخدام معلوماتك</h2>
          <p className="text-gray-600">
            نستخدم المعلومات المجمعة من أجل:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>تقديم وتحسين خدماتنا</li>
            <li>معالجة معاملات العقارات</li>
            <li>التواصل معك بشأن العقارات والخدمات</li>
            <li>تحليل استخدام الموقع وتحسين تجربة المستخدم</li>
            <li>الامتثال للالتزامات القانونية</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. مشاركة المعلومات</h2>
          <p className="text-gray-600">
            نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>مقدمي الخدمات الذين يساعدون في عملياتنا</li>
            <li>السلطات القانونية عند الاقتضاء بموجب القانون</li>
            <li>الأطراف المشاركة في معاملات العقارات بموافقتك</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. أمن البيانات</h2>
          <p className="text-gray-600">
            ننفذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. حقوقك</h2>
          <p className="text-gray-600">
            لديك الحق في:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>الوصول إلى معلوماتك الشخصية</li>
            <li>تصحيح المعلومات غير الدقيقة</li>
            <li>طلب حذف معلوماتك</li>
            <li>الانسحاب من الاتصالات التسويقية</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. اتصل بنا</h2>
          <p className="text-gray-600">
            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:
          </p>
          <p className="mt-2 text-gray-600">
            البريد الإلكتروني: privacy@ikarak.com<br />
            الهاتف: +963 123 456 789<br />
            العنوان: شارع العقارات 123، حمص، سوريا
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. تحديثات هذه السياسة</h2>
          <p className="text-gray-600">
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. ستكون أحدث نسخة متاحة دائماً على موقعنا الإلكتروني.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;