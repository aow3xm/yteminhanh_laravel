import { Container } from '@/components/container';
import DOMpurify from 'dompurify';

export interface HeaderTopProps {
    headerTopContent?: string;
}
export function HeaderTop({ headerTopContent }: HeaderTopProps) {
    if (!headerTopContent) {
        return null;
    }
    return (
        <div className="bg-primary py-2 hidden sm:block">
            <Container
                dangerouslySetInnerHTML={{
                    __html: DOMpurify.sanitize(headerTopContent),
                }}
            />
        </div>
    );
}
