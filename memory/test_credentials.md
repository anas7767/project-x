# FERI Wholesale — Test Credentials

All passwords are: `test123` (except admin)

| Role | Phone / Username | Password | Details |
|------|-------|------|---------|
| Retailer | `9876543210` | `test123` | Ramesh Sharma — Sharma Kirana Store, Nashik (verified, ₹2,40,000 credit) |
| Retailer | `9876543211` | `test123` | Abdul Karim — Karim General Stores, Malegaon (verified, ₹1,50,000 credit) |
| Retailer | `9876543212` | `test123` | Priya Patil — Patil Mart, Pune (pending KYC, ₹50,000 credit) |
| Retailer | `9876543213` | `test123` | Suresh Yadav — Yadav Provision Bhandar, Mumbai (verified, ₹1,80,000 credit) |
| Brand | `9800000001` | `test123` | Raj Foods — FMCG |
| Brand | `9800000002` | `test123` | Spice Garden — Spices |
| Brand | `9800000003` | `test123` | SnackTime — Snacks |
| Brand | `9800000004` | `test123` | LocalBest — Local Products |
| Admin | `admin` | `feri@2025` | Hardcoded admin shortcut (userId=0) |

## API Endpoints

Base: `${REACT_APP_BACKEND_URL}/api`

### Auth (public)
- `POST /api/auth/login` — body: `{ phone, password, role }`
- `POST /api/auth/register-retailer`
- `POST /api/auth/register-brand`
- `GET /api/auth/me` — Bearer token

### Products
- `GET /api/products?category=&search=&sort=&brand_id=`
- `GET /api/products/featured`
- `GET /api/products/{id}`
- `POST /api/products` — brand/admin only
- `GET /api/brand/products` — brand only

### Orders
- `POST /api/orders` — retailer only, body: `{ items: [{ product_id, quantity }], payment_type }`
- `GET /api/orders` — retailer (own) / brand (containing their products)
- `GET /api/orders/recent` — retailer only
- `PATCH /api/orders/{id}/status` — brand/admin only

### Retailer
- `GET /api/retailer/summary` — `{ total_orders, pending_deliveries, available_credit }`
- `GET /api/retailer/credit` — `{ credit_limit, used_amount, available_limit, entries[] }`

### Brand
- `GET /api/brand/summary`

### Admin
- `GET /api/admin/summary`
- `GET /api/admin/retailers`
- `PATCH /api/admin/retailers/{id}/kyc`
- `PATCH /api/admin/retailers/{id}/credit-limit`
- `GET /api/admin/orders`

## Sample seeded orders
On first startup, 5 sample orders are auto-seeded for retailer `9876543210` (Ramesh Sharma), spread across various statuses (delivered, dispatched, confirmed) and payment types (pay_now, net_15, net_30, net_60), so the dashboards have realistic data on first login.
