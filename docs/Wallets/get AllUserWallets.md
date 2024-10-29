---
sidebar_label: "Get All User Wallets"
title: "Get All User Wallets Endpoint"
description: "Get All User Wallets API endpoint description"
---

# Get All User Wallets

**Endpoint:**

```
GET {{Url}}/api/v1/wallets/user-wallets/:userId
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response:**

```json
[
  {
    "id": "bf9d7d1f-ea18-4eaa-88a3-847804394701",
    "coinId": "ETH",
    "address": "0xc79242B5fc577fBB21874Cf33b020DA149923D11",
    "balance": 0.021136963095058258,
    "octetBalance": 0,
    "amountWithdrawnToday": 0.021473002,
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-05-09T08:06:08.473Z",
    "updatedAt": "2024-09-18T11:47:01.505Z",
    "deletedAt": null
  },
  {
    "id": "75f3f0b7-4eda-42e1-89c9-3d662f427b5f",
    "coinId": "KES",
    "address": "mpesa",
    "balance": 3567.3043635956788,
    "octetBalance": 0,
    "amountWithdrawnToday": 0,
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-05-09T08:06:08.574Z",
    "updatedAt": "2024-10-29T09:28:16.031Z",
    "deletedAt": null
  },
  {
    "id": "efbac695-3d51-44cd-80c5-219295f653c7",
    "coinId": "BTC",
    "address": "tb1q0cnruttt6sajhqkzd5f2pld4cpkmqjzu7p8kuj",
    "balance": 0.0001709930751986991,
    "octetBalance": 0,
    "amountWithdrawnToday": 0,
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-05-09T08:06:08.514Z",
    "updatedAt": "2024-09-17T10:18:06.745Z",
    "deletedAt": null
  },
  {
    "id": "b09689a0-13de-434c-9aba-3f4f66016e31",
    "coinId": "USDT",
    "address": "0xc79242B5fc577fBB21874Cf33b020DA149923D11",
    "balance": 80.1182656,
    "octetBalance": 0,
    "amountWithdrawnToday": 5,
    "userId": "bf0d1221-f07f-447b-914f-04a895743d5d",
    "createdAt": "2024-07-24T18:52:04.338Z",
    "updatedAt": "2024-10-28T11:52:35.962Z",
    "deletedAt": null
  }
]
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
