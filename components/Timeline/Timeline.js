import Flickity from 'react-flickity-component'

const TIMELINE_DATA = [
    {
        image: "/images/mhd.jpg",
        title: "Mental Health Day Special Thoughts",
        date: "Oct 10, 2020",
        link: "https://www.instagram.com/p/CGKxCHchsre/?igshid=14im7d7if4tca"
    },
    {
        image: "/images/expert2.png",
        title: "Experts Insights Live #2",
        date: "Aug 30, 2020",
        link: "https://www.instagram.com/p/CEhAJRcBIa-/?igshid=u359gm3u3grz"
    },
    {
        image: "/images/expert1.png",
        title: "Experts Insights Live #1",
        date: "Aug 22, 2020",
        link: "https://www.instagram.com/tv/CEMabcVobr8/?igshid=m858zqknlt6m"
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
                    <a href={item.link} key={index}>
                        <div className="py-3 px-4">
                            <div>
                                <img src={item.image} />
                            </div>
                            <div className="pt-3">
                                <h4 className="mt-bold">{item.title}</h4>
                                <h6 className="text-muted">{item.date}</h6>
                            </div>
                        </div>
                    </a>
                )}
            </Flickity>
            <style jsx>{`
                img {
                    max-height: 300px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.3);
                }
                a, a:hover {
                    text-decoration: none;
                    color: rgb(20, 36, 80);
                }
            `}</style>
        </div>
    )
}