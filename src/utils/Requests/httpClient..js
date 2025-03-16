
import FetchHttpStrategy from '@/utils/requests/Fetch/index.js'
import BaseHttpStrategy from '@/utils/requests/baseHttp.js'

// Contexto que usará una estrategia de petición
class HttpClient {
  constructor(strategy = new FetchHttpStrategy()) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy) {
    if (!(strategy instanceof BaseHttpStrategy)) {
      throw new Error("La estrategia debe heredar de BaseHttpStrategy");
    }
    this.strategy = strategy;
  }

  request(method, url, data = null, headers = {}) {
    return this.strategy.request(method, url, data, headers);
  }


  uploadFile(url, formData) {
    return this.strategy.uploadFile(url, formData);
  }

  

  downloadFile(url,method, filename) {
    return this.strategy.downloadFile(url, method, filename);
  }
}

// Exportamos el módulo para usarlo en Vue u otros archivos
export default HttpClient;
