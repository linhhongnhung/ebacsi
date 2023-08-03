import React from "react"
import { Link } from "react-router-dom";

export function ServiceDetailContent() {
    return (
        <form className="w-[75rem] mx-auto mb-[16.625rem] mt-[3.125rem] xl:w-auto xl:px-6">
            <div className="flex flex-row justify-between xl:flex-col">
                <img className="w-[40.125rem] h-[22.5rem] xl:w-auto xl:h-auto" src="https://ebacsi.com.vn/assets/img/goikham/Thumnail%20Tiem%20chung%20tien%20hon%20nhan.jpg" />
                <div className="flex flex-col ml-[1.313rem] xl:mt-4 md:ml-2">
                    <p className="text-4xl text-primary font-bold md:text-3xl">Gói chăm sóc sức khoẻ cho doanh nghiệp</p>
                    <img className="w-[3.625rem] mb-4 mt-2" src="./img/Website---eBacsi---final---cut_17.jpg" alt="." />
                    <p className="text-[1.302rem] text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <Link>
                            <img className="mb-4 mt-[3.125rem] md:w-48 xl:mt-4" src="./img/Dang ky ngay.png" alt="." />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[4.125rem] md:mt-8">
                <p className="text-3xl text-primary font-bold mb-5">Thông tin chi tiết:</p>
                <p className="text-[1.302rem] text-gray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                <img className="w-[60.009rem] my-12 mx-auto" />
                <p className="text-[1.302rem] text-gray">Quý khách hàng vui lòng liên hệ tổng đài 19001544 hoặc tải ứng dụng VNPT eBacsi để được hỗ trợ tư vấn gói dịch vụ</p>
            </div>
        </form>
    )
}