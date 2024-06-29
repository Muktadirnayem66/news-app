const  formatDate =(dateString) =>{
    const date = new Date(dateString);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    };

    return date.toLocaleDateString('en-US', options);
}


export { formatDate}

