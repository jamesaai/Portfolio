# Security Documentation

## Security Measures Implemented

This document outlines the security measures implemented in this portfolio website.

### 1. Environment Variables & Secrets Management

- **API Keys**: All API keys are stored in environment variables (`.env` files)
- **Git Ignore**: `.env` files are excluded from version control
- **Vite Environment Variables**: Use `VITE_` prefix for client-side variables

**Setup Instructions:**
1. Copy `.env.example` to `.env`
2. Add your actual API keys to `.env`
3. Never commit `.env` files to version control

### 2. Content Security Policy (CSP)

Implemented via `vercel.json` headers:
- Prevents XSS attacks by restricting resource loading
- Allows only trusted sources for scripts, styles, and fonts
- Blocks inline scripts and styles (with necessary exceptions)
- Prevents data injection attacks

### 3. Security Headers

The following security headers are configured:

- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-XSS-Protection: 1; mode=block** - Enables XSS filtering
- **Strict-Transport-Security** - Forces HTTPS connections
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts browser features

### 4. Input Validation & Sanitization

All user inputs are:
- **Sanitized**: Removed dangerous characters and patterns
- **Validated**: Checked for format and length
- **Length Limited**: Maximum length restrictions applied
- **Type Checked**: Ensured correct data types

**Validation Functions:**
- `sanitizeInput()` - Removes XSS vectors
- `isValidEmail()` - Validates email format
- `isValidUrl()` - Validates URL format
- `isSafeInput()` - Checks for dangerous patterns

### 5. Rate Limiting

Client-side rate limiting implemented:
- **Contact Form**: Maximum 5 submissions per 24 hours per user
- Uses localStorage for tracking (server-side should also implement)
- Prevents spam and abuse

### 6. Error Handling

- Generic error messages shown to users
- Detailed errors logged server-side only
- No sensitive information exposed in error responses
- Prevents information leakage

### 7. HTTPS Enforcement

- HSTS header configured for 1 year
- Includes subdomains
- Preload enabled for major browsers

### 8. Security.txt

Located at `/.well-known/security.txt`:
- Provides contact information for security researchers
- Enables responsible disclosure of vulnerabilities
- Follows RFC 9116 standard

## Security Best Practices

### For Developers

1. **Never commit secrets** to version control
2. **Use environment variables** for all sensitive data
3. **Validate all inputs** on both client and server
4. **Keep dependencies updated** - Run `npm audit` regularly
5. **Review security headers** when adding new features
6. **Test security measures** before deploying

### For Deployment

1. **Set environment variables** in Vercel dashboard
2. **Enable HTTPS** (automatic on Vercel)
3. **Review security headers** in `vercel.json`
4. **Monitor error logs** for suspicious activity
5. **Keep dependencies updated**

### Dependency Security

Regularly audit dependencies:
```bash
npm audit
npm audit fix
```

## Reporting Security Issues

If you discover a security vulnerability, please:

1. **Do NOT** create a public GitHub issue
2. Email security details to: security@yourdomain.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work with you to resolve the issue.

## Security Checklist

Before deploying:

- [ ] All API keys moved to environment variables
- [ ] `.env` files added to `.gitignore`
- [ ] Security headers configured in `vercel.json`
- [ ] Input validation implemented for all forms
- [ ] Rate limiting configured
- [ ] Error handling prevents information leakage
- [ ] Dependencies audited (`npm audit`)
- [ ] HTTPS enforced
- [ ] Security.txt file updated with contact info

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Security Best Practices](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Vercel Security Headers](https://vercel.com/docs/concepts/projects/security-headers)

