import React from 'react'

const Sidebar = () => {
    return (
        <div className="fixed right-2 top-[70%] -translate-y-1/2 flex flex-col gap-5 z-[1000]">
            {/* Phone Icon */}
            <a
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0077b6] shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#005f8b] hover:shadow-xl md:w-12 md:h-12 sm:w-10 sm:h-10"
                title="Call"
            >
                <img
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                    alt="Phone"
                    className="w-1/2 h-1/2 md:w-[40%] md:h-[40%] sm:w-[30%] sm:h-[30%]"
                />
            </a>

            {/* WhatsApp Icon */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25d366] shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#1cb555] hover:shadow-xl md:w-12 md:h-12 sm:w-10 sm:h-10"
                title="WhatsApp"
            >
                <img
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/whatsapp.png"
                    alt="WhatsApp"
                    className="w-1/2 h-1/2 md:w-[40%] md:h-[40%] sm:w-[30%] sm:h-[30%]"
                />
            </a>

            {/* Telegram Icon */}
            <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0088cc] shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#006f9f] hover:shadow-xl md:w-12 md:h-12 sm:w-10 sm:h-10"
                title="Telegram"
            >
                <img
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/telegram-app.png"
                    alt="Telegram"
                    className="w-1/2 h-1/2 md:w-[40%] md:h-[40%] sm:w-[30%] sm:h-[30%]"
                />
            </a>
        </div>
    )
}

export default Sidebar