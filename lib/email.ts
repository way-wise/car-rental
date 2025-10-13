import nodemailer from "nodemailer";

// Validate email configuration
if (
  !process.env.SMTP_HOST ||
  !process.env.SMTP_PORT ||
  !process.env.SMTP_USER ||
  !process.env.SMTP_PASS
) {
  console.error("❌ Missing SMTP configuration in environment variables");
  console.error("Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS");
}

if (!process.env.EMAIL_FROM) {
  console.error("❌ EMAIL_FROM is not set in environment variables");
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
    console.error("Please check your email configuration in .env file");
  } else {
    console.log("✅ SMTP connection verified successfully");
    console.log(`📧 Emails will be sent from: ${process.env.EMAIL_FROM}`);
    if (process.env.SMTP_HOST?.includes("mailtrap")) {
      console.log(
        "⚠️  Using Mailtrap - emails won't reach real inboxes (testing mode)",
      );
    }
  }
});

export async function sendVerificationEmail(
  to: string,
  token: string,
  url: string,
) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Verify Your Email",
    text: `Verify your email address by visiting: ${url} `,
    html: `
      <div style="font-family:sans-serif;">
        <h2>Verify your email</h2>
        <p>Click below to verify your email address. This link will expire in 1 hour.</p>
        <a href="${url}" style="display:inline-block;margin-top:10px;padding:10px 15px;background:#0070f3;color:white;text-decoration:none;border-radius:5px;">
          Verify Email
        </a>
        <p>If the button doesn't work, copy and paste this URL into your browser:</p>
        <p>${url}</p>
        <hr />
        <small>If you didn't request this, you can safely ignore this email.</small>
      </div>
    `,
  });
}

export async function sendBookingConfirmationToUser(
  to: string,
  bookingDetails: {
    bookingId: string;
    userName: string;
    pickupLocation: string;
    dropLocation: string;
    bookingDate: string;
    bookingTime: string;
    amount: number;
  },
) {
  const {
    bookingId,
    userName,
    pickupLocation,
    dropLocation,
    bookingDate,
    bookingTime,
    amount,
  } = bookingDetails;
  const formattedAmount = (amount / 100).toFixed(2);
  const formattedDate = new Date(bookingDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Booking Confirmation - Lee Car Rent",
    text: `
Hello ${userName},

Your booking has been confirmed!

Booking Details:
- Booking ID: ${bookingId}
- Pickup Location: ${pickupLocation}
- Drop-off Location: ${dropLocation}
- Date: ${formattedDate}
- Time: ${bookingTime}
- Amount Paid: $${formattedAmount}

Thank you for choosing Lee Car Rent!

Best regards,
Lee Car Rent Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #0070f3; margin-bottom: 20px;">🎉 Booking Confirmed!</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            Hello <strong>${userName}</strong>,
          </p>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 30px;">
            Your booking has been successfully confirmed. Here are your booking details:
          </p>

          <div style="background-color: #f3f4f6; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Booking ID:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-family: monospace;">${bookingId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Pickup Location:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${pickupLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Drop-off Location:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${dropLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Date:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Time:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${bookingTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Amount Paid:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: 700; font-size: 18px;">$${formattedAmount}</td>
              </tr>
            </table>
          </div>

          <a href="${process.env.APP_URL}/profile" style="display: inline-block; margin-top: 10px; padding: 12px 24px; background: #0070f3; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
            View My Bookings
          </a>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            Please save your booking ID for future reference.
          </p>

          <p style="color: #374151; font-size: 14px; margin-top: 20px;">
            Thank you for choosing Lee Car Rent!
          </p>

          <p style="color: #374151; font-size: 14px; margin-top: 10px;">
            Best regards,<br/>
            <strong>Lee Car Rent Team</strong>
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendBookingConfirmationToAdmin(bookingDetails: {
  bookingId: string;
  userName: string;
  userEmail: string;
  pickupLocation: string;
  dropLocation: string;
  bookingDate: string;
  bookingTime: string;
  amount: number;
}) {
  const {
    bookingId,
    userName,
    userEmail,
    pickupLocation,
    dropLocation,
    bookingDate,
    bookingTime,
    amount,
  } = bookingDetails;
  const formattedAmount = (amount / 100).toFixed(2);
  const formattedDate = new Date(bookingDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const adminEmail = process.env.ADMIN_EMAIL || "akmsakilsagor110@gmail.com";

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to: adminEmail,
    subject: `New Booking Received - ${bookingId}`,
    text: `
New Booking Alert!

A new booking has been received and confirmed.

Customer Details:
- Name: ${userName}
- Email: ${userEmail}

Booking Details:
- Booking ID: ${bookingId}
- Pickup Location: ${pickupLocation}
- Drop-off Location: ${dropLocation}
- Date: ${formattedDate}
- Time: ${bookingTime}
- Amount: $${formattedAmount}

Please review and process this booking.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #059669; margin-bottom: 20px;">📋 New Booking Received</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            A new booking has been received and payment has been confirmed.
          </p>

          <div style="background-color: #dbeafe; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px; font-size: 16px;">Customer Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #374151; font-size: 14px;">Name:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 600;">${userName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #374151; font-size: 14px;">Email:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 500;">${userEmail}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f3f4f6; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
            <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px; font-size: 16px;">Booking Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Booking ID:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600; font-family: monospace;">${bookingId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Pickup Location:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${pickupLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Drop-off Location:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${dropLocation}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Date:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Time:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${bookingTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Amount:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: 700; font-size: 18px;">$${formattedAmount}</td>
              </tr>
            </table>
          </div>

          <a href="${process.env.APP_URL}/dashboard" style="display: inline-block; padding: 12px 24px; background: #059669; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
            View in Dashboard
          </a>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            This is an automated notification from your booking system.
          </p>
        </div>
      </div>
    `,
  });
}
