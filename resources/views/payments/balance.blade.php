<!DOCTYPE html>
<html>
<head>
    <title>Balance</title>
</head>
<body>
    <h1>Your Balance</h1>
    <p>Current balance: ${{ $balance }}</p>

    <h2>Deposit Money</h2>
    <form action="{{ route('payments.deposit') }}" method="POST">
        @csrf
        <input type="number" name="amount" min="1" placeholder="Amount" required>
        <button type="submit">Deposit</button>
    </form>

    <h2>Spend Money</h2>
    <form action="{{ route('payments.spend') }}" method="POST">
        @csrf
        <input type="number" name="amount" min="1" placeholder="Amount" required>
        <button type="submit">Spend</button>
    </form>

    <h2><a href="{{ route('payments.transactions') }}">View Transactions</a></h2>
</body>
</html>
