---
sidebar_label: Get All Coins list
title: Get All Coins list Endpoint
description: Get All Coins list API endpoint description"
---

## Get All Coins list

**Endpoint:**

```
GET {{Url}}/api/v1/coinList/all
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response**:

```json
{
  "success": true,
  "page_meta": {
    "current_items_count": 4,
    "total_items_count": 76,
    "offset": 750,
    "requested_page_size": 10,
    "current_page_number": 76,
    "prev_page_number": 75,
    "number_of_pages": 8,
    "has_next_page": false,
    "next_page_number": 1,
    "next_page_url": "/api/v1/coinList?page=1&page_size=10",
    "prev_page_url": "/api/v1/coinList?page=75&page_size=10"
  },
  "coins": [
    {
      "id": "81c78c74-3f13-468e-9699-a84981700163",
      "coin_id": "BTC",
      "coin_name": "Bitcoin",
      "coin_label": "Bitcoin",
      "price": 68753.79,
      "description": "Bitcoin Description",
      "icon_style": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      "standard_price": "0",
      "minimum_decimal_point": 2,
      "maximum_decimal_point": 2,
      "withdrawal_commission": 1,
      "oneOffWithdrawalLimit": 10000,
      "dailyWithdrawalLimit": 10000,
      "transactionFee": 0.1,
      "admin_approval_amount": 10000,
      "minimum_withdrawal_amount": 1,
      "minimum_transfer_amount": 0.00002,
      "transfer_fee": 0,
      "is_active": true
    },
    {
      "id": "29f58054-0d67-4c9c-9abd-ec3135ce8c19",
      "coin_id": "ETH",
      "coin_name": "Ethereum",
      "coin_label": "Ethereum",
      "price": 2527.12,
      "description": "Ethereum Description",
      "icon_style": "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png",
      "standard_price": "0",
      "minimum_decimal_point": 3,
      "maximum_decimal_point": 7,
      "withdrawal_commission": 0.0001,
      "oneOffWithdrawalLimit": 10000,
      "dailyWithdrawalLimit": 10000,
      "transactionFee": 0.1,
      "admin_approval_amount": 124124,
      "minimum_withdrawal_amount": 0.0005,
      "minimum_transfer_amount": 0.0005,
      "transfer_fee": 0,
      "is_active": true
    }
  ]
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
