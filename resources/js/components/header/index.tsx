import { Container } from '@/components/container';
import { HeaderTop, HeaderTopProps } from '@/components/header/header-top';
interface HeaderProps extends HeaderTopProps{}

export function Header({headerTopContent}: HeaderProps) {
    return (
        <div>
            <HeaderTop headerTopContent={headerTopContent} />
            <header className="py-4 bg-background">
                <Container>
                    <p>header</p>
                </Container>
            </header>
        </div>
    );
}
