<?php
// app/Models/WalletLog.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WalletLog extends Model
{
    protected $table = 'wallets_logs'; // Ensure the correct table name

    protected $fillable = [
        'loggable_type', 'loggable_id', 'wallet_name', 'value', 'from', 'to', 'type', 'status', 'ip'
    ];

    // You might also want to add relationships or additional configurations
}