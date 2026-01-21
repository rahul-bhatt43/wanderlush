import React, { type ReactNode } from 'react';
import { AnimatedButton } from './AnimatedButton';

interface Action {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

interface SectionHeaderProps {
    title: ReactNode;
    description: string;
    primaryAction?: Action;
    secondaryAction?: Action;
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    primaryAction,
    secondaryAction,
    className = ''
}) => {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8 ${className}`}>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
                {title}
            </h2>
            <div className="max-w-md">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>
                {(primaryAction || secondaryAction) && (
                    <div className="flex gap-3">
                        {primaryAction && (
                            <AnimatedButton
                                onClick={primaryAction.onClick}
                                text={primaryAction.label}
                                className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                            />
                        )}
                        {secondaryAction && (
                            <AnimatedButton
                                onClick={secondaryAction.onClick}
                                text={secondaryAction.label}
                                className="px-5 py-2 border border-black text-black rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
