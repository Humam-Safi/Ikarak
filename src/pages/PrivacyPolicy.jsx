import React from "react";
import AnimatedTitle from "../components/common/AnimatedTitle";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-grey-50">
      <div className="section-title mb-8">
        <AnimatedTitle
          text="سياسة الخصوصية"
          tag="h1"
          animation="shimmer"
          className="font-extrabold text-4xl md:text-5xl text-center"
        />
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">مقدمة</h2>
          <p className="text-grey-600">
            نحن في عُمرَانَك نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. تُوضح
            سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي
            تقدمها لنا عند استخدام موقعنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            المعلومات التي نجمعها
          </h2>
          <p className="text-grey-600">قد نقوم بجمع المعلومات التالية:</p>
          <ul className="list-disc pl-6 mt-2 text-grey-600">
            <li>الاسم والمعلومات الشخصية الأساسية</li>
            <li>
              معلومات الاتصال بما في ذلك عنوان البريد الإلكتروني ورقم الهاتف
            </li>
            <li>
              المعلومات الديموغرافية مثل الرمز البريدي والتفضيلات والاهتمامات
            </li>
            <li>معلومات أخرى ذات صلة لاستطلاعات العملاء والعروض</li>
            <li>تفضيلات العقارات وسجل البحث على موقعنا</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            كيف نستخدم المعلومات
          </h2>
          <p className="text-grey-600">
            نحن نستخدم هذه المعلومات لفهم احتياجاتك بشكل أفضل ولتقديم خدمة أفضل،
            وبشكل خاص للأسباب التالية:
          </p>
          <ul className="list-disc pl-6 mt-2 text-grey-600">
            <li>تحسين منتجاتنا وخدماتنا</li>
            <li>تخصيص موقع الويب وفقًا لاهتماماتك</li>
            <li>
              إرسال رسائل بريد إلكتروني ترويجية حول المنتجات الجديدة أو العروض
              الخاصة
            </li>
            <li>الاتصال بك لأغراض بحث السوق</li>
            <li>تقديم عروض عقارية تتناسب مع احتياجاتك</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            أمان معلوماتك
          </h2>
          <p className="text-grey-600">
            نلتزم بضمان أمان معلوماتك. لمنع الوصول غير المصرح به أو الكشف عنها،
            وضعنا إجراءات مادية وإلكترونية وإدارية مناسبة لحماية المعلومات التي
            نجمعها عبر الإنترنت.
          </p>
          <ul className="list-disc pl-6 mt-2 text-grey-600">
            <li>استخدام التشفير لحماية البيانات الحساسة</li>
            <li>استخدام حماية بكلمة مرور وجدران الحماية</li>
            <li>مراجعة منتظمة لممارسات تخزين ومعالجة المعلومات</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            ملفات تعريف الارتباط
          </h2>
          <p className="text-grey-600">
            موقعنا يستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم. ملفات
            تعريف الارتباط هي ملفات صغيرة يتم وضعها على القرص الصلب لجهاز
            الكمبيوتر الخاص بك لمساعدتنا في تقديم تجربة أفضل. يمكنك اختيار قبول
            أو رفض ملفات تعريف الارتباط.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            الروابط لمواقع أخرى
          </h2>
          <p className="text-grey-600">
            قد يحتوي موقعنا على روابط لمواقع أخرى ذات اهتمام. ومع ذلك، بمجرد
            استخدام هذه الروابط لمغادرة موقعنا، يجب أن تلاحظ أنه ليس لدينا أي
            سيطرة على الموقع الآخر. لذلك، لا يمكننا أن نكون مسؤولين عن حماية
            وخصوصية أي معلومات تقدمها أثناء زيارة هذه المواقع وهذه المواقع لا
            تخضع لبيان الخصوصية هذا.
          </p>
          <ul className="list-disc pl-6 mt-2 text-grey-600">
            <li>
              يجب توخي الحذر ومراجعة بيان الخصوصية المطبق على موقع الويب المعني
            </li>
            <li>
              نحن لا نتحمل أي مسؤولية عن محتوى أو ممارسات الخصوصية للمواقع
              الخارجية
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            التحكم في معلوماتك الشخصية
          </h2>
          <p className="text-grey-600">
            يمكنك اختيار تقييد جمع أو استخدام معلوماتك الشخصية بالطرق التالية:
          </p>
          <p className="mt-2 text-grey-600">
            إذا قمت سابقًا بالموافقة على استخدام معلوماتك الشخصية لأغراض التسويق
            المباشر، فقد تغير رأيك في أي وقت عن طريق الاتصال بنا. سنوفر لك وسيلة
            لطلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك، وطلب تصحيح أي
            بيانات غير دقيقة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary-600">
            تحديثات على هذه السياسة
          </h2>
          <p className="text-grey-600">
            نراجع سياستنا بانتظام ونضع أي تحديثات على هذه الصفحة. تم تحديث هذه
            السياسة آخر مرة في 1 يونيو 2023.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
