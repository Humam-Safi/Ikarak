import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-arabic">شروط الخدمة</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">1. قبول الشروط</h2>
          <p className="text-gray-600 font-arabic">
            من خلال الوصول إلى موقع إكراك للعقارات واستخدام خدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا لم توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">2. وصف الخدمات</h2>
          <p className="text-gray-600 font-arabic">
            تقدم إكراك للعقارات خدمات عقارية تشمل قوائم العقارات وإدارة العقارات والاستشارات العقارية في حمص، سوريا.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">3. مسؤوليات المستخدم</h2>
          <p className="text-gray-600 font-arabic">يوافق المستخدمون على:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-600 font-arabic">
            <li>تقديم معلومات دقيقة وكاملة</li>
            <li>استخدام الخدمات لأغراض قانونية فقط</li>
            <li>عدم الانخراط في أنشطة احتيالية</li>
            <li>احترام حقوق الملكية الفكرية للآخرين</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">4. قوائم العقارات</h2>
          <p className="text-gray-600 font-arabic">
            بينما نسعى جاهدين لتقديم معلومات دقيقة عن العقارات، لا يمكننا ضمان دقة جميع القوائم. يجب على المستخدمين التحقق من جميع تفاصيل العقار بشكل مستقل.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">5. الخصوصية</h2>
          <p className="text-gray-600 font-arabic">
            يخضع استخدامك لخدماتنا أيضًا لسياسة الخصوصية الخاصة بنا. يرجى مراجعة سياسة الخصوصية لفهم كيفية جمع واستخدام معلوماتك.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">6. الملكية الفكرية</h2>
          <p className="text-gray-600 font-arabic">
            جميع المحتويات على موقعنا، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لشركة إكراك للعقارات ومحمية بموجب قوانين الملكية الفكرية.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">7. تحديد المسؤولية</h2>
          <p className="text-gray-600 font-arabic">
            لن تكون شركة إكراك للعقارات مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">8. تعديل الشروط</h2>
          <p className="text-gray-600 font-arabic">
            نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية المفعول فور نشرها على الموقع.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">9. القانون الحاكم</h2>
          <p className="text-gray-600 font-arabic">
            تخضع هذه الشروط وتفسر وفقًا لقوانين سوريا. تخضع أي نزاعات للاختصاص الحصري لمحاكم حمص.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 font-arabic">10. معلومات الاتصال</h2>
          <p className="text-gray-600 font-arabic">
            لأي أسئلة بخصوص شروط الخدمة هذه، يرجى الاتصال بنا على:
          </p>
          <p className="mt-2 text-gray-600 font-arabic">
            البريد الإلكتروني: legal@ikarak.com
            <br />
            الهاتف: +963 123 456 789
            <br />
            العنوان: شارع العقارات 123، حمص، سوريا
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
