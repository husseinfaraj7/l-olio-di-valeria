(function () {
  const CONTACT_DELAY = 800;
  const NEWSLETTER_DELAY = 500;

  function logGroup(title, payload) {
    console.group(`[Placeholder] ${title}`);
    console.log('Timestamp:', new Date().toISOString());
    console.log('Payload:', payload);
    console.groupEnd();
  }

  async function submitContact(formData) {
    logGroup('Contact Form Submission', formData);
    await new Promise((resolve) => setTimeout(resolve, CONTACT_DELAY));
    return {
      message: 'Grazie per il tuo messaggio! Questa è una risposta simulata.',
    };
  }

  async function checkHealth() {
    console.info('[Placeholder] Simulating contact endpoint health check.');
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { status: 'ok', checkedAt: new Date().toISOString() };
  }

  async function subscribeNewsletter(email) {
    logGroup('Newsletter Subscription', { email });
    await new Promise((resolve) => setTimeout(resolve, NEWSLETTER_DELAY));
    return {
      message: 'Iscrizione alla newsletter registrata (modalità demo).',
    };
  }

  function attachNewsletterFeedback(form) {
    if (!form || form.dataset.placeholderFeedback === 'true') {
      return;
    }

    const feedback = document.createElement('div');
    feedback.className = 'newsletter-feedback';
    feedback.setAttribute('role', 'status');
    feedback.style.marginTop = '12px';
    feedback.style.fontSize = '0.95rem';
    feedback.style.fontWeight = '600';
    feedback.style.display = 'none';

    form.insertAdjacentElement('afterend', feedback);
    form.dataset.placeholderFeedback = 'true';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) {
        return;
      }

      feedback.style.display = 'block';
      feedback.style.color = '#2563eb';
      feedback.textContent = 'Invio in corso...';

      try {
        const result = await subscribeNewsletter(input.value.trim());
        feedback.style.color = '#047857';
        feedback.textContent = result?.message || 'Iscrizione completata.';
        input.value = '';
      } catch (error) {
        console.error('Newsletter placeholder error:', error);
        feedback.style.color = '#dc2626';
        feedback.textContent = 'Non è stato possibile registrare la richiesta. Riprova più tardi.';
      }
    });
  }

  window.ContactPlaceholder = {
    submitContact,
    checkHealth,
    subscribeNewsletter,
    attachNewsletterFeedback,
  };

  document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('#newsletterForm');
    if (newsletterForm) {
      attachNewsletterFeedback(newsletterForm);
    }
  });
})();
