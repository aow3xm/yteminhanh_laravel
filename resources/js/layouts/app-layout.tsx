import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    headerTopContent?: string
    // breadcrumbs?: BreadcrumbItem[];
}

// export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
//     <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
//         {children}
//     </AppLayoutTemplate>
// );

export default ({ children, headerTopContent}: AppLayoutProps) => {
    return (
         <div className="min-h-screen grid grid-rows-[auto_1fr_auto] gap-4">
            <Header headerTopContent={headerTopContent}/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

