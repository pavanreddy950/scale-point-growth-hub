import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService = ({ isOpen, onClose }: TermsOfServiceProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Terms of Service
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
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground mb-4">
              By accessing and using Scale Point's services, including but not limited to SEO optimization, AI automation tools, website development, and OTA listings management, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Services Description</h3>
            <p className="text-muted-foreground mb-4">
              Scale Point provides business growth consultancy services including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Google My Business (GMB) & Website SEO optimization</li>
              <li>AI automation tools and workflow solutions</li>
              <li>Website development and design services</li>
              <li>OTA (Online Travel Agency) listings management</li>
              <li>Revenue management and optimization</li>
              <li>Business growth strategy consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Service Agreements</h3>
            <p className="text-muted-foreground mb-4">
              All services are provided under separate service agreements that outline specific deliverables, timelines, and payment terms. These agreements supersede any conflicting terms in this general Terms of Service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. Payment Terms</h3>
            <p className="text-muted-foreground mb-4">
              Payment terms are specified in individual service agreements. Generally, payments are due as outlined in the agreement, and late payments may result in service suspension or termination. All fees are non-refundable unless otherwise specified.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">5. Client Responsibilities</h3>
            <p className="text-muted-foreground mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Providing accurate and complete information for service delivery</li>
              <li>Maintaining access credentials for their business accounts</li>
              <li>Reviewing and approving deliverables within specified timeframes</li>
              <li>Ensuring compliance with applicable laws and regulations</li>
              <li>Providing necessary access to business platforms and data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">6. Performance and Results</h3>
            <p className="text-muted-foreground mb-4">
              While Scale Point strives to deliver optimal results, we cannot guarantee specific outcomes such as search engine rankings, traffic increases, or revenue growth. Results depend on various factors including market conditions, competition, and client cooperation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">7. Intellectual Property</h3>
            <p className="text-muted-foreground mb-4">
              Scale Point retains ownership of proprietary tools, methodologies, and processes. Clients retain ownership of their business data and content. Custom deliverables are transferred to clients upon full payment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">8. Confidentiality</h3>
            <p className="text-muted-foreground mb-4">
              Both parties agree to maintain confidentiality of proprietary information shared during the course of service delivery. This includes business strategies, client data, and technical information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">9. Limitation of Liability</h3>
            <p className="text-muted-foreground mb-4">
              Scale Point's liability is limited to the amount paid for services in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">10. Termination</h3>
            <p className="text-muted-foreground mb-4">
              Either party may terminate services with written notice as specified in the service agreement. Upon termination, clients remain responsible for payment of services rendered.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">11. Governing Law</h3>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with Indian law.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">12. Contact Information</h3>
            <p className="text-muted-foreground mb-4">
              For questions about these terms, contact us at:
            </p>
            <div className="bg-accent/20 p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Scale Point</strong><br />
                Phone: +91 77197 56319<br />
                Email: info@scalepoint.com<br />
                Website: www.scalepoint.com
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-xs text-muted-foreground">
              Last updated: January 2025. These terms may be updated periodically. Continued use of services constitutes acceptance of updated terms.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfService; 