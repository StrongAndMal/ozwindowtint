# Google Maps API Setup Guide

## Quick Fix for Development

### 1. Add Domain Restrictions to Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Find your Google Maps API key and click on it
4. Under **Application restrictions**, select **HTTP referrers (web sites)**
5. Add these referrers to the **Website restrictions** list:

```
localhost:8081/*
127.0.0.1:8081/*
localhost:*
127.0.0.1:*
```

6. Click **Save**

### 2. Enable Required APIs

Make sure these APIs are enabled in your Google Cloud project:

- **Maps JavaScript API**
- **Geocoding API** (for address lookup)
- **Places API** (if using places features)

## Environment Variables

Create a `.env` file in your project root:

```env
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

## Error Handling Features

The updated `LandscapeMap` component now includes:

### ✅ API Key Validation

- Validates API key format before making requests
- Shows clear error messages for invalid keys

### ✅ Retry Mechanism

- Exponential backoff for failed geocoding requests
- Maximum 3 retry attempts with increasing delays
- 5-second timeout for each geocoding request

### ✅ Fallback Coordinates

- Uses Los Angeles coordinates when geocoding fails
- Shows "approximate location" indicator
- Map still works even without geocoding

### ✅ Development-Friendly Features

- Environment detection (localhost vs production)
- Mock geocoding for development testing
- Detailed console logging for debugging
- Development-specific error messages

### ✅ Comprehensive Error Handling

- Specific error messages for common API issues:
  - `RefererNotAllowedMapError` - Domain restriction issues
  - `ApiNotActivatedMapError` - API not enabled
  - `InvalidKeyMapError` - Invalid API key
- 15-second timeout for map initialization
- Graceful fallback when API is unavailable

### ✅ User Feedback

- Loading states with progress indicators
- Clear error messages with actionable steps
- Retry and refresh buttons
- Development setup instructions

## Common Issues & Solutions

### RefererNotAllowedMapError

**Problem**: API key domain restrictions blocking localhost
**Solution**: Add localhost domains to Google Cloud Console restrictions

### Geocoding Timeout

**Problem**: Address lookup taking too long
**Solution**: Component now uses 5-second timeout with retry mechanism

### API Not Activated

**Problem**: Maps JavaScript API not enabled
**Solution**: Enable required APIs in Google Cloud Console

### Invalid API Key

**Problem**: Malformed or incorrect API key
**Solution**: Check API key format and regenerate if needed

## Development Testing

The component automatically detects development environment and:

- Uses mock geocoding if real geocoding fails
- Shows development-specific error messages
- Provides setup instructions for localhost

## Production Deployment

For production, ensure:

1. API key has proper domain restrictions for your production domain
2. All required APIs are enabled
3. Billing is set up in Google Cloud Console
4. API quotas are sufficient for your usage

## Troubleshooting

### Check API Key Status

```javascript
// In browser console
console.log("API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
```

### Verify API Loading

The component logs detailed information to console:

- API loading status
- Geocoding attempts
- Error details
- Environment detection

### Test Fallback Mode

If geocoding fails, the map will:

1. Use fallback coordinates (Los Angeles area)
2. Show "approximate location" indicator
3. Still provide full map functionality
4. Allow users to get directions to the fallback location

## Security Best Practices

1. **Restrict API Key**: Always set domain restrictions
2. **Monitor Usage**: Check Google Cloud Console for usage metrics
3. **Rotate Keys**: Regularly update API keys
4. **Environment Variables**: Never commit API keys to version control
5. **Quota Limits**: Set appropriate quota limits to prevent abuse

## Support

If you continue to experience issues:

1. Check Google Cloud Console for error logs
2. Verify API key permissions and restrictions
3. Test with a simple HTML file to isolate issues
4. Check browser console for detailed error messages
