import Header from "../Components/Header"
import Login from "../Components/Login"
const LoginPage = () => {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-['Kanit']">
            <div className="max-w-md w-full space-y-8">
                <Header
                    heading="Login to your account"
                    paragraph="Don't have an account yet? "
                    linkName="Signup"
                    linkUrl="/signup"
                />
                <Login />
            </div>
        </div>

    );
}

export default LoginPage;
