type Falsy = boolean | undefined | null | 0;

// Shamelessly borrowed from src/utilities/css @ shopify/polaris
export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(' ');
}

