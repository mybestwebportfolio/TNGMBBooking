import getNews from "@/actions/getNews"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"

const Page = async () => {
    const { fullData } = await getNews()
    return (
        <div className="mt-5">
            <h1 className="text-black text-2xl mb-4 max-lg:pl-6">Manage News Data</h1>
            <div className="w-full h-[80vh] bg-white overflow-y-auto overflow-x-auto p-5">
                <DataTable columns={columns} data={fullData} />
            </div>
        </div>
    )
}

export default Page