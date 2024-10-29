---
sidebar_label: "Confirm Payment"
title: "Confirm Payment Endpoint"
description: "Confirm Payment API endpoint description"
---

# Confirm Payment

**Endpoint:**

```
POST {{Url}}/api/v1/payments/confirm
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "checkoutRequestId": "ws_CO_29102024122806481791798403"
}
```

**Response**:

```json
{
  "ResponseCode": "0",
  "ResponseDescription": "The service request has been accepted successsfully",
  "MerchantRequestID": "94fc-460e-a970-797968bf6a85971117",
  "CheckoutRequestID": "ws_CO_29102024122806481791798403",
  "ResultCode": "0",
  "ResultDesc": "The service request is processed successfully."
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
