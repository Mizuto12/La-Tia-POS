## Quick Start Checklist for Integration

### Prerequisites
- [ ] MySQL server running
- [ ] PHP 8.1+ installed
- [ ] Composer installed
- [ ] Node.js 18+ installed
- [ ] npm or yarn installed

### Backend Setup
- [ ] Navigate to: `C:\Users\User\Desktop\LatiaBackend`
- [ ] Run: `composer install`
- [ ] Verify `.env` settings (already configured)
- [ ] Run: `php artisan migrate:fresh --seed`
- [ ] Run: `php artisan serve --host=127.0.0.1 --port=8000`
- [ ] Backend running on http://localhost:8000 ✓

### Frontend Setup
- [ ] Navigate to: `C:\Users\User\Desktop\adminLaTiaPOS`
- [ ] Run: `npm install` (installs axios and dependencies)
- [ ] Verify `.env` file has: `VITE_API_URL=http://localhost:8000/api/v1`
- [ ] Run: `npm run dev`
- [ ] Frontend running on http://localhost:5173 ✓

### Verify Integration
- [ ] Open http://localhost:5173 in browser
- [ ] Login page loads successfully
- [ ] Try login with test credentials
- [ ] AdminPanel loads after login
- [ ] Categories display
- [ ] Can create new category (appears in list)
- [ ] Can create new product
- [ ] Can manage inventory

### Database Verification
```bash
# In MySQL client
USE latia_pos;
SELECT COUNT(*) FROM categories;
SELECT COUNT(*) FROM products;
SELECT COUNT(*) FROM users;
```

### Network Debugging
- [ ] Open DevTools (F12)
- [ ] Go to Network tab
- [ ] Perform action (e.g., create category)
- [ ] Look for POST request to `/api/v1/categories`
- [ ] Check response is JSON with `success: true`

### Troubleshooting Commands
```bash
# Check if ports are in use
netstat -ano | findstr :8000
netstat -ano | findstr :5173

# Test backend connectivity
curl http://localhost:8000/api/v1/categories

# Check npm packages installed
npm list

# Clear npm cache if issues
npm cache clean --force
```

### Feature Checklist - What's Connected
- [ ] Authentication (Login/Logout) - Connected to `/api/v1/auth/login`
- [ ] Category CRUD - Connected to `/api/v1/categories`
- [ ] Product CRUD - Connected to `/api/v1/products`
- [ ] Inventory CRUD - Connected to `/api/v1/inventory`
- [ ] Token Management - Automatically handled
- [ ] Error Handling - Shows user-friendly messages

## Critical Files Modified/Created

**New Files:**
- `src/services/apiConfig.ts` - API client configuration
- `src/services/authService.ts` - Authentication service
- `src/services/categoryService.ts` - Category operations
- `src/services/productService.ts` - Product operations
- `src/services/inventoryService.ts` - Inventory operations
- `src/services/saleService.ts` - Sales operations
- `src/services/dashboardService.ts` - Dashboard operations
- `src/services/index.ts` - Service exports
- `.env` - Environment configuration

**Modified Files:**
- `package.json` - Added axios dependency
- `src/pages/LoginPage.tsx` - Real authentication
- `src/pages/AdminPage.tsx` - Real CRUD operations
- `INTEGRATION_GUIDE.md` - Updated documentation

## API Endpoints Now Connected

| Endpoint | Method | Frontend | Status |
|----------|--------|----------|--------|
| `/auth/login` | POST | LoginPage | ✅ Connected |
| `/auth/logout` | POST | AdminPage | ✅ Connected |
| `/categories` | GET | AdminPage | ✅ Connected |
| `/categories` | POST | AdminPage | ✅ Connected |
| `/categories/{id}` | PUT | AdminPage | ✅ Connected |
| `/categories/{id}` | DELETE | AdminPage | ✅ Connected |
| `/products` | GET | AdminPage | ✅ Connected |
| `/products` | POST | AdminPage | ✅ Connected |
| `/products/{id}` | PUT | AdminPage | ✅ Connected |
| `/products/{id}` | DELETE | AdminPage | ✅ Connected |
| `/inventory` | GET | AdminPage | ✅ Connected |
| `/inventory` | POST | AdminPage | ✅ Connected |
| `/inventory/{id}` | PUT | AdminPage | ✅ Connected |
| `/inventory/{id}` | DELETE | AdminPage | ✅ Connected |

## Support & References

- See `INTEGRATION_GUIDE.md` for full documentation
- Check browser Console (F12) for error messages
- Check Laravel terminal for API errors
- Check Network tab in DevTools for request/response details
