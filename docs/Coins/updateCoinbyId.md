---
sidebar_label: "Update coin by id"
title: "Update coin by id Endpoint"
description: "Update coin by id API endpoint description"
---

# Update coin by id

**Endpoint:**

```
PUT {{Url}}/api/v1/coinList/update/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "coin_id": "ETH",
  "coin_name": "Ethereum",
  "coin_label": "Ethereum",
  "price": 3025,
  "description": "Ethereum Description",
  "icon_style": "ethereum",
  "standard_price": "0",
  "minimum_decimal_point": 3,
  "maximum_decimal_point": 7,
  "withdrawal_commission": 0.0023,
  "oneOffWithdrawalLimit": 0.55,
  "dailyWithdrawalLimit": 0.00255,
  "transactionFee": 0.00255,
  "is_active": true,
  "adminApprovalAmount": 0,
  "minimumWithdrawalAmount": 0
}
```

**Resposne Body**:

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
