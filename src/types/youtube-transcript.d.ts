declare module 'youtube-transcript-api' {
  interface TranscriptResponse {
    text: string;
    duration: number;
    offset: number;
    lang?: string;
  }

  interface TranscriptList {
    findTranscript(languages: string[]): {
      fetch(): Promise<TranscriptResponse[]>;
    };
  }

  export class YoutubeTranscript {
    static listTranscripts(videoId: string): Promise<TranscriptList>;
    static fetchTranscript(videoId: string, options?: { lang?: string }): Promise<TranscriptResponse[]>;
  }
} 