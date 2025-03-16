import BaseHttpStrategy from '@/utils/requests/baseHttp.js';
import $ from "jquery";
import triggerDownload from '@/utils/Files/download.js'

// Implementación de AJAX con jQuery
class JQueryHttpStrategy extends BaseHttpStrategy {
  /**
   *
   * @param method
   * @param url
   * @param data
   * @param headers
   */
  request(method, url, data = null, headers = {}) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        method: method.toUpperCase(),
        data: data ? JSON.stringify(data) : null,
        contentType: "application/json",
        headers: headers,
        dataType: "json",
        success: resolve,
        error: reject
      });
    });
  }

  /**
   *
   * @param url
   * @param formData
   */
  async uploadFile(url, formData) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => resolve(data),
        error: (jqXHR, textStatus, errorThrown) => {
          console.error("Error en subida con jQuery AJAX:", textStatus, errorThrown);
          reject(new Error(`Error: ${textStatus} - ${errorThrown}`));
        }
      });
    });
  }

  async downloadFile(url,method, filename = "archivo") {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        type: method.toUpperCase(),
        xhrFields: { responseType: "blob" }, // Para manejar archivos binarios
        success: function (data, status, xhr) {
          const contentDisposition = xhr.getResponseHeader("Content-Disposition");
          if (contentDisposition && contentDisposition.includes("attachment")) {
            const objectURL = URL.createObjectURL(data);
            triggerDownload(objectURL, filename);
          } else {
            window.location.href = URL.createObjectURL(data);
          }
          resolve();
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error en descarga con jQuery AJAX:", textStatus, errorThrown);
          reject(new Error(`Error: ${textStatus} - ${errorThrown}`));
        }
      });
    });
  }

}

export default JQueryHttpStrategy;
