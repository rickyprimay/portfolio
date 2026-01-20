declare module 'react-pdf' {
  export interface DocumentProps {
    file: string | File | null;
    children?: React.ReactNode;
    className?: string;
  }

  export interface PageProps {
    pageNumber: number;
    scale?: number;
    renderTextLayer?: boolean;
    renderAnnotationLayer?: boolean;
  }

  export const Document: React.FC<DocumentProps>;
  export const Page: React.FC<PageProps>;
  
  export const pdfjs: {
    GlobalWorkerOptions: {
      workerSrc: string;
    };
    version: string;
  };
}

declare module 'typewriter-effect' {
  interface TypewriterOptions {
    strings: string[];
    autoStart?: boolean;
    loop?: boolean;
    deleteSpeed?: number;
    delay?: number;
  }

  interface TypewriterProps {
    options: TypewriterOptions;
    onInit?: (typewriter: any) => void;
  }

  const Typewriter: React.FC<TypewriterProps>;
  export default Typewriter;
}

declare module 'react-github-calendar' {
  interface GitHubCalendarProps {
    username: string;
    blockSize?: number;
    blockMargin?: number;
    color?: string;
    fontSize?: number;
  }

  const GitHubCalendar: React.FC<GitHubCalendarProps>;
  export default GitHubCalendar;
}
