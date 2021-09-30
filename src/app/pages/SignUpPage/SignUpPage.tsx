import React from 'react';
import TextInput from '../../components/TextInput/TextInput';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Typography from '../../components/Typography/Typography';
import { Link, useHistory } from 'react-router-dom';
import styles from './SignUpPage.module.css';
import type { UserType } from '../../App';
import { AuthContext } from '../../App';

interface FormElements extends HTMLFormControlsCollection {
  userType: HTMLInputElement;
  name: HTMLInputElement;
  password: HTMLInputElement;
  repeat_password: HTMLInputElement;
}

interface RegistrationFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function SignUpPage(): JSX.Element {
  const history = useHistory();

  const { dispatch } = React.useContext(AuthContext);

  const submit: React.FormEventHandler<RegistrationFormElement> = (event) => {
    event.preventDefault();

    // validate password == repeat_password
    // ...

    // set isAuthenticated = true
    // set userType = ...'''''''''

    dispatch({
      type: 'LOGIN',
      payload: {
        userName: event.currentTarget.elements.name.value,
        userType: event.currentTarget.elements.userType.value as UserType,
      },
    });

    // navigate to main home
    history.push('/home');

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
          className={styles.radioButton}
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
          className={styles.radioButton}
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
