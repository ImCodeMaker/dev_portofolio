import { Mail, PhoneCall, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contact" className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-8 bg-white  text-black dark:text-black">
      <div className="w-full max-w-2xl rounded-2xl shadow-xl p-8 text-center">
        <h2 className="text-3xl font-extrabold mb-10">Let&apos;s Get in Touch</h2>

        <div className="space-y-6">
          <ContactCard
            icon={<Mail className="w-6 h-6 text-blue-500" />}
            label="Email"
            value="teudijoshua@gmail.com"
            href="mailto:teudijoshua@gmail.com"
          />
          <ContactCard
            icon={<PhoneCall className="w-6 h-6 text-green-500" />}
            label="Phone"
            value="+1 829 388-5700"
            href="tel:+18293885700"
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6 text-red-500" />}
            label="Location"
            value="Dominican Republic"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="flex flex-col items-center space-y-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-4 rounded-lg transition-colors duration-200"
    >
      {icon}
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </Wrapper>
  );
}
