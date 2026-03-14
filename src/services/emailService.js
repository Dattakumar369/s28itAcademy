import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these values with your EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_zrwe47a',
  TEMPLATE_ID: 'template_0usx0jk',
  PUBLIC_KEY: 'vn-HCSeaYH4SC2wym',
  TO_EMAIL: 'hr@s28itsolutions.com' // Your email address
};

/**
 * Send enrollment form data via EmailJS
 * @param {Object} formData - Form data object
 * @returns {Promise} EmailJS send promise
 */
export const sendEnrollmentEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: `Enrollment Request - ${formData.program}`,
      form_type: 'ENROLLMENT',
      program: formData.program,
      qualification: formData.qualification,
      year_status: formData.year || 'Not specified',
      message: formData.message || 'No additional message',
      to_email: EMAILJS_CONFIG.TO_EMAIL
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

/**
 * Send contact form data via EmailJS
 * @param {Object} formData - Form data object
 * @returns {Promise} EmailJS send promise
 */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      form_type: 'CONTACT',
      program: '',
      qualification: '',
      year_status: '',
      message: formData.message,
      to_email: EMAILJS_CONFIG.TO_EMAIL
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};

// Export config for reference
export default EMAILJS_CONFIG;

