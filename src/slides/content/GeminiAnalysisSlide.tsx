import React, { useState, useEffect } from 'react';
import { Gemini } from '@lobehub/icons';
import { useSession } from '../../contexts/SessionContext';
import { useSocket } from '../../contexts/SocketContext';
import { AnimatedBlock } from '../../components/AnimatedBlock';

interface GeminiAnalysisSlideProps {
  pollId: string;
}

// Функция для преобразования markdown-bold (**text**) в span с акцентным цветом
const formatMarkdown = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={index} className="text-retro-dim italic font-medium">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

export const GeminiAnalysisSlide: React.FC<GeminiAnalysisSlideProps> = ({ pollId }) => {
  const { sessionId } = useSession();
  const { subscribeAnalysis, getAnalysis } = useSocket();
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Получаем текущий результат при монтировании
    getAnalysis(sessionId, pollId).then((currentResult) => {
      setResult(currentResult);
      setIsLoading(false);
    });

    // Подписываемся на обновления анализа
    const unsubscribe = subscribeAnalysis(pollId, (data) => {
      setResult(data.result);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [sessionId, pollId, getAnalysis, subscribeAnalysis]);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col">
      {/* Top Meta */}
      <div className="absolute top-12 left-12 right-12 flex justify-between items-start z-20 px-16">
        <AnimatedBlock delay={0.1}>
          <div className="flex flex-col">
            <span className="font-mono text-xl text-retro-dim tracking-widest uppercase font-bold">BHSAD 2026</span>
            <span className="font-mono text-xs text-retro-dim/60 uppercase mt-1 tracking-wider">Gemini Analysis</span>
          </div>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.2}>
          <div className="flex items-center gap-2 font-mono text-xs text-retro-dim/60 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-retro-accent rounded-full animate-pulse" />
            {isLoading ? 'Processing...' : 'Analysis_Ready'}
          </div>
        </AnimatedBlock>
      </div>

      {/* Main Content — только ответ от Gemini, без заголовков и бордеров */}
      <div className="flex-1 flex flex-col items-center justify-center z-50 relative px-16 py-24">
        <AnimatedBlock delay={0.3} direction="up">
          <div className="w-full max-w-7xl">
            {isLoading && !result ? (
              <div className="text-center">
                <div className="font-mono text-2xl text-retro-dim/60 mb-4">
                  // Ожидание ответов...
                </div>
                <div className="font-mono text-sm text-retro-dim/40 uppercase tracking-wider">
                  Саммари будет готово автоматически
                </div>
              </div>
            ) : result ? (
              <div className="flex flex-col items-left">
                <div className="mb-12">
                  <Gemini className="w-24 h-24 text-retro-accent animate-pulse" />
                </div>
                <div className="font-serif italic text-[3rem] text-retro-text leading-[1.25] whitespace-pre-wrap text-left">
                  {formatMarkdown(result)}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="font-mono text-xl text-retro-dim/60">
                  // Нет данных для анализа
                </div>
              </div>
            )}
          </div>
        </AnimatedBlock>
      </div>

      {/* Bottom Meta */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20 px-16">
        <AnimatedBlock delay={0.6}>
          <div className="font-mono text-xs text-retro-dim/40 tracking-wider">
            // Poll ID: {pollId}
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7}>
          <div className="font-mono text-xs text-retro-dim/40 tracking-wider">
            Session: {sessionId.slice(0, 8)}...
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
