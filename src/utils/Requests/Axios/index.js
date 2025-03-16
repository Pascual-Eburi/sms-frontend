import  Axios from ' Axios';
import BaseHttpStrategy from '@/utils/requests/baseHttp.js';
import triggerDownload from '@/utils/Files/download.js'

// Implementation with Axios
class AxiosHttpStrategy extends BaseHttpStrategy {
  constructor(axiosInstance) {
    super();
    this.axios = axiosInstance || Axios; // Permite inyectar una instancia de Axios
  }

  async request(method, url, data = null, headers = {}) {
    try {
      return  await this.axios({ method: method.toLowerCase(), url, headers, data });

    } catch (error) {
      throw new Error(`Axios Error: ${error.message}`);
    }
  }

  async uploadFile(url, formData) {
    try {
      const response = await this.axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return response.data;
    } catch (error) {
      console.error("Error en subida con Axios:", error);
      throw error;
    }
  }

  async downloadFile(url, method, filename = "archivo") {
    try {
      const response = await this.axios.get(url);

      // Verificar si la respuesta es una URL o un archivo generado en memoria
      const contentDisposition = response.headers["content-disposition"];
      if (contentDisposition && contentDisposition.includes("attachment")) {
        // Si el servidor devuelve un archivo en la respuesta, creamos un blob
        const blob = new Blob(
          [response.data],
          { type: response.headers["content-type"] }
        );
        const objectURL = URL.createObjectURL(blob);
        triggerDownload(objectURL, filename);
      } else {
        // Si el servidor devuelve una URL, redirigimos al usuario
        window.location.href = URL.createObjectURL(response.data);
      }
    } catch (error) {
      console.error("Error en descarga con Axios:", error);
      throw error;
    }
  }


}

export default AxiosHttpStrategy;
