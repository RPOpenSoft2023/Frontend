export default function FormExtra() {
    return (
        <div className="flex items-center justify-between ">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>
            </div>

            <div className="text-sm">
<<<<<<< HEAD
                <a href="/" className="font-medium text-sky-600 hover:text-sky-500">
=======
                <a href="/forgotpassword" className="font-medium text-sky-600 hover:text-sky-500">
>>>>>>> 7e8d15ff351a55918f0d8c13533c2d7987af522d
                    Forgot your password?
                </a>
            </div>
        </div>

    )
}