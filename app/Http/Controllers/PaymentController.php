<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use HPWebdeveloper\LaravelPayPocket\Facades\LaravelPayPocket;
use App\Models\WalletLog;

class PaymentController extends Controller
{
    //
    public function viewBalance()
    {
        $user = auth()->user();
        $balance = $user->walletBalance;
        
        return response()->json(['balance' => $balance]);

    }

    public function deposit(Request $request)
    {
        $user = auth()->user();
        $amount = $request->input('amount');

        if ($amount <= 0) {
            return back()->withErrors(['amount' => 'Invalid deposit amount']);
        }
        $user->deposit('wallet_1', $amount);
        

        return redirect()->route('payments.balance')->with('success', 'Deposit successful');
    }

    public function spend(Request $request)
    {
        $user = auth()->user();
        $amount = $request->input('amount');

        if ($amount <= 0) {
            return back()->withErrors(['amount' => 'Invalid spend amount']);
        }

        if ($user->walletBalance < $amount) {
            return back()->withErrors(['amount' => 'Insufficient balance']);
        }

        $user->pay($amount);

        return redirect()->route('payments.balance')->with('success', 'Spend successful');
    }

    public function transactions(Request $request)
    {
        try {
            // Fetch transactions for the authenticated user
            $userId = auth()->id();

            $transactions = WalletLog::where('loggable_id', $userId)
                ->orderBy('created_at', 'desc')
                ->get();

            return response()->json(['transactions' => $transactions]);

        } catch (\Exception $e) {
            // Log the error and return a proper response
            \Log::error('Error fetching transactions: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch transactions'], 500);
        }
    }
}
