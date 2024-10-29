---
sidebar_label: Get Coin by Id
title: Get Coin by Id Endpoint
description: Get Coin by Id API endpoint description"
---

## Get Coin by Id

**Endpoint:**

```
GET {{Url}}/api/v1/coinList/coin/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables:**

```
id
```

**Request Body**:

```json
none
```

**Response**:

```json
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
