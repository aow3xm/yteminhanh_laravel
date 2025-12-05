import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

interface HomePageProps {
    headerTopContent?: string;
}

export default function HomePage({ headerTopContent }: HomePageProps) {
    return (
        <AppLayout headerTopContent={headerTopContent}>
            <Head title="Y Tế Minh Anh"></Head>
        </AppLayout>
    );
}
