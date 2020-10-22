import { BsArrowRightShort } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

export default function SingleArrowButton(props) {
    return (
        <div>
            <button className={`btn ${props.solid && "btn-solid"} ${props.hollow && "btn-hollow"}`} disabled={props.disabled}>
                <div className="d-flex align-items-center">
                    <div className="text-content">
                        {props.children}
                    </div>
                    <div className="arrow pl-2">
                        {props.send ?
                            <MdSend className="pl-1" color="white" size="21" />
                            :
                            <BsArrowRightShort color="white" size="24" />
                        }
                        
                    </div>
                </div>
            </button>
            <style jsx>{`
                .text-content {
                    position: relative;
                    left: 15px;
                    transition: 0.3s
                }
                .arrow {
                    transform: scale(0);
                    transition: 0.3s;
                    overflow: hidden;
                }
                .btn:hover .arrow{
                    transform: scale(1.2);
                }
                .btn:hover .text-content {
                    left: 5px;
                    color: white;
                }
            `}</style>
        </div>
    )
}