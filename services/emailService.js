import nodemailer from "nodemailer";

export const sendRegisterNotificationEmail = async (to, username) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "Welcome to JoyDom – Your Account Was Created Successfully!",
      html: `<p>Hi ${username}, 👋</p>

            <p>
               Your account has been <strong>created successfully</strong>. You can now log in and start exploring the platform.
            </p>

            <p>
               Whenever you're ready, you can also become a <strong>vendor</strong> and start creating service with just a click.
            </p>

            <p>
              We're excited to have you on board! 
            </p>

            <p>
               If you have any questions or need help, feel free to reply to this email or reach out to our support team.
            </p>

            <p>
              Happy Freelancing!
            </p>

            <br>

            <p>– The <strong>JoyDom Team</strong> </p>
            `,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};

export const sendVendorNotificationEmail = async (to, farmName) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "Welcome to JoyDom – Your Account Was Created Successfully!",
      html: `<p>Hi ${farmName}, </p>

            <p>
               Your Vendor account has been <strong>created successfully</strong>. You can now log in and start selling on the platform.
            </p>

            <p>
              We're excited to have you on board! 
            </p>

            <p>
               If you have any questions or need help, feel free to reply to this email or reach out to our support team.
            </p>

            <p>
               Happy selling!
            </p>

            <br>

            <p>– The <strong>JoyDom Team</strong> </p>
            `,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};

//
export const sendVerificationEmail = async (to, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to,
      subject: "JoyDom | Account Verification Token",
      html: `<p>Click <a href="https://brightbediako.netlify.app/verify-email/${token}">here</a> to verify your email account.</p>`,
      // html: `<p>Click <a href="${process.env.FRONTEND_URL}/verify-email/${token}">here</a> to verify your email account.</p>`,
    };
    const info = await transporter.sendMail(message);
    // console.log("Email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Email not sent");
  }
};

export const sendPasswordResetEmail = async (to, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to,
      subject: "JoyDom | Password Reset Code",
      html: `<p>Click 
  <a 
    href="https://brightbediako.netlify.app/reset-password/${token}" 
    style="color: #1a73e8; text-decoration: none; font-weight: bold;"
    target="_blank"
  >
    here
  </a> 
  to reset your password.
</p>`,
      // html: `<p>Click <a href="${process.env.FRONTEND_URL}/verify-email/${token}">here</a> to verify your email account.</p>`,
    };
    const info = await transporter.sendMail(message);
    // console.log("Email sent successfully", info.messageId);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Email not sent");
  }
};

export const sendProductNotificationEmail = async (
  to,
  productId,
  messageText
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "JoyDom | New Product Created",
      html: `<p>${messageText}</p>

<p>
  <a 
    href="https://brightbediako.netlify.app/products/${productId}" 
    style="color: #1a73e8; text-decoration: none; font-weight: bold;" 
    target="_blank"
  >
    View Product
  </a>
</p>
`,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};

export const sendOrderNotificationEmail = async (to, orderId, messageText) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "JoyDom | New Order Placed",
      html: `<p>${messageText}</p>
        <p> <a href="https://brightbediako.netlify.app/orders/${orderId}" style="color: #1a73e8; text-decoration: none; font-weight: bold;" target="_blank">
      View Order
    </a>
  </p>
  `,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};

export const sendOrderUpdateNotificationEmail = async (
  to,
  orderId,
  messageText
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "JoyDom | Order Status Updated",
      html: `<p>${messageText}</p>
        <p> <a href="https://brightbediako.netlify.app/orders/${orderId}" style="color: #1a73e8; text-decoration: none; font-weight: bold;" target="_blank">
      View Order
    </a>
  </p>
  `,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};

export const sendUpdateNotificationEmail = async (to, username) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = {
      to: to,
      subject: "JoyDom – Email Update Successfully!",
      html: `<p>Hi ${username}, </p>
  
              <p> You can now log in with your new email address.</p>
  
              <br>
  
              <p>– The <strong>JoyDom Team</strong> </p>
              `,
    };
    const info = await transporter.sendMail(message);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Notification not sent");
  }
};
