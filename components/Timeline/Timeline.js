import Flickity from 'react-flickity-component'

const TIMELINE_DATA = [
    {
        image: "/images/mhd.jpg",
        title: "Mental Health Day Special Thoughts",
        date: "Oct 10, 2020"
    },
    {
        image: "/images/expert2.png",
        title: "Experts Insights Live #2",
        date: "Aug 30, 2020"
    },
    {
        image: "/images/expert1.png",
        title: "Experts Insights Live #1",
        date: "Aug 22, 2020"
    },
]

const flickityOptions = {
    rightToLeft: true
}

export default function Timeline(){
    return(
        <div>
            <Flickity
                options={flickityOptions} // takes flickity options {}
            >
                {TIMELINE_DATA.map((item, index) =>
                    <div key={index}>
                        <div className="py-3 px-4">
                            <div>
                                <img src={item.image} />
                            </div>
                            <div className="pt-3">
                                <h4 className="mt-bold">{item.title}</h4>
                                <h6 className="text-muted">{item.date}</h6>
                            </div>
                        </div>
                    </div>
                )}
            </Flickity>
            <style jsx>{`
                img {
                    max-height: 300px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
                }
            `}</style>
        </div>
    )
}