---
sidebar_label: Get All Owner Wallets
title: Get All Owner Wallets Endpoint
description: Get All Owner Wallets API endpoint description"
---

## Get All Owner Wallets

**Endpoint:**

```
GET {{Url}}/api/v1/owner-wallets/all
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
[
  {
    "id": "94fb057d-29f3-4588-a043-6fc92c6eef3b",
    "coinId": "BTC",
    "address": "tb1qaedzpvln47x5z52z9d6utc75ulmuzxe9aq8zh7",
    "passphrase": "chapaaMainnet!32",
    "privateKey": "Sc2ZEOv2yLm6Am7P1TISpvHSIwwUiuFWVQjPOqgW0M6AjZkxsXJ9mmoDhhibOc3JuVyWuCtxuTwNw2uidR1vvxcDRr9TsI/U1P95NHIJB3CRG+CXjjuKEzjl1QeFD2aaUBjIlRF1wB2V39SBvZwPKzgMxQF7OU/eeAB/kHxcuWU8XnpkhCmhOGSgMEkP0p5snWTlyRNgZefDbWFo1vHPyGz42oezWlfMNAQ63QEYSQeW4bUKi8Lu1cdDF5a3rCW8JtQyh3iV3d6bRFQfVjtL6ddz34X0MfoTvkAWm7VXj6H1cZ/qJ9KOCcJGmdp63g16ArNrkgJWa/CDv1DTrC2aNiO40+O7nXyjRnUhPF/KjXhgG7tgwHjVmHZw7SyeGZajf+6ySpsgSLGvZGwI7mVPa4oDNdAM4hpElG9hAXrB872BkN2XnRHGRfwU0G8b4vaZsaTkeqR8POOsNBEFmN4boHw7vXrDGdiCKHTZyBMuFf4f/1f4HkvzAt8DbYmftYu0",
    "balance": 0,
    "liquid": 0,
    "walletIdx": "1250",
    "isActive": true,
    "createdAt": "2024-05-03T12:53:18.398Z",
    "updatedAt": "2024-10-29T09:00:03.262Z",
    "deletedAt": null
  },
  {
    "id": "76e0dcec-7eb9-4ee5-a0e3-90ad83f91d20",
    "coinId": "ETH",
    "address": "0xf5D8bdB7C15a38e17F4A7f06B601d3458C295162",
    "passphrase": "chapaaMainnet!32",
    "privateKey": "Df6IgKJskOksWsrqyiq3M1l9cZ3MmkYZbrE4bLacClVtzU/3DEM1Rn5XYbumGzORlTlQ1+TX0 w3y2RX+mR/G++nnNr/dLOIMXZOWwf1messI+jW7xP3B8UOA7vZU67w50d+j1cqRYmhpRu7BSd CxiWmcCyO5+ExEET+XOtfdJ2gW8NXYS9Y3lXoGFV04ML0PttjJwysuc0zCHzgiEu6YWWoF2U7 SvuGCPbhgxBTSrfR2mBocLBhNASkTvFSFhGuSCd3MmvRG1PXFde3Q4Er1vU5Odfq6gTRLPSpi OT7JFRSTALaghpJk1w1N/rSUh7d9QINwJRng1u7PqY8tTbPWpefTgqiaj6H2ORfnN7NQ2vNza 86e+HLFxKxrZS0j5EswYXb7F2eZSE5oLd42WUCRcrdpBI/fpPRA7ZwKY0D31ieXCIm3TsZa5e P0Z1/AO5SftQfpxTKAR6wJFdCxlcke75mKd0A1oSHf85o8Sbjrz++Qsi5+uzvYF/effxYUZZdT",
    "balance": 2.6829522468747733,
    "liquid": 2.070097246874773,
    "walletIdx": "1249",
    "isActive": true,
    "createdAt": "2024-05-03T12:53:18.617Z",
    "updatedAt": "2024-10-29T09:00:03.860Z",
    "deletedAt": null
  },
  {
    "id": "47221094-018e-406f-88da-f6f186353c51",
    "coinId": "USDT",
    "address": "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
    "passphrase": "chapaaMainnet!32",
    "privateKey": "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
    "balance": 3200,
    "liquid": 0,
    "walletIdx": "1249",
    "isActive": true,
    "createdAt": "2024-07-24T19:44:18.665Z",
    "updatedAt": "2024-07-24T19:44:18.665Z",
    "deletedAt": null
  },
  {
    "id": "56411217-9c05-4e48-be8f-4529f6bd2d82",
    "coinId": "KES",
    "address": null,
    "passphrase": null,
    "privateKey": null,
    "balance": 0,
    "liquid": 0,
    "walletIdx": null,
    "isActive": true,
    "createdAt": "2024-05-27T15:39:05.095Z",
    "updatedAt": "2024-05-27T15:39:05.095Z",
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
