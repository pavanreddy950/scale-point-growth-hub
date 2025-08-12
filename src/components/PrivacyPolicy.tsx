import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy = ({ isOpen, onClose }: PrivacyPolicyProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Privacy Policy
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-4 top-4 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h3>
            <p className="text-muted-foreground mb-4">
              Scale Point ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our business growth services, including SEO optimization, AI automation tools, website development, and OTA listings management.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Information We Collect</h3>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Contact information (name, email, phone number, business address)</li>
              <li>Business information (company name, industry, website URLs)</li>
              <li>Service preferences and requirements</li>
              <li>Payment and billing information</li>
              <li>Communication records and correspondence</li>
              <li>Access credentials for business accounts (with your permission)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">
              When you visit our website or use our services, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>Analytics data (traffic sources, user behavior patterns)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. How We Use Your Information</h3>
            <p className="text-muted-foreground mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide and improve our services (SEO, automation, website development)</li>
              <li>Communicate with you about services, updates, and support</li>
              <li>Process payments and manage billing</li>
              <li>Analyze service performance and optimize results</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">5. Information Sharing and Disclosure</h3>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>With service providers who assist in delivering our services</li>
              <li>To comply with legal requirements or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with business transfers or mergers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">6. Data Security</h3>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security assessments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">7. Data Retention</h3>
            <p className="text-muted-foreground mb-4">
              We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">8. Your Rights and Choices</h3>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">9. Third-Party Services</h3>
            <p className="text-muted-foreground mb-4">
              Our services may integrate with third-party platforms (Google Analytics, social media platforms, payment processors). These services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">10. International Data Transfers</h3>
            <p className="text-muted-foreground mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">11. Children's Privacy</h3>
            <p className="text-muted-foreground mb-4">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">12. Changes to This Policy</h3>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">13. Contact Us</h3>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-accent/20 p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Scale Point</strong><br />
                Phone: +91 77197 56319<br />
                Email: privacy@scalepoint.com<br />
                Website: www.scalepoint.com<br />
                Address: [Your Business Address]
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-xs text-muted-foreground">
              Last updated: January 2025. This Privacy Policy is effective as of the date listed above.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy; 