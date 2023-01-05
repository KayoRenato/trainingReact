export function createTicket(numbers = 6, ticket = []) {
    numbers = +numbers
    if (numbers < 6 || numbers > 60) {
        throw 'Invalid quantity of numbers.';
    }


    if (ticket.length === numbers) {
        return ticket.sort((a, b) => a - b);
    }

    const auxNumber = parseInt(Math.random() * 60) + 1

    return !ticket.includes(auxNumber) ?
        createTicket(numbers, [...ticket, auxNumber]) :
        createTicket(numbers, ticket)

}