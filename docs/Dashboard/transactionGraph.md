---
sidebar_label: "Transaction Graph"
title: "Transaction Graph Endpoint"
description: "Transaction Graph API endpoint description"
---

# Transaction Graph

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/transaction-graph
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
  "lastSixMonths": {
    "KES": {
      "2024-04": "46",
      "2024-05": "1",
      "2024-06": "1",
      "2024-07": "40",
      "2024-08": "15",
      "2024-09": "1"
    },
    "BTC": {
      "2024-04": "28",
      "2024-05": "7",
      "2024-06": "48",
      "2024-07": "22",
      "2024-08": "10",
      "2024-09": "3"
    },
    "ETH": {
      "2024-04": "19",
      "2024-05": "22",
      "2024-06": "97",
      "2024-07": "40",
      "2024-08": "46",
      "2024-09": "2"
    },
    "USDT": {
      "2024-06": "12",
      "2024-07": "8",
      "2024-08": "66",
      "2024-09": "10"
    }
  },
  "lastYear": {
    "KES": {
      "2024-04": "46",
      "2024-05": "1",
      "2024-06": "1",
      "2024-07": "40",
      "2024-08": "15",
      "2024-09": "1"
    },
    "BTC": {
      "2024-04": "28",
      "2024-05": "7",
      "2024-06": "48",
      "2024-07": "22",
      "2024-08": "10",
      "2024-09": "3"
    },
    "ETH": {
      "2024-04": "19",
      "2024-05": "22",
      "2024-06": "97",
      "2024-07": "40",
      "2024-08": "46",
      "2024-09": "2"
    },
    "USDT": {
      "2024-06": "12",
      "2024-07": "8",
      "2024-08": "66",
      "2024-09": "10"
    }
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