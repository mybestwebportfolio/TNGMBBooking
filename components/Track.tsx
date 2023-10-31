import { Track } from "@/types"
import TrackCard from "./TrackCard"

interface TrackProps {
    trackOne: Track[],
    trackTwo: Track[]
}

const Track = ({ trackOne, trackTwo }: TrackProps) => {
    return (
        <div className="w-full h-screen max-md:h-fit py-10 max-lg:mt-44">
            <div className="flex flex-col gap-y-4 max-sm:px-3 px-14">
                <h2 className="text-neutral-700 text-xl">Natural Tourism</h2>
                <h1 className="text-black text-4xl font-bold">Are You Ready <br /> To Hiking ?</h1>
            </div>
            <div className="max-w-7xl mx-auto mt-16 max-sm:px-3">
                <div className="grid grid-cols-1 max-md:space-y-4 md:grid-cols-2 md:space-x-4">
                    {trackOne.map((track) => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-4 max-sm:px-3">
                <div className="grid grid-cols-1 max-md:space-y-4 md:grid-cols-3 gap-x-3">
                    {trackTwo.map((track) => (
                        <TrackCard key={track.id} track={track} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Track