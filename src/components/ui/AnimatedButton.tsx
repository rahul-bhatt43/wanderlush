import React from 'react';
import { cn } from '../../lib/utils'; // Assuming standard utils path, or I'll check if it exists or use class-variance-authority directly if needed. 
// Based on button.tsx viewed earlier, it uses "@/lib/utils". Since I'm creating this file in src/components/ui/AnimatedButton.tsx, I should check if the alias works or use relative path. 
// button.tsx had `import { cn } from "@/lib/utils"`. I'll try to use the same. If it fails, I'll fix it.

// But wait, the user's project structure: `src/components/ui`. `button.tsx` is there.
// I'll stick to `react` and standard className handling.

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: React.ReactNode;
}

export const AnimatedButton = ({ text, icon, className, ...props }: AnimatedButtonProps) => {
    return (
        <button
            className={cn(
                "group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-black overflow-hidden transition-all hover:bg-gray-100",
                className
            )}
            {...props}
        >
            <div className="relative overflow-hidden h-6 flex items-center">
                <span className="block transition-transform duration-300 ease-in-out group-hover:translate-y-full">
                    {text}
                </span>
                <span className="absolute top-0 left-0 block transition-transform duration-300 ease-in-out -translate-y-full group-hover:translate-y-0">
                    {text}
                </span>
            </div>

            {icon && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {icon}
                </span>
            )}
        </button>
    );
};
