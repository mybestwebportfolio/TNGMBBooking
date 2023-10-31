import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import getTestimonials from "@/actions/getTestimonials";

const Page = async () => {
    const testimonialData = await getTestimonials()
    return (
        <div className="mt-5">
            <h1 className="text-black text-2xl mb-4 max-lg:pl-6">Manage Testimony Data</h1>
            <div className="w-full h-[80vh] bg-white overflow-y-auto overflow-x-auto p-5">
                <DataTable columns={columns} data={testimonialData} />
            </div>
        </div>
    )
}

export default Page