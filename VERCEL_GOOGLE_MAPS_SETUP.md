# Vercel Google Maps API Setup Guide

## 🚀 **Complete Setup Instructions**

### **Step 1: Vercel Environment Variables**

1. **Go to your Vercel Dashboard**
2. **Select your project**
3. **Navigate to Settings > Environment Variables**
4. **Add these variables:**

| Variable Name              | Value                                       | Description              |
| -------------------------- | ------------------------------------------- | ------------------------ |
| `VITE_GOOGLE_MAPS_API_KEY` | `AIzaSyC_Rr7Vg46NUO1jZZMCG8Zm2HPQLIUqqPw`   | Your Google Maps API key |
| `VITE_LATITUDE`            | `33.9164`                                   | Business latitude        |
| `VITE_LONGITUDE`           | `-118.3526`                                 | Business longitude       |
| `VITE_BUSINESS_NAME`       | `OzWindowTint`                              | Your business name       |
| `VITE_BUSINESS_ADDRESS`    | `13791 Hawthorne Blvd, Hawthorne, CA 90250` | Your business address    |

### **Step 2: Google Cloud Console Configuration**

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Navigate to APIs & Services > Credentials**
3. **Find your API key: `AIzaSyC_Rr7Vg46NUO1jZZMCG8Zm2HPQLIUqqPw`**
4. **Click on the API key**
5. **Under Application restrictions, select "HTTP referrers (web sites)"**
6. **Add these domain restrictions:**

```
http://localhost:*
https://localhost:*
http://127.0.0.1:*
https://127.0.0.1:*
https://your-vercel-domain.vercel.app/*
https://*.vercel.app/*
```

7. **Click Save**

### **Step 3: Enable Required APIs**

Make sure these APIs are enabled in your Google Cloud project:

- ✅ **Maps JavaScript API**
- ✅ **Geocoding API**
- ✅ **Places API** (optional, for enhanced features)

### **Step 4: Verify Deployment**

1. **Wait for Vercel to redeploy** (1-2 minutes)
2. **Check your Vercel URL**
3. **Navigate to the Map section**
4. **The map should load with your business location**

## 🔧 **Troubleshooting**

### **Common Issues & Solutions:**

#### **1. "Domain not authorized" Error**

**Symptoms:** `RefererNotAllowedMapError`
**Solution:**

- Add your Vercel domain to Google Cloud Console restrictions
- Include both `https://your-domain.vercel.app/*` and `https://*.vercel.app/*`

#### **2. "API key not configured" Error**

**Symptoms:** "Google Maps API key is not configured"
**Solution:**

- Check Vercel environment variables are set correctly
- Ensure variable names start with `VITE_`
- Redeploy after adding environment variables

#### **3. "API not activated" Error**

**Symptoms:** `ApiNotActivatedMapError`
**Solution:**

- Enable Maps JavaScript API in Google Cloud Console
- Check billing is set up

#### **4. Map Not Loading**

**Symptoms:** Blank map area, loading spinner
**Solution:**

- Check browser console for errors
- Verify all environment variables are set
- Check internet connection

## 🧪 **Testing**

### **Local Development Testing:**

1. **Create `.env.local` file** (not committed to git):

```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSyC_Rr7Vg46NUO1jZZMCG8Zm2HPQLIUqqPw
VITE_LATITUDE=33.9164
VITE_LONGITUDE=-118.3526
VITE_BUSINESS_NAME=OzWindowTint
VITE_BUSINESS_ADDRESS=13791 Hawthorne Blvd, Hawthorne, CA 90250
```

2. **Start development server:** `npm run dev`
3. **Navigate to Map section**
4. **Check console logs** for debug information

### **Production Testing:**

1. **Deploy to Vercel**
2. **Check environment variables** are set correctly
3. **Test on multiple devices** and browsers
4. **Verify map loads** with correct business location

## 📊 **Debug Information**

The Map component now includes:

- ✅ **Development logging** - Console logs in development mode
- ✅ **Specific error messages** - Different messages for different error types
- ✅ **Fallback coordinates** - Uses Hawthorne, CA coordinates if environment variables fail
- ✅ **Better error UI** - Shows business info even when map fails
- ✅ **Get Directions link** - Direct link to Google Maps directions

## 🔒 **Security Best Practices**

1. **Domain Restrictions** - Always restrict API key to your domains
2. **Environment Variables** - Never commit API keys to version control
3. **Monitoring** - Check Google Cloud Console for usage metrics
4. **Quota Limits** - Set appropriate quota limits to prevent abuse

## 📞 **Support**

If you continue to experience issues:

1. **Check Vercel deployment logs** for build errors
2. **Verify environment variables** are set correctly
3. **Test with browser console** for detailed error messages
4. **Check Google Cloud Console** for API usage and errors

## ✅ **Success Checklist**

- [ ] Environment variables set in Vercel
- [ ] Domain restrictions added to Google Cloud Console
- [ ] Required APIs enabled
- [ ] Vercel deployment successful
- [ ] Map loads correctly on production site
- [ ] Business location displays correctly
- [ ] Error handling works as expected

Your Google Maps should now work perfectly on Vercel! 🗺️
