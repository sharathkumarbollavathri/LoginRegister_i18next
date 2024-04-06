import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const {t}=useTranslation()
    const navigate=useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const history = useHistory();
  
    const handleSubmit = () => {
      if (username && (password === confirmPassword)) {
        // Redirect to the home page or any other page after login
        // history.push('/home');
        navigate('/loginPage')
      } else if(confirmPassword!==password) {
        alert(' username and password should be same.');
      }
      else{
        alert('provide username and password.')
      }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>{t('sigin')}</h1>
                <div>
                    <input type="text" name="username" id="username" placeholder={t('username')} pattern='^[a-zA-Z0-9_-]{3,16}$' value={username}
        onChange={(e) => setUsername(e.target.value)} title='Username must contains atleast one number ,one UpperCase and be at least 3 characters long'/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder={t('password')} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Password must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder={t('confirmPassword')} id="confirmPassword" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' title="Enter the same password" value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>

                <div>
                    <button type='submit' id='sigin'>{t('signSubmitted')}</button>
                </div>
            </form>
        </>
    )
} 
