print()
class BankAccount :
    # account_number=int()
    # balance=float(0.0)
    def __init__(self,account_number):
        self.account_number =account_number
        self.balance=0.0

    def deposit(self,amount):
        self.balance +=amount
        if self.deposit:
            print(f"Amount deposited successfully to - {self.account_number}",f"balance : {self.balance}")
        else:
            print("You have canceld Thank You!")

    def withdraw(self,amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"Amount withdraw successfully from -{self.account_number} ")
        else :
            print(f"Insaficient found in Account:  {self.account_number}")

    def get_balance(self):
        return self.balance

num = int(input("Enter account numbers: "))
account_numbers=1000
bankaccount = []


for i in range(num):
    accNum=account_numbers + (i+1)
    num1=BankAccount(accNum)
    bankaccount.append(num1)

    print(f" * Account created successfully:{accNum}")
    print()
    opt = input("Enter choice (1-deposit, 2-withdraw,3-check balance 9-cancel): ")
    
    if opt == "1":
            deposit_amount = float(input("Enter the amount to deposit: "))
            num1.deposit(deposit_amount)
    elif opt == "2":
            withdrawal_amount = int(input("Enter the amount to withdraw: "))
            num1.withdraw(withdrawal_amount)
    elif opt == "3":
            print(f"Your balance is : {num1.get_balance()}")
    elif opt == "9":
            print("Transaction canceled")
    else:
            print("Invalid choice")
            break

    print(f"Account number:{num1.account_number} ",f"Current balance:{num1.get_balance()}")
    print()

