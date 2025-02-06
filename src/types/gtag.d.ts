// src/types/gtag.d.ts
declare global {
    interface Window {
      gtag: (
        command: 'event',
        action: string,
        params: {
          page_title?: string;
          page_path?: string;
          [key: string]: any;
        }
      ) => void;
    }
  }
  
  export {};