import { useState } from 'react';
import instaLogo from '../assets/insta-logo.png';  
import '../components/UserPage.css';  

function UserPage () {
    // State to keep track of whether the user wants to sign up or log in
    const [isSignUp, setIsSignUp] = useState(false);

    // Function to toggle between sign up and login views
    const handleToggleView = () => {
        setIsSignUp((prevState) => !prevState);
    };

    return (
        <div className="user-page">
            {/* Instagram logo */}

            <div className="logo">
                <img src={instaLogo} alt="insta-logo" />
            </div>

            {/* Input fields */}

            <div className="input-fields">
                
                {/* Basic input fields if user choose to Log in or Sign up */}
                
                { isSignUp ?
                    <>
                    <input type="text" placeholder="Mobile Number, or Email" />
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Phone number, username, or email" />
                <input type="password" placeholder="Password" />
                       
                    </>
                 : 
                
                <> 
                
                <input type="text" placeholder="Phone Number, User Name, or Email" />
                <input type="password" placeholder="Password" />
                
                </>
                
                }

                {/* Button for sign up or login */}
                <button>{isSignUp ? 'Sign Up' : 'Sign in'}</button>

                {/* Toggle button to switch between sign up and login views */}
                <div className="toggle-button">
                    <p>{isSignUp ? ' have an account? ' : 'Do not have an account? '}</p>
                    <button onClick={handleToggleView}>
                        {isSignUp ? 'Log in' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
