---
sidebar_label: "Stk Push"
title: "Stk Push Endpoint"
description: "Stk Push API endpoint description"
---

# Stk Push

**Endpoint:**

```
POST {{Url}}/api/v1/payments/stkpush
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "amount": 1,
  "phone": "254746764503"
}
```

**Response**:

```json
{
  "MerchantRequestID": "94fc-460e-a970-797968bf6a85971117",
  "CheckoutRequestID": "ws_CO_29102024122806481791798403",
  "ResponseCode": "0",
  "ResponseDescription": "Success. Request accepted for processing",
  "CustomerMessage ": "Success. Request accepted for processing"
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
