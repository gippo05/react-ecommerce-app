import { sendEmail } from '../utils/sendEmail.js';

const processOrder = async (req, res) => {
  try {
    // 1. Validate order data, save order to DB, generate order ID, etc.

    // 2. Compose email content
    const emailContent = `
      <h1>New Order Received</h1>
      <p>Order ID: ${orderId}</p>
      <p>Customer: ${customerName}</p>
      <p>Total: ₱${totalAmount}</p>
      <!-- more order details -->
    `;

    // 3. Send email to yourself
    await sendEmail({
      to: 'your-email@gmail.com',
      subject: `New Order #${orderId}`,
      html: emailContent,
    });

    // 4. Optionally send confirmation to customer as well

    res.status(200).json({ message: 'Order placed and email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to process order.' });
  }
};
