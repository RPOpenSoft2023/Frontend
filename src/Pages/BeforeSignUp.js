import ForgotPassword from "../Components/ForgotPassword";
import Header from "../Components/Header";

const BeforeSignUpPage = () => {
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Header
                    heading="Signup to create an account"
                    paragraph="Already have an account? "
                    linkName="Login"
                    linkUrl="/login"
                />
                <ForgotPassword text="/signup/profile"/>
            </div>
        </div>
    );
}

export default BeforeSignUpPage;