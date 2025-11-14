(function () {
  function showMessage(options, type, fallback) {
    if (type === 'success' && typeof options.onSuccess === 'function') {
      options.onSuccess({ templateIds: options.templateIds || [] });
    }
    if (type === 'error' && typeof options.onError === 'function') {
      options.onError(new Error(fallback));
    }
  }

  async function handleContact(form, options) {
    if (window.ContactPlaceholder && typeof window.ContactPlaceholder.submitContact === 'function') {
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const result = await window.ContactPlaceholder.submitContact(payload);
      showMessage(options, 'success', '');
      return result;
    }

    showMessage(options, 'success', '');
    return { message: 'Placeholder contact submission completed.' };
  }

  async function handleNewsletter(form, options) {
    const input = form.querySelector('input[type="email"]');
    const email = input ? input.value.trim() : '';

    if (window.ContactPlaceholder && typeof window.ContactPlaceholder.subscribeNewsletter === 'function') {
      const result = await window.ContactPlaceholder.subscribeNewsletter(email);
      showMessage(options, 'success', '');
      return result;
    }

    showMessage(options, 'success', '');
    return { message: 'Placeholder newsletter subscription recorded.' };
  }

  window.EmailUtils = {
    initFormWithEmailTemplate(selector, templateName, options = {}) {
      const form = document.querySelector(selector);
      if (!form || form.dataset.emailUtilsAttached === 'true' || form.dataset.handlerRegistered === 'true') {
        return;
      }

      form.dataset.emailUtilsAttached = 'true';

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
          if (templateName === 'contact') {
            await handleContact(form, options);
          } else if (templateName === 'newsletter') {
            await handleNewsletter(form, options);
          } else {
            showMessage(options, 'success', '');
          }

          if (options.resetOnSuccess !== false) {
            form.reset();
          }
        } catch (error) {
          console.error('[Placeholder] EmailUtils error:', error);
          showMessage(options, 'error', error.message || 'Errore inatteso');
        }
      });
    }
  };
})();
