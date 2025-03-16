import BaseHttpStrategy from '@/utils/requests/baseHttp.js'
import triggerDownload from '@/utils/Files/download.js'

// Implementation with Fetch API
class FetchHttpStrategy extends BaseHttpStrategy {
  async request(method, url, data = null, headers = {}) {
    try {
      const response = await fetch(url, {
        method: method.toUpperCase(),
        headers: { "Content-Type": "application/json", ...headers },
        body: data ? JSON.stringify(data) : null
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Fetch Error: ${error.message}`);
    }
  }

  async uploadFile(url, formData) {
    try {
      const response = await fetch(url, {
        method: "POST", body: formData
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      return await response.json();
    } catch (error) {
      console.error("Error en subida con Fetch:", error);
      throw error;
    }
  }

  async downloadFile(url, method, filename = "archivo") {
    try {
      const response = await fetch(url, {method: method});

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      // Verificar si el servidor devuelve una URL o un archivo
      const contentDisposition = response.headers.get("content-disposition");
      if (contentDisposition && contentDisposition.includes("attachment")) {
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        triggerDownload(objectURL, filename);
      } else {
        // Si devuelve una URL, redirigir al usuario
        window.location.href = await response.text();
      }
    } catch (error) {
      console.error("Error en descarga con Fetch:", error);
      throw error;
    }
  }

}
export default FetchHttpStrategy;
