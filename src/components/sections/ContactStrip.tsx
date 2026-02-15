import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';

interface ContactInfoItem {
  id: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: string[];
}

const contactInfo: ContactInfoItem[] = [
  {
    id: 1,
    icon: Phone,
    title: 'CALL US NOW',
    lines: [
      'Office Telephone: +62 800 9000 123',
      'Mobile: +62 800 9000 123',
    ],
  },
  {
    id: 2,
    icon: MapPin,
    title: 'COME VISIT US',
    lines: [
      '99 St Jomblo Park Pekanbaru 28292.',
      'Indonesia',
    ],
  },
  {
    id: 3,
    icon: Mail,
    title: 'SEND US A MESSAGE',
    lines: [
      'General: info@petro.com',
      'Sales: sales@petro.com',
    ],
  },
];

const ContactStrip = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="w-8 h-8 text-[#1e3a5f]" strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-bold text-[#1e3a5f] mb-4">
                {item.title}
              </h4>
              {item.lines.map((line, lineIndex) => (
                <p key={lineIndex} className="text-sm text-gray-600">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
