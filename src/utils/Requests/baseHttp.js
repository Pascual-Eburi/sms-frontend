/* eslint-disable no-unused-vars */
// Definimos la interfaz base para las estrategias
class BaseHttpStrategy {
  /**
   *
   * @param method
   * @param url
   * @param data
   * @param headers
   */
  request(method, url, data = null, headers = {}) {
    throw new Error("El método request debe ser implementado.");
  }

  /**
   *
   * @param url
   * @param formData
   */
  uploadFile(url, formData) {
    throw new Error("Método 'uploadFile' debe ser implementado");
  }

  /**
   *
   * @param url
   * @param method
   * @param filename
   */
  downloadFile(url, method, filename) {
    throw new Error("Método 'downloadFile' debe ser implementado");
  }
}

export default BaseHttpStrategy
