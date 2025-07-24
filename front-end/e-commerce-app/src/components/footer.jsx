

const Footer = () =>{

const today = new Date();
const year = today.getFullYear();

    
    return(
    
    <footer className="bg-[#FF8A65] text-gray-700 text-sm mt-16 py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {year} G&N Pawsentials. All rights reserved.</p>

                <div className="flex space-x-4">
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
    </footer>
)
}

export default Footer