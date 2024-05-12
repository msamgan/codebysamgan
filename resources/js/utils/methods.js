const formatDate = (date) => {
    let newData = new Date(date);
    let year = newData.getFullYear();
    let monthName = newData.toLocaleString("default", { month: "long" });
    let day = newData.getDate();

    return `${day} ${monthName}, ${year}`;
};

export { formatDate };
