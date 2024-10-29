---
sidebar_label: "Get Current User Transactions"
title: "Get Current User Transactions Endpoint"
description: "Get Current User Transactions API endpoint description"
---

# Get Current User Transactions

**Endpoint:**

```
GET {{Url}}/api/v1/payments/transactions/users/current
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
  "success": true,
  "page_meta": {
    "current_items_count": 100,
    "total_items_count": 628,
    "offset": 0,
    "requested_page_size": 100,
    "current_page_number": 1,
    "prev_page_number": 1,
    "number_of_pages": 7,
    "has_next_page": true,
    "next_page_number": 2,
    "has_prev_page": false,
    "next_page_url": "/api/v1/payments?page=2&page_size=100",
    "prev_page_url": "/api/v1/payments?page=1&page_size=100"
  },
  "transactions": [
    {
      "id": "c33812e1-33da-4207-8e81-e8b85fa399de",
      "transaction_kind": "mpesa",
      "transaction_type": "deposit",
      "transaction_id": "d2c42e0c-14fc-4562-8da9-e2a7fffa58d1",
      "transaction_reference": "ws_CO_29102024122806481791798403",
      "transaction_status": "complete",
      "pay_coin_amount": 1,
      "source_address": null,
      "destination_address": null,
      "transaction_charge_type": "commission",
      "notes": null,
      "track_url": null,
      "transaction_charge_amount": 0.1,
      "created_at": "2024-10-29T09:27:35.016Z",
      "updated_at": "2024-10-29T09:28:15.972Z"
    },
    {
      "id": "456ff7ea-c764-4808-b62e-caba8522bbfe",
      "transaction_kind": "ethereum",
      "transaction_type": "withdrawal",
      "transaction_id": "c7ab9f10-afc0-4d50-9f01-d1b7e9b020de",
      "transaction_reference": "c7ab9f10-afc0-4d50-9f01-d1b7e9b020de",
      "transaction_status": "complete",
      "pay_coin_amount": 0.0005,
      "source_address": "0xf5D8bdB7C15a38e17F4A7f06B601d3458C295162",
      "destination_address": "0x5F2077F21ad95B2f75cbD21865023Aca72f4755E",
      "transaction_charge_type": "commission",
      "notes": null,
      "track_url": "https://sepolia.etherscan.io/tx/0x05c123b12f24d386677e966fa8e439ade280393fbd3378e019827653b79b9cd5",
      "transaction_charge_amount": 5e-10,
      "created_at": "2024-09-18T11:47:01.579Z",
      "updated_at": "2024-09-18T11:47:13.652Z"
    }
  ]
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
