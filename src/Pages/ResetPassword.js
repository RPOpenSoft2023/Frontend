import Header from "../Components/Header"
import ResetPassword from "../Components/ResetPassword";
const ResetPasswordPage = () => {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Header
                    heading="Account Recovery"
                    paragraph="To help keep your account safe, we need to make sure it’s really you trying to sign in"
                />
                <ResetPassword />
            </div>
        </div>

    );
}

export default ResetPasswordPage;
