<!DOCTYPE html>
<html>
<head>
    <title>Transactions</title>
</head>
<body>
    <h1>Transaction History</h1>
    <ul>
        @foreach($transactions as $transaction)
            <li>{{ $transaction->type }}: ${{ $transaction->amount }} ({{ $transaction->created_at }})</li>
        @endforeach
    </ul>
    <a href="{{ route('payments.balance') }}">Back to Balance</a>
</body>
</html>
