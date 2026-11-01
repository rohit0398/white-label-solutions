import type { Currency, PricingTier } from "@/types";

// Published commercial prices. Language never changes the numeric amount.
const PRICES = {
  "launch": {
    "USD": {
      "amount": 4999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 4599,
      "period": "one-time"
    },
    "GBP": {
      "amount": 3999,
      "period": "one-time"
    },
    "INR": {
      "amount": 399000,
      "period": "one-time"
    }
  },
  "source-code-license": {
    "USD": {
      "amount": 1999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 1849,
      "period": "one-time"
    },
    "GBP": {
      "amount": 1599,
      "period": "one-time"
    },
    "INR": {
      "amount": 149000,
      "period": "one-time"
    }
  },
  "dedicated-support": {
    "USD": {
      "amount": 20,
      "period": "per hour"
    },
    "EUR": {
      "amount": 19,
      "period": "per hour"
    },
    "GBP": {
      "amount": 16,
      "period": "per hour"
    },
    "INR": {
      "amount": 1500,
      "period": "per hour"
    }
  },
  "app-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "app-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "app-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  },
  "web-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "web-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "web-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  },
  "short-drama-base": {
    "USD": {
      "amount": 4999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 4599,
      "period": "one-time"
    },
    "GBP": {
      "amount": 3999,
      "period": "one-time"
    },
    "INR": {
      "amount": 399000,
      "period": "one-time"
    }
  },
  "short-drama-source-code": {
    "USD": {
      "amount": 1999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 1849,
      "period": "one-time"
    },
    "GBP": {
      "amount": 1599,
      "period": "one-time"
    },
    "INR": {
      "amount": 149000,
      "period": "one-time"
    }
  },
  "short-drama-developer-time": {
    "USD": {
      "amount": 20,
      "period": "per hour"
    },
    "EUR": {
      "amount": 18,
      "period": "per hour"
    },
    "GBP": {
      "amount": 16,
      "period": "per hour"
    },
    "INR": {
      "amount": 1500,
      "period": "per hour"
    }
  },
  "short-drama-app-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "short-drama-app-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "short-drama-app-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  },
  "short-drama-web-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "short-drama-web-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "short-drama-web-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  },
  "cinematic-base": {
    "USD": {
      "amount": 4999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 4599,
      "period": "one-time"
    },
    "GBP": {
      "amount": 3999,
      "period": "one-time"
    },
    "INR": {
      "amount": 399000,
      "period": "one-time"
    }
  },
  "cinematic-base-source-code": {
    "USD": {
      "amount": 1999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 1849,
      "period": "one-time"
    },
    "GBP": {
      "amount": 1599,
      "period": "one-time"
    },
    "INR": {
      "amount": 149000,
      "period": "one-time"
    }
  },
  "cinematic-base-developer-time": {
    "USD": {
      "amount": 20,
      "period": "per hour"
    },
    "EUR": {
      "amount": 18,
      "period": "per hour"
    },
    "GBP": {
      "amount": 16,
      "period": "per hour"
    },
    "INR": {
      "amount": 1500,
      "period": "per hour"
    }
  },
  "cinematic-web-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "cinematic-web-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "cinematic-web-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  },
  "cinematic-app-launch": {
    "USD": {
      "amount": 2999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 2749,
      "period": "one-time"
    },
    "GBP": {
      "amount": 2399,
      "period": "one-time"
    },
    "INR": {
      "amount": 249000,
      "period": "one-time"
    }
  },
  "cinematic-app-source-code": {
    "USD": {
      "amount": 999,
      "period": "one-time"
    },
    "EUR": {
      "amount": 920,
      "period": "one-time"
    },
    "GBP": {
      "amount": 799,
      "period": "one-time"
    },
    "INR": {
      "amount": 79000,
      "period": "one-time"
    }
  },
  "cinematic-app-developer-time": {
    "USD": {
      "amount": 15,
      "period": "per hour"
    },
    "EUR": {
      "amount": 14,
      "period": "per hour"
    },
    "GBP": {
      "amount": 12,
      "period": "per hour"
    },
    "INR": {
      "amount": 1200,
      "period": "per hour"
    }
  }
} as const;
export type PackageId = keyof typeof PRICES;
export function packagePrices(id: PackageId): PricingTier["prices"] { return PRICES[id]; }
export function packageAmount(id: PackageId, currency: Currency = "USD") { return PRICES[id][currency].amount; }
export function schemaPrice(id: PackageId) { return packageAmount(id).toFixed(2); }
export const FAMILY_PACKAGE = { home: "launch", ecommerce: "launch", "short-drama": "short-drama-base", "ott-streaming": "cinematic-base" } as const;
export function displayPackagePrice(id: PackageId, locale: string, currency: Currency = "USD") { return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(packageAmount(id, currency)); }

/** Interpolate explicit package placeholders in translated and English copy. */
export function priceText(text: string, locale = "en") {
  return text.replace(/\{price:([^}]+)\}/g, (_match, id: string) => {
    if (!Object.hasOwn(PRICES, id)) throw new Error("Unknown price placeholder: " + id);
    return displayPackagePrice(id as PackageId, locale);
  });
}
