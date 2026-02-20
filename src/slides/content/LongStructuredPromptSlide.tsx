import React, { useEffect, useRef } from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const longPrompt = `{
  "subject": {
    "main_subject": "A colossal, giantess-scale female figure towering over a metropolitan city street, appearing as tall as the surrounding skyscrapers. Miniature construction scaffolding is rigged to her shoulders and torso, populated by tiny construction workers in safety vests and hard hats climbing and performing maintenance on the rig. She holds a white disposable coffee cup in her right hand and a structured leather handbag in her left hand.",
    "action": "Standing casually in the middle of a busy intersection, dominating the urban landscape. The figure is holding a coffee cup and a bag while tiny workers scale the scaffolding attached to her.",
    "pose": "Standing upright with a relaxed posture, arms slightly bent to hold accessories. The body is oriented front-facing towards the camera. Gaze in slightly right.",
    "scale_reference": "Surreal scale contrast where the human figure is monumental, dwarfing the cars and pedestrians below, which appear ant-sized."
  },
  "setting": {
    "location": "Dense urban metropolis, reminiscent of New York City avenues.",
    "environment": "A busy four-way street intersection surrounded by tall skyscrapers and office buildings.",
    "background_details": "Grid-locked traffic with distinct yellow taxis, small pedestrian figures on sidewalks and crosswalks, asphalt streets with white crosswalk markings, towering building facades with grid-like windows fading into the distance.",
    "time_of_day": "Mid-day, near noon."
  },
  "composition": {
    "camera_angle": "High angle / Bird's eye view relative to the street, but eye-level relative to the giant subject's face.",
    "shot_type": "Full shot (capturing the subject from head to toe within the vertical frame despite the massive scale).",
    "framing_technique": "Center composition, with the street lines acting as leading lines drawing the eye downward into the depth of the city canyon. Forced perspective emphasizes the height.",
    "perspective": "Three-point perspective looking down, creating extreme verticality. Deep layering from the subject in the foreground to the street in the background.",
    "aspect_ratio": "Vertical (likely 9:16 or 2:3)."
  },
  "lighting": {
    "type": "Natural daylight, hard lighting.",
    "source": "Direct overhead sunlight (simulating noon sun).",
    "shadows": "Sharp, distinct shadows cast by the giant figure onto the street below and by the scaffolding onto the subject. High contrast between sunlit areas and deep shadows between buildings.",
    "quality": "High-key lighting on the subject, clear and bright.",
    "color_temperature": "5600K (Daylight balance)."
  },
  "colors": {
    "palette": "Urban tones (concrete grey, asphalt black), taxi yellow, sky blue, warm skin tones, tan/brown leather accents.",
    "dominant_colors": ["Concrete Grey", "Asphalt Black", "Taxi Yellow", "Tan"],
    "color_grading_style": "Realistic with slightly boosted contrast and saturation to emphasize the surreal daylight setting.",
    "saturation": "Moderate/Natural.",
    "contrast": "High."
  },
  "style": {
    "cinematic_style": "Surrealism, Hyper-realism, Photobashing/Composite Photography.",
    "visual_effects": "Scale manipulation, seamless integration of macro and wide-angle elements.",
    "genre": "Conceptual Photography, Fantasy Realism.",
    "mood": "Playful, awe-inspiring, surreal."
  },
  "technical_details": {
    "focal_length": "24mm (Wide angle to capture the height and street depth).",
    "aperture": "f/8 (Deep depth of field to keep both the subject's face and the street below relatively sharp).",
    "shutter_speed": "1/500s (to freeze the traffic and potential movement).",
    "iso": "100 (low noise).",
    "lens_type": "Wide-angle prime lens.",
    "sensor_size": "Full frame."
  },
  "atmosphere": {
    "mood": "Surreal, imposing yet casual, bustling city energy.",
    "weather": "Sunny, clear skies.",
    "cinematic_mood": "A mix of 'Kaiju' scale with everyday fashion photography."
  },
  "text_and_graphics": {
    "visible_text": "None explicitly legible, blurry text on street signs and shop awnings in the distance.",
    "graphics": "Road markings (crosswalk stripes, lane dividers)."
  }
}`;

export const LongStructuredPromptSlide: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 60000; // 60 seconds for full scroll
    
    // Wait for content to render and calculate height
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Linear scroll
      const currentScroll = (progress / duration) * scrollHeight;
      
      if (currentScroll <= scrollHeight) {
        scrollContainer.scrollTop = currentScroll;
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Reset or loop if needed
        startTime = timestamp; // Loop
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Start animation after a small delay
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center p-20 bg-retro-bg">
      <AnimatedBlock delay={0.2} className="w-full max-w-7xl h-full max-h-[100vh]">
        <div className="w-full h-full border-2 border-retro-text rounded-3xl overflow-hidden bg-retro-bg/50 backdrop-blur-sm flex flex-col">
          {/* Window Header */}
          <div className="bg-retro-text text-retro-bg px-6 py-3 flex items-center justify-between font-mono text-2xl shrink-0 z-10">
            <span>complex_prompt.json</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
            </div>
          </div>

          {/* Editor Content with Auto-scroll */}
          <div className="flex-1 relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="absolute inset-0 p-12 overflow-hidden font-mono text-2xl leading-relaxed"
            >
              <pre className="text-retro-text whitespace-pre-wrap break-words pb-20">
                {longPrompt}
              </pre>
            </div>
            
            {/* Gradient overlay at bottom to indicate more content */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-retro-bg to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
