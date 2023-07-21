import React from "react";

function QrCode() {
    return (
        <div className="flex flex-row w-[75rem] mx-auto justify-between absolute z-[1]">
            <img className="rounded-[2rem] w-[55rem] h-auto border-solid border-[0.35rem] border-white drop-shadow-[0_35px_35px_rgba(108,201,254,1)]" src="/img/video.png" alt="video" />
            <div className="flex flex-col justify-center">
                <img className="w-[12.813rem] mx-auto" src="/img/qrApp.png" alt="qr" />
                <p className="text-white font-bold text-3xl my-6">Tải ứng dụng ngay!</p>
                <img className="w-[12.813rem] mx-auto mb-5" src="/img/Website---eBacsi---final---cut_77.png" alt="google play" />
                <img className="w-[12.813rem] mx-auto" src="/img/Website---eBacsi---final---cut_79.png" alt="app store" />
            </div>
        </div>
    )
}

export function Feedbacks() {
    return (
        <React.Fragment>
            <div className="w-[75rem] mx-auto">
                <QrCode />
                <div className="w-full mb-32">
                    <div className="w-[75rem] mx-auto relative">
                        
                    </div>
                </div>
            </div>
            <img src="./img/Banner 4.jpg" className="w-full relative max-h-[63.125rem] object-cover pt-[9.5rem]" alt="bg" />
        </React.Fragment>
    )
}