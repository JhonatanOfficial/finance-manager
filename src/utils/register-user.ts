import { FormEvent } from "react";

const signInCredentials = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement
    const password = form.elements.namedItem("password") as HTMLInputElement

    if (!email.value || !password.value) {
      setError("Por favor, preencha todos os campos")
      return null;
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email: email.value, password: password.value }),
    });

    if (response.ok) {
      console.log("Usuário registrado com sucesso")
    } else {
      const error = await response.json();
      setError(error.message)
    }
  }