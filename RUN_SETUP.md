# RUN_SETUP.md - Complete Setup Instructions

## ⚡ Quick Setup (Copy & Paste Commands)

### Terminal 1: Setup Backend

```powershell
# Navigate to backend directory
cd "C:\Users\User\Desktop\LatiaBackend"

# Install PHP dependencies
composer install

# Setup database (run fresh migrations with seeds)
php artisan migrate:fresh --seed

# Start Laravel server
php artisan serve --host=127.0.0.1 --port=8000
```

**Expected Output:**
```
Laravel development server started: http://127.0.0.1:8000
```

---

### Terminal 2: Setup Frontend

```powershell
# Navigate to frontend directory
cd "c:\Users\User\Desktop\adminLaTiaPOS"

# Install npm dependencies (includes axios)
npm install

# Start development server
npm run dev
```

**Expected Output:**
```
VITE v... ready in ... ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

---

## 🌐 Access Application

1. Open browser
2. Go to `http://localhost:5173`
3. Login page appears
4. Enter test credentials (from database)
5. Admin panel loads with data from backend

---

## 🛠️ Prerequisites Check

### Check if MySQL is Running
```powershell
mysql -u root -pNookie123
# Type: exit
# If successful, MySQL is running
```

### Check if Node is Installed
```powershell
node --version
npm --version
```

### Check if PHP is Installed
```powershell
php --version
```

---

## 📋 Database Setup (First Time Only)

### Create Database and User (if not exists)
```sql
CREATE DATABASE latia_pos;
CREATE USER 'root'@'localhost' IDENTIFIED BY 'Nookie123';
GRANT ALL PRIVILEGES ON latia_pos.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
```

### Run Migrations
```powershell
cd "C:\Users\User\Desktop\LatiaBackend"
php artisan migrate:fresh --seed
```

---

## ✅ Verification Steps

### 1. Verify Backend is Running
```powershell
# In new terminal/PowerShell
curl http://localhost:8000
# Should return HTML (Laravel welcome page or redirect)
```

### 2. Verify Frontend is Running
- Open `http://localhost:5173` in browser
- Should see login page

### 3. Check API Connectivity
```powershell
# Try to get categories (should fail without auth token)
curl http://localhost:8000/api/v1/categories
# Expected: 401 or list of categories (depending on auth)
```

### 4. Test Login
- Enter any username/password that exists in users table
- Should redirect to admin panel

---

## 🐛 If Something Goes Wrong

### Port Already in Use (8000 or 5173)

**Find what's using the port:**
```powershell
# Windows
netstat -ano | findstr :8000
# Kill the process
taskkill /PID <PID> /F
```

### Database Connection Error

**Check credentials in backend/.env:**
```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=latia_pos
DB_USERNAME=root
DB_PASSWORD=Nookie123
```

**Test connection:**
```powershell
mysql -h 127.0.0.1 -u root -pNookie123 latia_pos
```

### npm Dependencies Not Installing

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstall
npm install
```

### Laravel Routes Not Found (404)

```powershell
cd "C:\Users\User\Desktop\LatiaBackend"
php artisan route:clear
php artisan cache:clear
php artisan config:cache
php artisan serve --host=127.0.0.1 --port=8000
```

---

## 📊 Monitor Running Services

### Terminal 1 (Backend)
Shows request logs:
```
[2026-03-05 10:15:30] local.INFO: POST /api/v1/auth/login
[2026-03-05 10:15:31] local.INFO: GET /api/v1/categories
```

### Terminal 2 (Frontend)
Shows compilation info and hot reload status

### DevTools (Browser)
- **Network Tab**: See all API requests
- **Console Tab**: See JavaScript errors
- **Application Tab**: See localStorage (auth_token)

---

## 🔑 Default Test Credentials

Check database for existing users:
```sql
USE latia_pos;
SELECT username, email FROM users LIMIT 5;
DESC users;
```

Or create a test user:
```sql
INSERT INTO users (username, password_hash, email, full_name, role_id, is_active, created_at, updated_at)
VALUES ('testuser', MD5('password123'), 'test@example.com', 'Test User', 1, 1, NOW(), NOW());
```

---

## 📁 Project Structure

```
Frontend:
  C:\Users\User\Desktop\adminLaTiaPOS\
  ├── src/
  │   ├── services/           (NEW - API services)
  │   ├── pages/
  │   │   ├── LoginPage.tsx   (UPDATED - real auth)
  │   │   └── AdminPage.tsx   (UPDATED - real API)
  │   └── ...
  ├── .env                    (NEW - API config)
  ├── package.json            (UPDATED - added axios)
  └── ...

Backend:
  C:\Users\User\Desktop\LatiaBackend\
  ├── app/Http/Controllers/Api/
  ├── routes/api.php
  ├── database/migrations/
  ├── .env
  └── ...

Database:
  MySQL - latia_pos
```

---

## 🚀 Normal Startup (After Initial Setup)

```powershell
# Terminal 1
cd "C:\Users\User\Desktop\LatiaBackend"
php artisan serve --host=127.0.0.1 --port=8000

# Terminal 2 (new or different window)
cd "c:\Users\User\Desktop\adminLaTiaPOS"
npm run dev

# Then open browser to http://localhost:5173
```

---

## 📖 Additional Documentation

- See `INTEGRATION_GUIDE.md` for full API documentation
- See `QUICK_START.md` for verification checklist
- See `INTEGRATION_SUMMARY.md` for what changed

---

## ✨ Key Features Now Working

✅ User authentication via backend
✅ Category management with database persistence
✅ Product management connected to MySQL
✅ Inventory management with API calls
✅ Automatic token management
✅ Error handling and user feedback
✅ Automatic logout on unauthorized access

---

## 🎯 What to Do Next

1. **Run the commands above**
2. **Test login with database credentials**
3. **Try creating a category (appears in database)**
4. **Try creating a product**
5. **Everything should persist after page refresh**

Good luck! 🚀
