function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getUser() {
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    };
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/600/users/${browserData.cbid}`, requestOptions);
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();
    return data;
}

export async function getUserOrder() {
    const browserData = getSession();

    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    });
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const browserData = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    });
    if (!res.ok) {
        const errorText = await res.text();
        throw { message: errorText || 'Failed to create order', status: res.status };
    }
    const data = await res.json();
    return data;
}