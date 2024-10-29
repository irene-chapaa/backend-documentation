---
sidebar_label: "Verify OTP"
title: "Verify OTP Endpoint"
description: "Verify OTP API endpoint description"
---

# Verify OTP

**Endpoint:**

```
POST {{Url}}/api/v1/general/verify-otp
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

````json
{
    "otp": "797364"
}
```

**Response Body**:

```json
{
  "success": true
}
````

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
