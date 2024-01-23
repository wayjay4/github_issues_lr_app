import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import IssuesApp from "@/Pages/Github/IssuesApp.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Dashboard({ auth }) {
    const queryClient = new QueryClient();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <QueryClientProvider client={queryClient}>
                <IssuesApp />
            </QueryClientProvider>
        </AuthenticatedLayout>
    );
}
