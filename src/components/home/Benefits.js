import React from "react";
import { BenefitItem } from "./benefit_item/BenefitItem";

const benefits = [
    {
        img: "/img/Website---eBacsi---final---cut_45.jpg",
        text: "Đảm bảo giãn cách xã hội - Tránh tiếp xúc gần"
    },
    {
        img: "/img/Website---eBacsi---final---cut_47.jpg",
        text: "Tiết kiệm thời gian di chuyển, chi phí chữa khám bệnh"
    },
    {
        img: "/img/Website---eBacsi---final---cut_49.jpg",
        text: "Khám đúng lịch hẹn không chờ đợi, thuận tiện sắp xếp thời gian"
    },
    {
        img: "/img/Website---eBacsi---final---cut_54.jpg",
        text: "Thăm khám dễ dàng qua cuộc gọi Video Call của bác sĩ bất kỳ ở đâu"
    },
    {
        img: "/img/Website---eBacsi---final---cut_55.jpg",
        text: "Được tư vấn hầu hết các chuyên khoa; chăm sóc sức khỏe cho cả gia đình ở mọi lứa tuổi"
    },
    {
        img: "/img/Website---eBacsi---final---cut_56.jpg",
        text: "Tối ưu hoá các quy trình hoạt động"
    }

]

export function Benefits() {
    return (
        <React.Fragment>
            <div className="text-center w-[75rem] mx-auto mt-[4.25rem]">
                <p className="text-4xl text-primary"><b>VNPT eBacsi</b> - Giúp việc chăm sóc sức khỏe đơn giản và gần gũi hơn</p>
                <img className="mx-auto mb-4 mt-2" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
                <p className="text-2xl text-gray ">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
            <div className="w-[75rem] grid grid-cols-3 gap-[0.938rem] mx-auto mb-[7.875rem] mt-[2.75rem]">
                {
                    benefits.map((item, index) => {
                        return <BenefitItem
                            keys={index}
                            img={item.img}
                            text={item.text}
                        ></BenefitItem>
                    })
                }
            </div>
        </React.Fragment>
    )
}