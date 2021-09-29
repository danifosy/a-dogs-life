import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Typography from '../../components/Typography/Typography';
import { Link } from 'react-router-dom';
import styles from './SignUpPage.module.css';
import { AuthContext } from '../../App';

export default function SignUpPage(): JSX.Element {
  const { dispatch } = React.useContext(AuthContext);

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // validate password == repeat_password
    // ...

    // set isAuthenticated = true
    // set userType = ...

    dispatch({
      type: 'LOGIN',
      payload: {
        userName: event.target.name.value,
        userType: event.target.userType.value,
      },
    });

    // navigate to main home

    return true;
  };

  return (
    <form className={styles.signup} onSubmit={submit}>
      <Typography size="l">Anmeldung</Typography>
      <Typography size="m">Ich melde mich an als</Typography>

      <label htmlFor="ARA" className={styles.label}>
        <input
          type="radio"
          name="userType"
          value="ARA"
          id="ARA"
          className={styles.checkbox}
        />
        <Typography size="s">Tierschützer*in</Typography>
      </label>
      <label htmlFor="user" className={styles.label}>
        <input
          defaultChecked={true}
          type="radio"
          name="userType"
          value="user"
          id="user"
          className={styles.checkbox}
        />
        <Typography size="s">Interessent</Typography>
      </label>

      <TextInput id="name" inputType="text">
        Name
      </TextInput>
      <TextInput id="email" inputType="text">
        Email
      </TextInput>

      <TextInput id="password" inputType="password">
        Passwort
      </TextInput>
      <TextInput id="repeat_password" inputType="password">
        Passwort wiederholen
      </TextInput>
      <div className={styles.button}>
        <SubmitButton icon="signup">Anmelden</SubmitButton>
      </div>
      <Link to="/login" className={styles.loginText}>
        <Typography size="s">
          Hast du bereits einen Account? <br />
          Hier geht's zum Login.
        </Typography>
      </Link>
    </form>
  );
}
