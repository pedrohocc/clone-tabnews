function status(request, response) {
    response.status(200).json({ clientes: [{
        id: 1,
    }, {
        id: 2,
    }, {
        id: 3,
    }] });
}

export default status;