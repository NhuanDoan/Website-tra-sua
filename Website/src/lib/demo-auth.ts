export type DemoUser = {
  name: string;
  phone: string;
  password: string;
};

const ACCOUNT_CHANGE_EVENT = "teamilk:account-change";

function notifyAccountChange() {
  window.dispatchEvent(new Event(ACCOUNT_CHANGE_EVENT));
}

function isDemoUser(value: unknown): value is DemoUser {
  if (typeof value !== "object" || value === null) return false;
  const user = value as Record<string, unknown>;
  return typeof user.name === "string"
    && typeof user.phone === "string"
    && typeof user.password === "string";
}

export function readDemoUsers(): DemoUser[] {
  try {
    const storedValue: unknown = JSON.parse(localStorage.getItem("users") ?? "[]");
    return Array.isArray(storedValue) ? storedValue.filter(isDemoUser) : [];
  } catch {
    return [];
  }
}

export function registerDemoUser(user: DemoUser): boolean {
  try {
    localStorage.setItem("users", JSON.stringify([...readDemoUsers(), user]));
    localStorage.setItem("NameTT", user.name);
    localStorage.setItem("PhoneTT", user.phone);
    localStorage.setItem("trangthaiDN", "False");
    notifyAccountChange();
    return true;
  } catch {
    return false;
  }
}

export function signInDemoUser(phone: string, password: string): DemoUser | null {
  const user = readDemoUsers().find(
    (candidate) => candidate.phone === phone && candidate.password === password,
  );
  if (!user) {
    try {
      localStorage.setItem("trangthaiDN", "False");
      notifyAccountChange();
    } catch {
      // Browser storage can be unavailable; report a failed sign-in to the caller.
    }
    return null;
  }

  try {
    localStorage.setItem("trangthaiDN", "True");
    localStorage.setItem("NameTT", user.name);
    localStorage.setItem("PhoneTT", user.phone);
    notifyAccountChange();
    return user;
  } catch {
    return null;
  }
}

export function signOutDemoUser(): boolean {
  try {
    localStorage.setItem("trangthaiDN", "False");
    notifyAccountChange();
    return true;
  } catch {
    return false;
  }
}
