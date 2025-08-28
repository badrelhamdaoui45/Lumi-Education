import { contactInfo } from '@/lib/data';
import { Logo } from '../logo';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="donate" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm">
              A UK-based charity dedicated to providing quality education for underprivileged children in Malawi.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 not-italic text-sm">
              <p>{contactInfo.address}</p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {contactInfo.website}
                </a>
              </p>
              <p>
                <strong>Charity Commission:</strong>{' '}
                <a
                  href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/5166160/charity-overview?_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_organisationNumber=5166160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View Registration
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-4 rounded-lg bg-card p-6 text-card-foreground shadow-lg">
            <h3 className="font-headline text-lg font-semibold">Support Our Mission</h3>
            <p className="text-sm">
              Your donation can provide books, meals, and a safe place to learn for a child in need.
            </p>
            <Button size="lg" className="w-full" asChild>
              <a href="https://www.crowdfunder.co.uk/p/lumi-education" target="_blank" rel="noopener noreferrer">
                Donate Securely
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumi Education. All Rights Reserved. Registered Charity in England and Wales.</p>
        </div>
      </div>
    </footer>
  );
}
