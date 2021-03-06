import moment from 'moment';

class Order {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    // add getter - (method)
    get readableDate() {
        return moment(this.date).format('MMMM Do YYYY, hh:mm');
    }

    get totalAmountFixedSize() {
        return this.totalAmount.toFixed(2);
    }
}

export default Order;
