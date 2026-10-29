import s from './TravelLanding.module.css'
import { PhoneOnDark, MessageCircleOnDark } from './TravelIcons'
import { contactDetails } from '@/data/travel'

// Phone-only action bar pinned to the bottom, the way an app keeps its primary
// actions in reach. Without it the only way to contact anyone is the form
// roughly twenty screens down.
export default function TravelMobileBar() {
  return (
    <div className={s.mobileBar} role="group" aria-label="Contact NNC Travel CRM">
      <a className={s.mbAction} href={contactDetails.callHref}>
        <PhoneOnDark />
        <span>Call</span>
      </a>
      <a
        className={s.mbAction}
        href={contactDetails.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircleOnDark />
        <span>WhatsApp</span>
      </a>
      <a className={s.mbPrimary} href="#demo">
        Book a demo
      </a>
    </div>
  )
}
