## Task

- Create a banking app

it must:
- create an account
- allow account deposits
- allow account withdrawals
- allow account to show transaction history
- allow account to set pin

it must:
- allow accounts to transfer to one another  

## html

``` html
<html>
<body>
  <div>
    <label>Account Info</label>
    <br>
    <label>Name</label>
    <input 
    id="accountInput"                          
    oninput="handleInput()" 
    placeholder="Account number..." />
  </div>

  <hr />
  <div>
    <label>Transactions</label>
    <br />
    <label>Amount:</label>
    <input 
    id="amount" 
          
    />

    <br />
    <label>Transfer From:</label>
    <select onchange="transferFrom()">
      <option disabled selected value> -- select an option -- </option>
      <option value="savings">Savings</option>
      <option value="checking">Checking</option>    
    </select>

    <br />
    <label>Transfer To:</label>
    <select onchange="transferTo()">
      <option disabled selected value> -- select an option -- </option>
      <option value="savings">Savings</option>
      <option value="checking">Checking</option>    
    </select>
  </div>

  <div>
    <hr />
    <label>Transaction History</label>
    <br />
      <label>Name:</label>
    
    <br />
      <label>Account Type:</label>
    
    <br />
      <label>Transfer To:</label> 
    <br />
    
    <div>
      <button 
        value="deposit"
        onclick="deposit()">
        Deposit
      </button>
      <button 
        value="withdraw" 
        onclick="withdraw()">
        Withdraw
      </button>
      <button 
        value="transfer"
        onclick="transfer()">
        Transfer
      </button>
      <button 
        value="view"
        onclick="viewAll()">
        View Transactions
      </button>
    </div>
    
    <hr />
    <label>List of Transactions</label>
  </div>
</body>
</html>
```

## js

``` js

function Account (name) {
  this.name = name;
  this.transactions = [];
  this.amount = 0;
}

Account.prototype.transfer = function () {
  
}

Account.prototype.deposit = function(amount) {
  this.balance = this.balance + amount;
}

Account.prototype.withdraw = function(amount) {
  
}

function Bank () {
  this.accounts = [];
}

Bank.prototype.AddAccount = function(account) {
  var newAccount = new Account(account);
  this.accounts.push(newAccount);
}

var bank = new Bank();
bank.addAccount({ name: 'checking' });
bank.addAccount({ name: 'savings' });

/**
 * Dom Events
 */


function handleInput() {
  var value = accountInput.value;
  // we need to save name somewhere
}
```