---
sidebar_label: "Create Coin"
title: "Create Coin Endpoint"
description: "Create Coin API endpoint description"
---

# Create Coin

**Endpoint:**

```
POST {{Url}}api/v1/coinList/create
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "coinId": "",
  "coinName": "",
  "coinLabel": "",
  "price": 0,
  "description": "",
  "iconStyle": "",
  "standardPrice": "",
  "minimumDecimalPoint": "",
  "maximumDecimalPoint": "",
  "withdrawalCommission": "",
  "oneOffWithdrawalLimit": "",
  "dailyWithdrawalLimit": "",
  "adminApprovalAmount": 0,
  "minimumWithdrawalAmount": 0
}
```

**Response Body**:

```json
{}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
