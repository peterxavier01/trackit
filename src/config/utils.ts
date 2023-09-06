// Check if an input is a valid domain or an IP address
export const isDomainOrIpAddress = (input: string) => {
  // Regular expression for IP address
  const ipAddressPattern =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // Regular expression for domain
  const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (ipAddressPattern.test(input)) {
    return "ipAddress";
  } else if (domainPattern.test(input)) {
    return "domain";
  } else {
    return;
  }
};
