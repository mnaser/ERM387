# Errors

<aside class="notice">The Error portion of the API is Under Construction.</aside>

The ERM API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request is wrong
401 | Unauthorized -- Your API key is wrong
403 | Forbidden -- Administrators only
404 | Not Found -- Not found
405 | Method Not Allowed -- You tried an access with an invalid method
406 | Not Acceptable -- You requested a format that isn't json
410 | Gone -- The item requested has been removed from our servers
429 | Too Many Requests -- You're requesting too many items! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarially offline for maintenance. Please try again later.