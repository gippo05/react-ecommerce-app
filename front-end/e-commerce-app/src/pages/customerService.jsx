const CustomerService = () =>{

    return(
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Need Assistance?</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                        type="text"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                        <input
                        type="text"
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomerService;