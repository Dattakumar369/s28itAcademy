# EmailJS Setup Guide

This application uses EmailJS to send enrollment and contact form submissions directly to your email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

**Note:** Both enrollment and contact forms use the same template.

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. See `EMAIL_TEMPLATE.md` for the complete template with formatting
4. Copy the template content from `EMAIL_TEMPLATE.md`
5. **Copy your Template ID** (e.g., `template_xxxxx`)

**Note:** Both forms will use this same template. The enrollment form formats the message to include program details, while the contact form sends the message directly.

## Step 5: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 6: Update the Service File

**Easy Setup:** All EmailJS credentials are now in one place!

Update `src/services/emailService.js` with your EmailJS credentials:

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxx',        // Your Service ID
  TEMPLATE_ID: 'template_xxxxx',      // Your Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxx',         // Your Public Key
  TO_EMAIL: 'hr@s28itsolutions.com' // Your email (optional, can change)
};
```

**That's it!** Both forms will automatically use these credentials. No need to update multiple files.

### 3. Update Email Address

In both files, update the email address:
```javascript
to_email: 'hr@s28itsolutions.com' // Change to your actual email
```

## Step 7: Test the Forms

1. Start your development server: `npm start`
2. Fill out the enrollment form and submit
3. Check your email inbox
4. Test the contact form as well

## Troubleshooting

- **Emails not sending?** Check browser console for errors
- **Service ID/Template ID not working?** Make sure you copied them correctly
- **Rate limit exceeded?** Free tier allows 200 emails/month, upgrade if needed

## Security Note

The Public Key is safe to expose in client-side code. However, for production, consider:
- Using environment variables
- Setting up rate limiting
- Adding CAPTCHA to prevent spam

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create `.env` file in root:
```
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

2. Update the code to use:
```javascript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

**Note:** Since both forms use the same template, you only need one template ID.

