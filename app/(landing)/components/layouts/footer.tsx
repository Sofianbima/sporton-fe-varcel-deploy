const footer = () => {
    return (
            <footer className="bg-[#1B1918]">
            <div className="container mx-auto flex justify-between pt-14 pb-24">
                <div className="w-105">
                    <img 
                    src="/images/logo-footer.svg" 
                    alt="logo sporton"
                    width={187}
                    height={84}
                    />
                    <p className="text-white mt-8">
                        Engineered for endurance and designed for speed.  
                        Experience gear that moves as fast as you do.
                    </p>
                </div>
                <div className="w-105 grid grid-cols-2 gap-8 text-white">
                   <div className="flex gap-7 flex-col">
                      <a href="#">Home </a>
                      <a href="#">Categories </a>
                      <a href="#">Products </a>
                      <a href="#">About us </a>
                   </div>
                     <div className="flex gap-7 flex-col">
                     <a href="#">Instagram </a>
                     <a href="#">Facebook </a>
                     <a href="#">Tiktok </a>
                     <a href="#">Youtube </a>
                </div>
              </div>
            </div>
                <div className="border-t border-t-[#FFFFFF4D]">
                <div className="container mx-auto py-6.5 flex justify-between text-white">
                    <div><p>© 2024 Sporton. All rights reserved.</p></div>
                    <div className="flex gap-7 w-105">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer