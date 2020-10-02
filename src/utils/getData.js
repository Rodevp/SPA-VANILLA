async function get_data(url) {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    } catch (error) {
        console.log('error! D:!!! ', error.message);
    }
}

export default get_data;