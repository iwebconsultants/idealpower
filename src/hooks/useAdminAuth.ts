import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase';

// ONLY these emails will be allowed into the Admin Dashboard
const ALLOWED_ADMIN_EMAILS = [
  'info@idealpower.com.au', // Add the actual admin emails here
];

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser && currentUser.email && ALLOWED_ADMIN_EMAILS.includes(currentUser.email)) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isAuthorized };
}
