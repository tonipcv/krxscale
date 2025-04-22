declare module 'youtube-captions-scraper' {
  interface SubtitleOptions {
    videoID: string;
    lang?: string;
  }

  interface Subtitle {
    text: string;
    duration: number;
    offset: number;
    lang?: string;
  }

  export function getSubtitles(options: SubtitleOptions): Promise<Subtitle[]>;
} 