# EmailJS Setup for Contact Form

This document provides instructions on how to set up EmailJS for the contact form in the Dreams Arcade website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account.
2. After signing up, log in to your EmailJS dashboard.

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to the "Email Services" tab.
2. Click "Add New Service".
3. Choose your email service provider (Gmail, Outlook, etc.).
4. Follow the instructions to connect your email account.
5. Name your service "default_service" (or update the SERVICE_ID in the code).

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to the "Email Templates" tab.
2. Click "Create New Template".
3. Name your template "template_contact" (or update the TEMPLATE_ID in the code).
4. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person sending the message
   - `{{from_email}}` - The email of the person sending the message
   - `{{to_email}}` - The recipient email (hafiznapster@gmail.com)
   - `{{phone}}` - The phone number of the person sending the message
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content

Example template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Message from Dreams Arcade Website</h2>
    <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    <h3>Message:</h3>
    <p>{{message}}</p>
</body>
</html>
```

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to the "Account" tab.
2. Find your "Public Key" in the API Keys section.

## Step 5: Update the Contact.tsx File

1. Open the `src/pages/Contact.tsx` file.
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
// EmailJS configuration
const SERVICE_ID = "your_service_id"; // Replace with your actual service ID
const TEMPLATE_ID = "your_template_id"; // Replace with your actual template ID
const PUBLIC_KEY = "your_public_key"; // Replace with your actual public key
```

## Testing the Contact Form

1. Fill out the contact form with valid information.
2. Submit the form.
3. Check the recipient email (hafiznapster@gmail.com) to ensure the email was received.
4. Verify that the form validation works correctly.

## Troubleshooting

If you encounter any issues:

1. Check the browser console for error messages.
2. Verify that your EmailJS credentials are correct.
3. Make sure your email service is properly connected in EmailJS.
4. Check the EmailJS dashboard for any error logs.

For more information, refer to the [EmailJS documentation](https://www.emailjs.com/docs/).
