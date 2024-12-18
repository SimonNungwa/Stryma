const Login = () => {
    return (
        <div className="p-6 rounded-lg max-w-md mx-auto">
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border-b border-black"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border-b border-black outline-none"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div className="text-lg">Forgot password?</div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-md  "
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
