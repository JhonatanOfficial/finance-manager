
export const validateForm = (email: string, password: string, confirmPassword: string) => {

    if (!email || !password || !confirmPassword) {

        return "Por favor, preencha todos os campos"

    } else if (password != confirmPassword) {

        return "As senhas não são iguais"

    } else if (password.length < 6) {

        return "A senha deve conter no mínimo 6 digítos"

    }

    return null
}


export const createUser = async (name: string, email: string, password: string) => {

    const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    });

    return response;
}