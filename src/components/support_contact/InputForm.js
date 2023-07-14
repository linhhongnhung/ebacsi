import React from "react"
export function InputForm() {
    return (
        <form className="w-[75rem] mx-auto mb-60 pt-[3.75rem] pb-[3.875rem] shadow-2xl rounded-[1.25rem] mt-[2.813rem]">
            <div className="mx-[3.125rem]">
                <h2 className="text-[2.864rem] font-bold text-primary text-center drop-shadow-2xl">BẠN CẦN TÌM HIỂU THÊM THÔNG TIN VỀ SẢN PHẨM?</h2>
                <p className="text-[1.563rem] text-gray text-center">Vui lòng liên hệ hotline 19001544 hoặc gửi thông tin của bạn để được hỗ trợ.</p>
                <div className="flex flex-row mt-[2.188rem] items-center justify-between">
                    <input className="border-[0.094rem] border-primary w-[43.875rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none" type="text" placeholder="Họ và tên (*)" />
                    <p className="text-gray text-xl">Giới tính:</p>
                    <div>
                        <input className="w-4 h-4 mx-2 accent-primary" id="male" type="radio" name="gender" value="Nam" />
                        <label for="male" className="text-gray text-xl">Nam</label>
                    </div>
                    <div className="mr-[7.313rem]">
                        <input className="w-4 h-4 mx-2 accent-primary" id="female" type="radio" name="gender" value="Nữ" />
                        <label for="female" className="text-gray text-xl">Nữ</label>
                    </div>
                </div>
                <div className="flex flex-row my-5">
                    <input className="border-[0.094rem] border-primary w-[18.656rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none mr-[1.875rem]" type="text" placeholder="Năm sinh:" />
                    <input className="border-[0.094rem] border-primary w-[23.375rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none" type="text" placeholder="Số điện thoại (*)" />
                </div>
                <div className="flex flex-row justify-between">
                    <input className="border-[0.094rem] border-primary w-[18.656rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none" type="text" placeholder="Tỉnh/ Thành phố (*)" />
                    <input className="border-[0.094rem] border-primary w-[18.656rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none" type="text" placeholder="Quận/ Huyện (*)" />
                    <input className="border-[0.094rem] border-primary w-[27.938rem] h-[3.75rem] px-8 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none" type="text" placeholder="Địa chỉ (*)" />
                </div>
                <p className="mt-[2.688rem] mb-[0.375rem] text-gray text-xl">Nội dung cần tư vấn (*)</p>
                <textarea className="border-[0.094rem] border-primary w-full h-[13.188rem] px-8 py-5 text-xl rounded-[1.875rem] focus:ring-2 focus:outline-none"/>
                <div className="w-[21.875rem] h-[3.781rem] rounded-[1.875rem] bg-[#f68b1f] flex justify-center items-center mx-auto mt-10 ">
                    <p className="text-white text-[1.926rem] font-bold">GỬI THÔNG TIN</p>
                </div>
                
            </div>
        </form>
    )
}