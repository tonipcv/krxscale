declare module 'youtube-transcript-api' {
  export class YoutubeTranscript {
    static fetchTranscript(videoId: string, options?: { lang?: string }): Promise<{
      text: string;
      duration: number;
      offset: number;
      lang?: string;
    }[]>;
  }
} 