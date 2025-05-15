"use client";
import React, { useEffect } from "react";

function privacy() {
  useEffect(() => {
    document.title = "ev"; // Set the page title

    // Set the favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/edl_logo.png"; // Adjust the path if needed
    document.head.appendChild(link);

    // Clean up the favicon when the component unmounts (optional)
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className="container py-5 lh-base" style={{ overflowY: "hidden" }}>
      <style>
        {`
          p, li {
            color: black;
          }
        `}
      </style>

      <h2>Terms of Service & Privacy Policy</h2>

      <h2>Term of Use for EDL EV Station</h2>

      <h3>Welcome to EDL EV Station</h3>
      <p>
        These Terms of Use (“Terms”) govern your use of the EDL EV Station
        mobile application (“App”), including websites and charging stations
        that are services provided by Electricité du Laos. By using the app, you
        agree to these Terms. If you do not agree, please do not use the app.
      </p>

      <h3>Eligibility</h3>
      <p>
        To use the Service, you must be 18 years old and legally competent to
        enter into binding contracts.
        <br />
        By creating an account, you affirm that the information you provided is
        correct and complete.
      </p>

      <h3>Account Registration and Security</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials.
        <br />
        Please notify us immediately of any unauthorized use of your account.
      </p>

      <h3>Service Use</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>
          EDL EV Station is available for personal, non-commercial, and business
          purposes.
        </li>
        <li>You must follow all instructions related to using the App.</li>
        <li>
          You must not misuse, damage, or tamper with the charging stations.
        </li>
        <li>
          Do not interfere with the functionality of the App or other users'
          experience.
        </li>
        <li>
          Charging times, availability, and pricing may change based on
          location, demand, and maintenance schedules.
        </li>
        <li>
          Do not use the App for illegal purposes or in violation of any laws.
        </li>
      </ul>
      <h3>Fees and Payments</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>Charging fees will be clearly communicated before initiation.</li>
        <li>
          Payment options include mobile wallets and other approved methods.
        </li>
        <li>
          You agree to pay all charges incurred through your account or payment
          method.
        </li>
      </ul>

      <h3>Limitation of Liability</h3>
      <p>
        EDL EV is provided on an “as is” and “as available” basis. We are not
        liable for:
      </p>
      <ul className="list-[circle] ml-5 pl-15">
        <li>Any interruptions or errors in the App’s functionality.</li>
        <li>
          Damage to your device or loss of data resulting from use of the App.
        </li>
        <li>Any indirect, incidental, or consequential damages.</li>
      </ul>
      <h3>Account Responsibility</h3>
      <p>
        You are responsible for keeping your credentials safe.
        <br />
        EDL is not liable for unauthorized use of your account.
      </p>

      <h3>Privacy</h3>
      <p>
        Our use of your personal data is regulated by the Privacy Policy below.
        By using the App, you agree to our privacy practices.
      </p>

      <h3>Termination</h3>
      <h4>Termination by User</h4>
      <p>You may terminate your use of the App at any time by:</p>
      <ul className="list-[circle] ml-5 pl-15">
        <li>Deactivating your account via the app or web portal, or</li>
        <li>Contacting customer support in writing.</li>
      </ul>
      <p>Note: Any unpaid charges must be settled.</p>

      <h4>Termination by EDL</h4>
      <p>We may terminate your access if:</p>
      <ul className="list-[circle] ml-5 pl-15">
        <li>You breach the Terms or any law.</li>
        <li>You use the service fraudulently or maliciously.</li>
        <li>You fail to pay or reverse charges.</li>
        <li>You tamper with EDL equipment.</li>
        <li>Your actions pose safety risks or disrupt operations.</li>
      </ul>
      <h3>Changes to These Terms</h3>
      <p>
        We may update these Terms at any time. Changes will be communicated in
        the App or via email.
      </p>

      <h3>Governing Law</h3>
      <p>These Terms are governed by the laws of Lao PDR.</p>

      <h3>Contact Us</h3>
      <p>
        📧 Email: <a href="mailto:edlgmdo@edl.com.la">edlgmdo@edl.com.la</a>
        <br />
        📞 Phone: (+856-21) 316094 - 1217
        <br />
        🏢 Address: Rue Lao-Thai, P.O. Box 309, Thongkang Village, Sisattanak
        District, Vientiane Capitol, Lao PDR.
      </p>
      <hr />
      <h2>Introduction to Privacy Policy</h2>

      <p>
        We respect your privacy and handle your personal data responsibly. This
        policy explains how we collect, use, and protect your information.
      </p>

      <h3>Information We Collect</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>
          <strong>Personal Info:</strong> Name, Email, Phone, Payment Details.
        </li>
        <li>
          <strong>Device Data:</strong> IP address, device type, usage patterns.
        </li>
        <li>
          <strong>Location Data:</strong> GPS for station finding and session
          management.
        </li>
      </ul>
      <h3>How We Use Your Information</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>To securely process payments.</li>
        <li>To offer and manage EV charging.</li>
        <li>To send receipts and account communications.</li>
        <li>To improve services and products.</li>
        <li>To send updates or promotions (with consent).</li>
        <li>To analyze usage data to enhance the experience.</li>
      </ul>

      <h3>Information Sharing</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>
          <strong>With Service Providers:</strong> For payment, hosting,
          support. Partners are bound to protect your data.
        </li>
        <li>
          <strong>Legal Authorities:</strong> If required to comply with law or
          protect rights/safety.
        </li>
        <li>
          <strong>Business Transfers:</strong> In case of merger/acquisition,
          we’ll notify you.
        </li>
        <li>
          <strong>With Consent:</strong> For optional promotions or third-party
          use.
        </li>
        <li>
          <strong>Aggregated Data:</strong> For market analysis or
          infrastructure development (non-identifiable).
        </li>
      </ul>

      <h3>Data Security</h3>
      <p>
        We implement technical, organizational, and physical measures to protect
        your data. However, no system is 100% secure.
      </p>

      <h3>Your Rights</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>Access, update, or delete your personal info.</li>
        <li>Opt out of marketing.</li>
        <li>Contact us with any privacy questions.</li>
      </ul>

      <h3>Cookies and Tracking</h3>
      <p>
        We may use cookies or similar tools to improve your experience. You can
        manage cookie preferences in your device settings.
      </p>

      <h3>Children’s Privacy</h3>
      <ul className="list-[circle] ml-5 pl-15">
        <li>Our services are not for users under 13.</li>
        <li>We don’t knowingly collect data from children.</li>
        <li>
          If found, data will be deleted and actions taken to prevent
          recurrence.
        </li>
      </ul>

      <h3>Changes to This Privacy Policy</h3>
      <p>
        We may update the Privacy Policy. Changes will be posted in the App or
        sent by email.
      </p>

      <h3>Contact Us</h3>
      <p>
        📧 Email: <a href="mailto:edlgmdo@edl.com.la">edlgmdo@edl.com.la</a>
        <br />
        📞 Phone: (+856-21) 316094 - 1217
        <br />
        🏢 Address: Rue Lao-Thai, P.O. Box 309, Thongkang Village, Sisattanak
        District, Vientiane Capitol, Lao PDR.
      </p>
    </div>
  );
}

export default privacy;
