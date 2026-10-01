// Contact form handler
// Option 1: Log to console (dev/placeholder)
// Option 2: Integrate nodemailer or a service like Resend / SendGrid
//   — add your credentials in server/.env

export async function handleContact(req, res) {
  const { name, email, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message too short.' });
  }

  try {
    // ============================================================
    // OPTION 1: Console log (default — replace with real email)
    // ============================================================
    console.log('\n📬 New contact message:');
    console.log(`  From: ${name} <${email}>`);
    console.log(`  Message: ${message}`);
    console.log(`  Time: ${new Date().toISOString()}\n`);

    // ============================================================
    // OPTION 2: Nodemailer (uncomment and configure .env)
    // ============================================================
    // import nodemailer from 'nodemailer';
    //
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    //   to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    //   subject: `Portfolio Message from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    //   html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br>')}</p>`,
    // });

    return res.status(200).json({ message: 'Message received! I\'ll get back to you within 48 hours.' });
  } catch (error) {
    console.error('Contact handler error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}
