import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { ShieldAlert, LogIn } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // The useAdminAuth hook in ProtectedRoute will actually handle kicking them out 
      // if their email isn't whitelisted, but we can do a quick check here for better UX
      const email = result.user.email;
      const allowedEmails = ['info@idealpower.com.au', 'azam@anigravity.com'];
      
      if (email && allowedEmails.includes(email)) {
        navigate('/admin');
      } else {
        setError("Unauthorized: This Google account does not have admin privileges.");
        await auth.signOut(); // Immediately sign them out
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20">
            <ShieldAlert className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">Admin Portal</h1>
          <p className="text-gray-500 text-sm mt-2 text-center">Sign in with your authorized Google Account to manage website content.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100 flex items-start gap-3">
             <ShieldAlert className="w-5 h-5 shrink-0" />
             <p>{error}</p>
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-black text-white hover:bg-gray-800 py-3.5 px-4 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
             <>
               <LogIn className="w-5 h-5" />
               Sign in with Google
             </>
          )}
        </button>
        
        <div className="mt-6 text-center">
            <a href="/" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
                &larr; Return to main site
            </a>
        </div>
      </div>
    </div>
  );
}
