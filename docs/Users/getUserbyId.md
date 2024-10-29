---
sidebar_label: "Get User by Id"
title: "Get User by Id Endpoint"
description: "Get User by Id API endpoint description"
---

# Get All User KYC Documents

**Endpoint:**

```
GET {{Url}}api/v1/users/:id
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
{
  "id": "63dc24fa-f556-4564-b449-b392db187f92",
  "firstName": "John",
  "middleName": "",
  "lastName": "Doe",
  "email": "johndoe@gmail.com",
  "phone": "+254746700003",
  "dateOfBirth": null,
  "isPhoneVerified": true,
  "isEmailVerified": true,
  "verificationStatus": "pending",
  "twoFactorEnabled": false,
  "twoFactorCommunication": null,
  "lockOutEnabled": false,
  "lockOutEnd": null,
  "nationalityCode": null,
  "nationalityName": "Kenyan",
  "nationalityDialCode": null,
  "subscribedToNewsletters": true,
  "isModified": false,
  "isDeleted": false,
  "createdAt": "2024-05-17T08:00:20.035Z",
  "updatedAt": "2024-10-14T10:54:19.541Z",
  "deletedAt": null,
  "profilePictures": [
    {
      "id": "7a4eeb61-eeb7-4d95-83ae-181276a9620e",
      "userId": "63dc24fa-f556-4564-b449-b392db187f92",
      "fileName": null,
      "filePath": "/public/images/profile/images-1728903045810.png",
      "originalName": "Screenshot from 2024-03-07 10-39-53.png",
      "fileSize": 323026,
      "createdAt": "2024-10-14T10:44:14.694Z",
      "updatedAt": "2024-10-14T10:50:45.832Z",
      "deletedAt": null
    }
  ],
  "kycDocuments": [],
  "userWallets": [
    {
      "id": "d9ed694f-b1eb-4e50-ab3d-b9f0b547d267",
      "coinId": "KES",
      "address": "mpesa",
      "balance": 189.899,
      "octetBalance": 200,
      "amountWithdrawnToday": 0,
      "userId": "63dc24fa-f556-4564-b449-b392db187f92",
      "createdAt": "2024-05-17T08:00:21.604Z",
      "updatedAt": "2024-05-28T07:13:26.814Z",
      "deletedAt": null
    },
    {
      "id": "d584cb99-3f58-40b9-89f9-d955dfb1194e",
      "coinId": "BTC",
      "address": "tb1qhkpv7n0wxzvykxaxwjljfpauj78eulszs60k0s",
      "balance": 0.00019999999999999998,
      "octetBalance": 0,
      "amountWithdrawnToday": 0,
      "userId": "63dc24fa-f556-4564-b449-b392db187f92",
      "createdAt": "2024-05-17T08:00:21.600Z",
      "updatedAt": "2024-08-28T15:39:25.850Z",
      "deletedAt": null
    },
    {
      "id": "6b8d6540-264d-44ce-a678-e091ed91ef56",
      "coinId": "ETH",
      "address": "0xA4d5Cd721Ca864B42777053470c14004Bb6243aD",
      "balance": 0.040000008174309994,
      "octetBalance": 0,
      "amountWithdrawnToday": 0.0005100000000000001,
      "userId": "63dc24fa-f556-4564-b449-b392db187f92",
      "createdAt": "2024-05-17T08:00:21.595Z",
      "updatedAt": "2024-09-19T05:31:27.573Z",
      "deletedAt": null
    },
    {
      "id": "a3bfeb71-b1eb-4021-af77-c96fd51b930b",
      "coinId": "USDT",
      "address": "0xA4d5Cd721Ca864B42777053470c14004Bb6243aD",
      "balance": 400,
      "octetBalance": 0,
      "amountWithdrawnToday": 200,
      "userId": "63dc24fa-f556-4564-b449-b392db187f92",
      "createdAt": "2024-07-24T18:52:02.731Z",
      "updatedAt": "2024-07-29T07:17:38.044Z",
      "deletedAt": null
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
