import { fetchFilteredCustomers } from "@/app/lib/data";
import Table from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({ searchParams }: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const customers = await fetchFilteredCustomers(query);

    return <div className="w-full">
        <Suspense fallback={<InvoicesTableSkeleton />}>
            <Table customers={customers} />
        </Suspense>
    </div>
}