(function () {
  function randomId(prefix) {
    return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
  }

  function logOrder(title, payload) {
    console.group(`[Placeholder] ${title}`);
    console.log('Timestamp:', new Date().toISOString());
    console.dir(payload, { depth: null });
    console.groupEnd();
  }

  async function createOrder(orderData) {
    logOrder('Checkout Order', orderData);
    await new Promise((resolve) => setTimeout(resolve, 900));

    return {
      success: true,
      orderId: randomId('ODV'),
      transactionId: randomId('TX'),
      emailSent: true,
      emailMethod: 'placeholder',
      processingTime: 900,
      emailResults: {
        customerConfirmation: { success: true, method: 'placeholder', messageId: randomId('email') },
        adminNotification: { success: true, method: 'placeholder', messageId: randomId('email') },
      },
      templateIds: ['contact-template-demo', 'order-template-demo'],
    };
  }

  async function sendConfirmationEmail(orderData, orderResult) {
    logOrder('Order Confirmation Email', { orderData, orderResult });
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      success: true,
      messageId: randomId('email'),
      method: 'placeholder',
    };
  }

  window.CartPlaceholder = {
    createOrder,
    sendConfirmationEmail,
  };
})();
