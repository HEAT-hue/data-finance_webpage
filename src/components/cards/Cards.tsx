// jshint esversion:6
import single from "../../assets/single.png";
import double from "../../assets/double.png";
import triple from "../../assets/triple.png";
import { Card } from "../card";

const cardData = [
    {
        id: 1,
        img: single,
        userType: "Single User",
        price: '$149',
        storageCapacity: '500 GB',
        grantedUsers: 1,
        sendAmount: '2 GB'
    },
    {
        id: 2,
        img: double,
        userType: "Single User",
        price: '$149',
        storageCapacity: '500 GB',
        grantedUsers: 1,
        sendAmount: '2 GB'
    },
    {
        id: 3,
        img: triple,
        userType: "Single User",
        price: '$149',
        storageCapacity: '500 GB',
        grantedUsers: 1,
        sendAmount: '2 GB'
    },
    {
        id: 4,
        img: triple,
        userType: "Single User",
        price: '$149',
        storageCapacity: '500 GB',
        grantedUsers: 1,
        sendAmount: '2 GB'
    }
]


function Cards() {
    return (
        <div className="py-20 px-4 bg-white">
            <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,300px))] justify-center gap-6 gap-y-14">
                <>
                    {cardData.map((card) => {
                        return <Card key={card.id} darkTheme={card.id % 2 == 0} {...card} />
                    })}
                </>
            </div>

        </div>
    );
}

export { Cards }