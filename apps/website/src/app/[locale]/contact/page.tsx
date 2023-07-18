import { IconType } from 'react-icons';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

import ContactUsForm from '@website/components/contact/contact-us-form';
import { localeContents } from '@website/locale-contents/utils';

export default function ContactUsPage() {
  const { contactUs } = localeContents.en;

  return (
    <main>
      <section className='contained flex justify-center py-20'>
        <div className='w-full max-w-[36rem]'>
          <div className='text-HeadingXS lg:text-HeadingSM'>
            <h1>{contactUs.title}</h1>
            <h1>{contactUs.subTitle}</h1>
          </div>

          <div className='my-10'>
            <ContactUsForm {...contactUs.form} />
          </div>

          <div className='border-t border-rose-100 py-10 space-y-5 mt-20'>
            <ContactDetails icon={FiMapPin}>{contactUs.address}</ContactDetails>
            <ContactDetails icon={FiMail}>{contactUs.connect}</ContactDetails>
            <ContactDetails icon={FiPhone}>{contactUs.phone}</ContactDetails>
          </div>
        </div>
      </section>
    </main>
  );
}

/////////////////////////////////////////////////////////////////////////////
//Contact details component
/////////////////////////////////////////////////////////////////////////////

interface IContactDetails {
  icon: IconType;
  children: string;
}

const ContactDetails = ({ icon: Icon, children }: IContactDetails) => (
  <div className='flex items-center gap-2'>
    <Icon className='text-rose-300' />
    <p className='text-BodyXS lg:text-BodySM w-full max-w-[14rem] lg:max-w-[18rem]'>
      {children}
    </p>
  </div>
);
