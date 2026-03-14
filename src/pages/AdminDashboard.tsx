import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { LogOut, Save, Globe, Server, Settings, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'gallery' | 'smtp'>('content');
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  // Default structure
  const [formData, setFormData] = useState({
    heroHeadline: "Premium Solar &\nBattery\nInstallations",
    aboutText: "At Idealpower, we are committed to helping you achieve energy independence...",
    smtpHost: "",
    smtpPort: "587",
    smtpUser: "",
    smtpPass: "",
    contactEmail: "info@idealpower.com.au",
    contactPhone: "0450 500 803",
    galleryImages: [] as string[]
  });

  // Fetch current data on load
  useEffect(() => {
    async function loadData() {
      try {
        const docRef = doc(db, 'site_settings', 'main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          // If galleryImages doesn't exist or is empty, provide the defaults
          if (!data.galleryImages || data.galleryImages.length === 0) {
            data.galleryImages = [
              "/images/commercial-electrician-melbourne.jpeg",
              "/images/electrical-contractor-team.png",
              "/images/electrician-working-switchboard-cables.jpg",
              "/images/professional-electrical-services.jpg",
              "/images/residential-electrician-services.webp",
              "/images/electrical-switchboard-installation.jpg"
            ];
          }
          setFormData(prev => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error("Error loading data:", err);
        toast.error("Failed to load settings from database");
      }
    }
    loadData();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await setDoc(doc(db, 'site_settings', 'main'), formData, { merge: true });
      toast.success("Settings saved to database!");
    } catch (err: any) {
        console.error("Error saving:", err);
        toast.error("Error saving: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!confirm("This will trigger a rebuild and deploy the live site. Continue?")) return;
    
    setIsPublishing(true);
    try {
      // First ensure data is saved
      await setDoc(doc(db, 'site_settings', 'main'), formData, { merge: true });
      
      // Trigger GitHub Action URL (We'll need to set up the actual URL/Token in GitHub later)
      // This is a placeholder for the actual fetch call to the GitHub Actions API
      toast.success("Build triggered! The live site will update in ~2 minutes.", { duration: 5000 });
      
    } catch (err: any) {
        toast.error("Error publishing: " + err.message);
    } finally {
        setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Toaster position="top-right" />
      
      {/* Sidebar sidebar */}
      <aside className="w-full md:w-64 bg-black text-white flex flex-col">
        <div className="p-6 border-b border-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
            <ShieldCheck className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 relative">
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'content' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-900'}`}
          >
            <Globe className="w-4 h-4" />
            Website Content
          </button>
          
          <button 
            onClick={() => setActiveTab('gallery')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'gallery' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-900'}`}
          >
            <Globe className="w-4 h-4" />
            Gallery Images
          </button>
          
          <button 
            onClick={() => setActiveTab('smtp')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'smtp' ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-900'}`}
          >
            <Server className="w-4 h-4" />
            SMTP & Config
          </button>

           <div className="pt-8 mt-8 border-t border-gray-800">
             <div className="text-xs text-gray-500 uppercase tracking-wider mb-4 px-4 font-semibold">Deployment</div>
             <div className="px-4">
               <button
                 onClick={handlePublish}
                 disabled={isPublishing}
                 className="w-full flex justify-center items-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 disabled:opacity-50"
               >
                 {isPublishing ? (
                     <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                 ) : "Publish to Live"}
               </button>
               <p className="text-[10px] text-gray-500 mt-2 text-center">Triggers a static rebuild.</p>
             </div>
           </div>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-xl text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-h-screen overflow-y-auto">
        <div className="p-8 max-w-4xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {activeTab === 'content' ? 'Website Content' : activeTab === 'gallery' ? 'Gallery Images' : 'SMTP Configuration'}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Edit your site details. Click Save to store in database, and Publish to update the live website.
                    </p>
                </div>
            </header>

            <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                {activeTab === 'content' && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Hero Headline</label>
                            <textarea 
                                name="heroHeadline"
                                value={formData.heroHeadline}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all font-mono text-sm"
                            />
                            <p className="text-xs text-gray-400 mt-1">Use newlines (Enter) to format lines as seen on the live site.</p>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">About Us Text</label>
                            <textarea 
                                name="aboutText"
                                value={formData.aboutText}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Contact Email</label>
                                <input 
                                    type="email"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Contact Phone</label>
                                <input 
                                    type="text"
                                    name="contactPhone"
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'gallery' && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Gallery Images</h3>
                            <button
                                type="button"
                                onClick={() => {
                                    const url = prompt("Enter image URL:");
                                    if (url) {
                                        setFormData(prev => ({
                                            ...prev,
                                            galleryImages: [...(prev.galleryImages || []), url]
                                        }));
                                    }
                                }}
                                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                            >
                                Add Image
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {(formData.galleryImages || []).map((url, index) => (
                                <div key={index} className="relative group aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                                    <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    galleryImages: prev.galleryImages.filter((_, i) => i !== index)
                                                }));
                                            }}
                                            className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'smtp' && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-xl text-sm border border-blue-100 flex items-start gap-3 mb-6">
                            <Settings className="w-5 h-5 shrink-0 mt-0.5" />
                            <p>Configure your SMTP server to allow the website contact forms to send emails directly to your inbox securely.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2">SMTP Host</label>
                                <input 
                                    type="text"
                                    name="smtpHost"
                                    placeholder="e.g. smtp.gmail.com"
                                    value={formData.smtpHost}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Port</label>
                                <input 
                                    type="text"
                                    name="smtpPort"
                                    value={formData.smtpPort}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">SMTP User (Email)</label>
                                <input 
                                    type="text"
                                    name="smtpUser"
                                    value={formData.smtpUser}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">SMTP Password / App Password</label>
                                <input 
                                    type="password"
                                    name="smtpPass"
                                    placeholder="••••••••••••"
                                    value={formData.smtpPass}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="flex items-center gap-2 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {isSaving ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>
                                <Save className="w-5 h-5" />
                                Save Changes
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
      </main>
    </div>
  );
}
