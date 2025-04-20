import React from 'react';
import  ContactForm  from '../components/forms/ContactForm';
import  Map  from '../components/common/Map';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">اتصل بنا</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">العنوان</h3>
                <p>شارع العقارات 123، حمص، سوريا</p>
              </div>
              <div>
                <h3 className="font-semibold">الهاتف</h3>
                <p>+963 123 456 789</p>
              </div>
              <div>
                <h3 className="font-semibold">البريد الإلكتروني</h3>
                <p>info@ikarak.com</p>
              </div>
              <div>
                <h3 className="font-semibold">ساعات العمل</h3>
                <p>الاثنين - الجمعة: 9:00 صباحاً - 5:00 مساءً</p>
                <p>السبت: 9:00 صباحاً - 2:00 مساءً</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">أرسل لنا رسالة</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
        <Map />
      </div>
    </div>
  );
};

export default Contact;