import { useState, useDeferredValue, useId } from "react";

export default function ValidacionEmail() {
  const emailId = useId();
  const passId = useId();

  const [email, setEmail] = useState("");
  const emailDiferido = useDeferredValue(email);

  const esValido =
    emailDiferido.includes("@") && emailDiferido.includes(".");

  return (
    <form>
      <label htmlFor={emailId}>Email:</label>
      <input
        id={emailId}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor={passId}>Contraseña:</label>
      <input id={passId} type="password" />

      <p style={{ color: esValido ? "lightgreen" : "salmon" }}>
        {emailDiferido === ""
          ? "Esperando..."
          : esValido
          ? "Email valido"
          : "Email invalido"}
      </p>
    </form>
  );
}

