---
sidebar_label: "Get All Transactions"
title: "Get All Transactions Endpoint"
description: "Get All Transactions API endpoint description"
---

# Get All Transactions

**Endpoint:**

```
GET {{Url}}/api/v1/payments/transactions
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
    "current_items_count": 23,
    "total_items_count": 23,
    "offset": 0,
    "requested_page_size": 100,
    "current_page_number": 1,
    "prev_page_number": 1,
    "number_of_pages": 1,
    "has_next_page": false,
    "next_page_number": 1,
    "has_prev_page": false,
    "next_page_url": "/api/v1/payments?page=1&page_size=100",
    "prev_page_url": "/api/v1/payments?page=1&page_size=100"
  },
  "transactions": [
    {
      "id": "ad7aceac-aef7-41b7-af4e-60390d9a8e9b",
      "transaction_kind": "bitcoin",
      "transaction_type": "buy",
      "transaction_id": "39f35ffa-b692-4911-8599-210f52435714",
      "transaction_reference": "a0e8c25d-cc88-4ab1-a245-9f13d48ad071",
      "transaction_status": "complete",
      "pay_coin_amount": 0.000018366399382497163,
      "source_address": "tb1qaedzpvln47x5z52z9d6utc75ulmuzxe9aq8zh7",
      "destination_address": "tb1q3gfx2me4wkjhzhlaqs6nu3hmscvusd698kuwj3",
      "transaction_charge_type": "fee",
      "notes": null,
      "transaction_charge_amount": 0.000028125000000000003,
      "created_at": "2024-05-09T10:51:05.121Z",
      "updated_at": "2024-05-09T10:51:05.121Z"
    },
    {
      "id": "b41b1d92-5aec-49a5-b9f7-9625bc67c5fb",
      "transaction_kind": "mpesa",
      "transaction_type": "deposit",
      "transaction_id": "adb44d50-ba23-4b43-81bb-745e484ea345",
      "transaction_reference": "ws_CO_09052024134709294706678178",
      "transaction_status": "complete",
      "pay_coin_amount": 400,
      "source_address": null,
      "destination_address": null,
      "transaction_charge_type": "commission",
      "notes": null,
      "transaction_charge_amount": 40,
      "created_at": "2024-05-09T10:47:12.072Z",
      "updated_at": "2024-05-09T10:47:53.577Z"
    },
    {
      "id": "857c52f9-89f9-4297-b245-97097846fc06",
      "transaction_kind": "mpesa",
      "transaction_type": "deposit",
      "transaction_id": "9220e575-b061-4ed4-9a24-8e8d5079560b",
      "transaction_reference": "ws_CO_09052024132337739798293922",
      "transaction_status": "complete",
      "pay_coin_amount": 400,
      "source_address": null,
      "destination_address": null,
      "transaction_charge_type": "commission",
      "notes": null,
      "transaction_charge_amount": 40,
      "created_at": "2024-05-09T10:23:40.503Z",
      "updated_at": "2024-05-09T10:24:22.005Z"
    },

    {
      "id": "f9cec7de-73b9-4322-ac8e-bb0f84a891f7",
      "transaction_kind": "mpesa",
      "transaction_type": "withdrawal",
      "transaction_id": "c062ad68-85cb-4bcc-ad8b-40b0f7ce25e6",
      "transaction_reference": "AG_20240509_20500a5fd892a9abf4f1",
      "transaction_status": "complete",
      "pay_coin_amount": 400,
      "source_address": null,
      "destination_address": null,
      "transaction_charge_type": "fee",
      "notes": null,
      "transaction_charge_amount": 40,
      "created_at": "2024-05-09T09:41:22.230Z",
      "updated_at": "2024-05-09T09:41:22.428Z"
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
