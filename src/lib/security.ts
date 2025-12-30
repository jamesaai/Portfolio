/**
 * Security utilities for input validation and sanitization
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The input string to sanitize
 * @param maxLength - Maximum allowed length (default: 5000)
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string, maxLength: number = 5000): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers (onclick, onerror, etc.)
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .slice(0, maxLength); // Limit length
};

/**
 * Validates email address format
 * @param email - Email address to validate
 * @returns true if valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  
  // RFC 5322 compliant email regex (simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validates URL format
 * @param url - URL to validate
 * @returns true if valid, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Rate limiting helper using localStorage
 * Note: This is client-side only. Server-side rate limiting should also be implemented.
 * @param key - Unique key for rate limiting
 * @param maxRequests - Maximum requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns true if within rate limit, false otherwise
 */
export const checkRateLimit = (
  key: string,
  maxRequests: number = 5,
  windowMs: number = 24 * 60 * 60 * 1000 // 24 hours
): boolean => {
  try {
    const now = Date.now();
    const stored = localStorage.getItem(`rate_limit_${key}`);
    
    if (!stored) {
      localStorage.setItem(`rate_limit_${key}`, JSON.stringify({
        count: 1,
        resetTime: now + windowMs
      }));
      return true;
    }
    
    const data = JSON.parse(stored);
    
    // Reset if window has passed
    if (now > data.resetTime) {
      localStorage.setItem(`rate_limit_${key}`, JSON.stringify({
        count: 1,
        resetTime: now + windowMs
      }));
      return true;
    }
    
    // Check if limit exceeded
    if (data.count >= maxRequests) {
      return false;
    }
    
    // Increment count
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify({
      count: data.count + 1,
      resetTime: data.resetTime
    }));
    
    return true;
  } catch (error) {
    // If localStorage fails, allow the request (fail open)
    console.error('Rate limit check failed:', error);
    return true;
  }
};

/**
 * Generates a CSRF token (client-side only, should be validated server-side)
 * @returns CSRF token string
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validates that input contains only safe characters
 * @param input - Input to validate
 * @returns true if safe, false otherwise
 */
export const isSafeInput = (input: string): boolean => {
  if (!input || typeof input !== 'string') return false;
  
  // Check for potentially dangerous patterns
  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /expression\(/i,
    /@import/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ];
  
  return !dangerousPatterns.some(pattern => pattern.test(input));
};

/**
 * Escapes HTML special characters
 * @param text - Text to escape
 * @returns Escaped text
 */
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

