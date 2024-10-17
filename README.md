# Svelte Route Protection with Unkey

This project demonstrates how you can protect your Svelte API Routes with [Unkey](https://app.unkey.com/)

![image](https://github.com/user-attachments/assets/87b99876-b066-4c23-993e-c4787c356e9b)


## Prerequisites

[Unkey](https://app.unkey.com/) account


## Setup Unkey

1. Create an [unkey account](http://app.unkey.com/)
2. Create a new [API](https://app.unkey.com/apis). Copy the `API ID`
3. Create a new root key from the [settings/root-key](https://app.unkey.com/settings/root-keys/) with `create-key` permissions

## Setup Environment Variables 

**`cp env.example .env` and add the following variables:**

```bash
UNKEY_API_ID=""
UNKEY_ROOT_KEY=""
```

## Quickstart

**Install all the dependencies**

```bash
pnpm install
```

**Run the app. It should start at port `5173`**

```bash
pnpm dev
```

## Usage

**Create a key using the following api/createKey route**

```bash
curl http://localhost:5173/api/createKey
```

**Now access the protected route which verifies the key**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:5173/api/protected
```