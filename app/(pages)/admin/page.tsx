import getBookingData from "@/actions/getBookingData";

import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

const Page = async () => {
    const bookingData = await getBookingData()
    return (
        <div className="mt-5">
            <h1 className="text-black text-2xl mb-4 max-lg:pl-6">Manage Booking Data</h1>
            <div className="w-full h-[80vh] bg-white overflow-y-auto overflow-x-auto p-5">
                <DataTable columns={columns} data={bookingData} />
            </div>
        </div>
    )
}

export default Page