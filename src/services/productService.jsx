export async function getProductList(searchTerm, initialProductList) {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/444/products`);
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();
    // Case-insensitive filtering on frontend
    if (searchTerm) {
        initialProductList(
            data.filter(product =>
                product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    } else {
        initialProductList(data);
    }
}

export async function getProduct(id) {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/444/products/${id}`);
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();
    return data;
}

export async function getFeaturedList() {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/444/featured_products`);
    if(!res.ok) {
        throw { message: res.statusText, status: res.status }
    }
    const data = await res.json();
    return data;
}