import AlertInitiator from './alert-initiator';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js');
    });
  } else {
    AlertInitiator.init('Browser ini tidak mendukung PWA, beberapa fitur mungkin tidak bekerja dengan baik.');
  }
};

export default swRegister;
