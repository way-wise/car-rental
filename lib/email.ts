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
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
    console.error("Please check your email configuration in .env file");
  } else {
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
    userPhone?: string;
    pickupLocation: string;
    dropLocation: string;
    bookingDate: string;
    bookingTime: string;
    amount: number;
    distance: string;
  },
) {
  const {
    bookingId,
    userName,
    userPhone,
    pickupLocation,
    dropLocation,
    bookingDate,
    bookingTime,
    amount,
    distance,
  } = bookingDetails;
  // const formattedAmount = (amount / 100).toFixed(2);
  const formattedDate = new Date(bookingDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Booking Request - Escalade4lax",
    text: `
Hello ${userName},

Your booking has been requested! Please wait for the agent to call you within 30 minutes.

Booking Details:
- Booking ID: ${bookingId}
- Pickup Location: ${pickupLocation}
- Drop-off Location: ${dropLocation}
- Date: ${formattedDate}
- Pickup Time: ${bookingTime}
- Distance: ${distance}

${userPhone ? `- Phone: ${userPhone}` : ""}

Thank you for choosing Escalade4lax!

Best regards,
Escalade4lax Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #0070f3; margin-bottom: 20px;">🎉 Booking Requested!</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            Hello <strong>${userName}</strong>,
          </p>
          ${userPhone ? `<p style="color: #374151; font-size: 14px; margin-bottom: 10px;">Phone: <strong>${userPhone}</strong></p>` : ""}
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 30px;">
            Your booking has been successfully requested. Please wait for the agent to call you within 30 minutes. Here are your booking details:
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
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"> Pickup Time:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${bookingTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"> Distance:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${distance}</td>
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
            Thank you for choosing Escalade4lax!
          </p>

          <p style="color: #374151; font-size: 14px; margin-top: 10px;">
            Best regards,<br/>
            <strong>Escalade4lax Team</strong>
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendBookingConfirmationToAdmin(bookingDetails: {
  bookingId: string;
  userName: string;
  userPhone?: string;
  userEmail: string;
  pickupLocation: string;
  dropLocation: string;
  bookingDate: string;
  bookingTime: string;
  amount: number;
  distance: string;
}) {
  const {
    bookingId,
    userName,
    userPhone,
    userEmail,
    pickupLocation,
    dropLocation,
    bookingDate,
    bookingTime,
    amount,
    distance,
  } = bookingDetails;
  const formattedAmount = (amount / 100).toFixed(2);
  const formattedDate = new Date(bookingDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const adminEmail = process.env.ADMIN_EMAIL || "seung@waywise.pro";

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
${userPhone ? `- Phone: ${userPhone}` : ""}

Booking Details:
- Booking ID: ${bookingId}
- Pickup Location: ${pickupLocation}
- Drop-off Location: ${dropLocation}
- Date: ${formattedDate}
- Pickup Time: ${bookingTime}
- Distance: ${distance}

Please review and process this booking.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #059669; margin-bottom: 20px;">📋 New Booking Received</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            A new booking has been received and is pending confirmation.
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
              ${
                userPhone
                  ? `<tr>
                <td style="padding: 6px 0; color: #374151; font-size: 14px;">Phone:</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 500;">${userPhone}</td>
              </tr>`
                  : ""
              }
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
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"> Pickup Date:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"> Pickup Time:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${bookingTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"> Distance:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 500;">${distance}</td>
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

export async function sendNewUserCredentials(
  to: string,
  userName: string,
  email: string,
  password: string,
) {
  const loginUrl = `${process.env.APP_URL}/auth/sign-in`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Welcome to Escalade4lax - Your Login Credentials",
    text: `
Hello ${userName},

Welcome to Escalade4lax! Your account has been created successfully.

Here are your login credentials:

Email: ${email}
Password: ${password}

You can log in to your account at: ${loginUrl}

For security reasons, we recommend changing your password after your first login.

Best regards,
Escalade4lax Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #0070f3; margin-bottom: 20px;">🎉 Welcome to Escalade4lax!</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            Hello <strong>${userName}</strong>,
          </p>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 30px;">
            Your account has been created successfully. Here are your login credentials:
          </p>

          <div style="background-color: #f3f4f6; border-radius: 6px; padding: 20px; margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 120px;">Email:</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-family: monospace; background-color: #e5e7eb; padding: 8px 12px; border-radius: 4px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Password:</td>
                <td style="padding: 10px 0; color: #111827; font-weight: 600; font-family: monospace; background-color: #e5e7eb; padding: 8px 12px; border-radius: 4px;">${password}</td>
              </tr>
            </table>
          </div>

          <a href="${loginUrl}" style="display: inline-block; margin-top: 10px; padding: 12px 24px; background: #0070f3; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
            Login to Your Account
          </a>

          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-top: 30px; border-radius: 4px;">
            <p style="color: #92400e; font-size: 14px; margin: 0;">
              <strong>⚠️ Security Reminder:</strong> For security reasons, we recommend changing your password after your first login.
            </p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            Please keep this email safe for your records.
          </p>

          <p style="color: #374151; font-size: 14px; margin-top: 20px;">
            Best regards,<br/>
            <strong>Escalade4lax Team</strong>
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendPasswordResetEmail(
  to: string,
  userName: string,
  resetUrl: string,
) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: "Reset Your Password - Escalade4lax",
    text: `
Hello ${userName},

  You requested to reset your password for your Escalade4lax account.

Click the link below to reset your password:
${resetUrl}

This link will expire in 1 hour for security reasons.

If you didn't request this password reset, please ignore this email and your password will remain unchanged.

Best regards,
Escalade4lax Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #dc2626; margin-bottom: 20px;">🔐 Password Reset Request</h2>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            Hello <strong>${userName}</strong>,
          </p>
          
          <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">
            You requested to reset your password for your Escalade4lax account.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background: #dc2626; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
              Reset My Password
            </a>
          </div>
          
          <div style="background-color: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; padding: 15px; margin: 20px 0;">
            <p style="color: #991b1b; font-size: 14px; margin: 0;">
              <strong>Security Note:</strong> This link will expire in 1 hour for security reasons.
            </p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 15px;">
            If you didn't request this password reset, please ignore this email and your password will remain unchanged.
          </p>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            Best regards,<br>
            <strong>Escalade4lax Team</strong>
          </p>
        </div>
      </div>
    `,
  });
}
