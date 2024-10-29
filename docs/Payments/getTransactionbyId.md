---
sidebar_label: "Get Transactions By Id"
title: "Get Transactions By Id Endpoint"
description: "Get Transactions By Id API endpoint description"
---

# Get Transactions By Id

**Endpoint:**

```
GET {{Url}}/api/v1/payments/transactions/:transactionId
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response Body**:

```json
{
  "id": "c33812e1-33da-4207-8e81-e8b85fa399de",
  "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
  "transactionKind": "mpesa",
  "transactionType": "deposit",
  "coinId": "KES",
  "coinName": "Kenya Shillings",
  "transactionId": "d2c42e0c-14fc-4562-8da9-e2a7fffa58d1",
  "transactionReference": "ws_CO_29102024122806481791798403",
  "transactionStatus": "complete",
  "payCoinAmount": 1,
  "transactionChargeType": "commission",
  "transactionChargeAmount": 0.1,
  "sourceAddress": null,
  "destinationAddress": null,
  "minimumDecimalPoint": null,
  "maximumDecimalPoint": null,
  "notes": null,
  "trackUrl": null,
  "withdrawalRequestId": null,
  "createdAt": "2024-10-29T09:27:35.016Z",
  "updatedAt": "2024-10-29T09:28:15.972Z",
  "deletedAt": null,
  "sender": {},
  "receiver": {
    "fullName": "Irene Njuguna",
    "email": "irene@gochapaa.com",
    "phoneNumber": "+254791798403"
  }
}
```

**Status Codes**:

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "400": "Bad Request",
  "404": "Not Found",
  "500": "Internal Server Error"
}
```
