import { Phone } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-secondary text-white py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
          <Phone className="w-4 h-4 text-primary" />
          <span>Rufen Sie uns an: +49 (0)7821 / 502 09 62</span>
        </div>
      </div>
    </div>
  );
}
