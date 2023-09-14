declare module 'react-native-video-processing' {
    export interface CompressOptions {
      width: number;
      height: number;
      bitrateMultiplier: number;
      // Agrega otros tipos según la biblioteca
    }
  
    export default class VideoProcessing {
      static compress(uri: string, options: CompressOptions): Promise<string>;
      // Agrega otros métodos y tipos según la biblioteca
    }
  }