import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
type Size = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ContainerProps = {
    size?: Size;
    children?: React.ReactNode;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

const sizeMap: Record<Size, string> = {
    default: 'max-w-7xl',
    sm: 'max-w-xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
} as const;

export function Container({
    size = 'default',
    children,
    className,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn('mx-auto w-full px-4 md:px-8 lg:px-16', sizeMap[size], className)}
            {...props}
        >
            {children}
        </div>
    );
}
