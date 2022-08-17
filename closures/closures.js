//1) UserCard

class HistoryLog {
    constructor(operationType, credits, operationTime) {
        this.operationType = operationType;
        this.credits = credits;
        this.operationTime = operationTime;
    }
}

const getFullDate = () => {
    return `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

let UserCard = function (key) {
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.key = key;
    this.keys = [];

    if (key <= 0 || key > 3) {
        throw new Error('key diapason is wrong');
    } else {
        if (this.keys.find(key => key === this.key)) {
            throw new Error('key is not unique');
        } else
            this.keys.push(key);
    }


    this.getCardOptions = function () {
        return {
            balance: this.balance,
            transactionLimit: this.transactionLimit,
            historyLogs: this.historyLogs,
            key: this.key
        }
    }

    this.putCredits = function (credits) {
        this.balance += credits;
        this.historyLogs.push(new HistoryLog('received credits', credits, getFullDate()))
    }

    this.takeCredits = function (credits) {
        if (this.balance >= credits && this.transactionLimit >= credits) {
            this.balance -= credits;
            this.historyLogs.push(new HistoryLog('withdrawal of credits', credits, getFullDate()))
        } else {
            console.error('your balance or limit is less then required')
        }
    }

    this.setTransactionLimit = function (limit) {
        this.transactionLimit = limit;
        this.historyLogs.push(new HistoryLog('Transaction limit change', limit, getFullDate()))
    }

    this.transferCredits = function (credits, card) {
        if (credits + credits / 100 * 0.5 > this.balance)
            console.error('your balance is less then required for transfer');
        else {
            this.balance -= (credits + credits / 100 * 0.5);
            card.putCredits(credits)
            this.historyLogs.push(new HistoryLog('transfer', (credits + credits / 100 * 0.5), getFullDate()))
        }

    }
}

//UserAccount

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length >= 3) {
            throw new Error('User already has three cards')
        }

        this.cards.push(new UserCard(this.cards.length + 1));
    }

    getCardByKey(key) {
        if (key < 1 || key > 3) {
            console.log('wrong card key')
        } else {
            return this.cards.find(card => card.key === key);
        }
    }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

console.log(card1.getCardOptions())
console.log(card2.getCardOptions())

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions())
console.log(card2.getCardOptions())