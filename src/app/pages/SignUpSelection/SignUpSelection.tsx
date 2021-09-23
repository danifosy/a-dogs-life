import React from 'react';
import Typography from '../../components/Typography/Typography';
import Checkbox from '../../components/Checkbox/Checkbox';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

export default function SignUpSelection(): JSX.Element {
  return (
    <main>
      <h2>
        <Typography size="l">Anmeldung</Typography>
      </h2>
      <p>
        <Typography size="m">Ich melde mich an als</Typography>
      </p>
      <Checkbox>Tierschützer*in</Checkbox>
      <Checkbox>Interessent</Checkbox>
      <SubmitButton icon="arrowRight">Weiter</SubmitButton>
      <Link to="/">
        <p>
          <Typography size="s">
            hast du bereits einen Account? Hier geht's zum Login
          </Typography>
        </p>
      </Link>
    </main>
  );
}
