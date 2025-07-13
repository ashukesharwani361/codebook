export async function login(authDetail) {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    });
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail) {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    });
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}