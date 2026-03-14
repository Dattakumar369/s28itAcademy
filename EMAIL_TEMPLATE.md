# EmailJS Email Template

Use this template in your EmailJS dashboard when creating the email template.

## Template Setup Instructions

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Copy and paste the template below

---

## Template Configuration

**Template Name:** S28 IT Academy Contact Form

**Subject:** {{subject}}

---

## Email Template Content

**Copy this template exactly as shown:**

```
Hello,

You have received a new {{form_type}} form submission from S28 IT Academy website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENROLLMENT DETAILS (If Applicable):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Program: {{program}}
Qualification: {{qualification}}
Year/Status: {{year_status}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Form Type: {{form_type}}
This email was sent from the S28 IT Academy website.
Please respond to: {{from_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Note:** For contact forms, the enrollment fields (program, qualification, year_status) will be empty, which is fine. The template will show them as blank, and you'll know it's a contact form by the form_type field.

---

## Template Variables Used

The template uses these variables that are automatically filled by the form:

### Common Variables (Both Forms):
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{subject}}` - Email subject
- `{{message}}` - The message content
- `{{form_type}}` - Either "ENROLLMENT" or "CONTACT"

### Enrollment Form Only:
- `{{program}}` - Selected program (Foundation/Career Restart/Intensive Career)
- `{{qualification}}` - Student's qualification (B.Tech, MCA, etc.)
- `{{year_status}}` - Year or graduation status

**Note:** The template uses conditional logic (`{% if %}`) to show enrollment details only when it's an enrollment form.

---

## How It Works

### For Enrollment Forms:
- **Subject:** "Enrollment Request - [Program Name]"
- **Form Type:** "ENROLLMENT"
- **Shows:**
  - Contact information
  - **Enrollment Details section** (Program, Qualification, Year/Status)
  - Additional message

### For Contact Forms:
- **Subject:** User-provided subject
- **Form Type:** "CONTACT"
- **Shows:**
  - Contact information
  - Message (no enrollment details section)

---

## Setup Steps

1. **Create Email Service** (if not done):
   - Go to Email Services in EmailJS
   - Add your email provider (Gmail, Outlook, etc.)
   - Copy the Service ID

2. **Create Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Paste the template above
   - Save and copy the Template ID

3. **Get Public Key**:
   - Go to Account → General
   - Copy your Public Key

4. **Update Service File**:
   - Open `src/services/emailService.js`
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`
   - Update `TO_EMAIL` if needed

---

## Testing

After setup, test the forms:
1. Fill out the enrollment form
2. Fill out the contact form
3. Check your email inbox
4. Verify all information is received correctly

---

## Troubleshooting

- **Emails not sending?** Check browser console for errors
- **Wrong format?** Verify template variables match exactly
- **Service ID error?** Make sure you copied it correctly
- **Rate limit?** Free tier allows 200 emails/month

---

## Security Note

The Public Key is safe to expose in client-side code. However:
- Never share your Service ID or Template ID publicly
- Consider using environment variables for production
- Monitor your EmailJS usage

