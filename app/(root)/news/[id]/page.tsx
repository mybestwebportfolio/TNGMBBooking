import getNewsById from "@/actions/getNewsById"
import { News } from "@/types"
import NewsContent from "./components/NewsContent"

const Page = async ({ params }: { params: { id: string } }) => {
    const news: News = await getNewsById(params.id)
    return (
        <div className="h-screen w-full flex items-center">
            <NewsContent news={news} />
        </div>
    )
}

export default Page