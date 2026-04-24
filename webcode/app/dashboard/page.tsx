'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [data, setData] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(d => setData(d));
  }, []);

  const handleSave = async (updatedData: any) => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });
      if (res.ok) {
        setData(updatedData);
        setMessage('Changes saved successfully!');
      } else {
        setMessage('Failed to save changes.');
      }
    } catch (e) {
      setMessage('An error occurred while saving.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      const { url } = await res.json();
      return url;
    }
    throw new Error('Upload failed');
  };

  if (!data) return <div className="p-10">Loading dashboard...</div>;

  return (
    <div>
      <div className="flex space-x-4 border-b border-gray-200 mb-6 pb-2">
        {['profile', 'projects', 'experience'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 capitalize rounded-t-md font-medium transition-colors ${activeTab === tab ? 'bg-primary text-white bg-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      {activeTab === 'profile' && (
        <ProfileTab
          profile={data.profile}
          onSave={p => handleSave({ ...data, profile: p })}
          onUpload={handleFileUpload}
        />
      )}
      {activeTab === 'projects' && (
        <ProjectsTab
          projects={data.projects}
          onSave={p => handleSave({ ...data, projects: p })}
        />
      )}
      {activeTab === 'experience' && (
        <ExperienceTab
          experiences={data.experiences}
          onSave={e => handleSave({ ...data, experiences: e })}
        />
      )}
    </div>
  );
}

function ProfileTab({ profile, onSave, onUpload }: any) {
  const [formData, setFormData] = useState(profile);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = async (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      try {
        const url = await onUpload(e.target.files[0]);
        setFormData({ ...formData, profileImageUrl: url });
      } catch (err) {
        alert('Upload failed');
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="space-y-4 max-w-lg">
      <h2 className="text-xl font-semibold">Edit Profile</h2>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Role / Headline</label>
        <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">Profile Image URL</label>
        <div className="flex space-x-2 items-center">
          <input type="text" name="profileImageUrl" value={formData.profileImageUrl} onChange={handleChange} className="flex-1 p-2 border rounded bg-gray-50" />
          <div className="relative overflow-hidden">
            <button type="button" className="bg-gray-200 text-black px-4 py-2 rounded font-semibold w-full">
              {uploading ? 'Uploading...' : 'Upload New'}
            </button>
            <input type="file" className="absolute left-0 top-0 opacity-0 cursor-pointer w-full h-full" onChange={handleImageChange} accept="image/*" />
          </div>
        </div>
        {formData.profileImageUrl && (
          <img src={formData.profileImageUrl} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-full shadow-md" />
        )}
      </div>

      <button onClick={() => onSave(formData)} className="bg-black text-white px-6 py-2 rounded font-semibold mt-4">Save Profile</button>
    </div>
  );
}

function ProjectsTab({ projects, onSave }: any) {
  const [list, setList] = useState(projects);

  const handleChange = (index: number, e: any) => {
    const newList = [...list];
    newList[index][e.target.name] = e.target.value;
    setList(newList);
  };

  const addProject = () => {
    setList([...list, { id: Date.now().toString(), title: 'New', description: '', linkUrl: '', linkText: '', mediaType: 'image', mediaUrl: '', gradient: '' }]);
  };

  const removeProject = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Edit Projects</h2>
        <button onClick={addProject} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">+ Add Project</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {list.map((proj: any, idx: number) => (
          <div key={proj.id} className="border p-4 rounded bg-gray-50 space-y-3 relative shadow-sm">
            <button onClick={() => removeProject(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold">X</button>
            
            <input type="text" name="title" value={proj.title} onChange={e => handleChange(idx, e)} className="w-full p-2 border rounded font-semibold text-lg" placeholder="Project Title" />
            <textarea name="description" value={proj.description} onChange={e => handleChange(idx, e)} className="w-full p-2 border rounded" placeholder="Description" rows={3}></textarea>
            
            <div className="grid grid-cols-2 gap-2">
              <input type="text" name="linkText" value={proj.linkText} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm" placeholder="Link Text" />
              <input type="text" name="linkUrl" value={proj.linkUrl} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm" placeholder="Link URL" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <select name="mediaType" value={proj.mediaType} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm bg-white">
                <option value="image">Image</option>
                <option value="video">Video (YouTube Embed URL)</option>
              </select>
              <input type="text" name="mediaUrl" value={proj.mediaUrl} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm" placeholder="Media Path/URL" />
            </div>
            
            <input type="text" name="gradient" value={proj.gradient} onChange={e => handleChange(idx, e)} className="w-full p-2 border rounded text-xs text-gray-500" placeholder="Gradient CSS String" />
          </div>
        ))}
      </div>

      <button onClick={() => onSave(list)} className="bg-black text-white px-6 py-2 rounded font-semibold">Save All Projects</button>
    </div>
  );
}

function ExperienceTab({ experiences, onSave }: any) {
  const [list, setList] = useState(experiences);

  const handleChange = (index: number, e: any) => {
    const newList = [...list];
    newList[index][e.target.name] = e.target.value;
    setList(newList);
  };

  const addExperience = () => {
    setList([...list, { id: Date.now().toString(), title: '', company: '', date: '', description: '' }]);
  };

  const removeExperience = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Edit Experience</h2>
        <button onClick={addExperience} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">+ Add Experience</button>
      </div>

      <div className="space-y-6">
        {list.map((exp: any, idx: number) => (
          <div key={exp.id} className="border p-4 rounded bg-gray-50 flex gap-4 relative shadow-sm">
            <button onClick={() => removeExperience(idx)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold">X</button>
            <div className="flex-1 space-y-3">
              <input type="text" name="title" value={exp.title} onChange={e => handleChange(idx, e)} className="w-full p-2 border rounded font-semibold text-lg" placeholder="Role/Title" />
              <div className="grid grid-cols-2 gap-2">
                <input type="text" name="company" value={exp.company} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm" placeholder="Company/Organization Name" />
                <input type="text" name="date" value={exp.date} onChange={e => handleChange(idx, e)} className="p-2 border rounded text-sm" placeholder="Date (e.g. Sept 2023 - Present)" />
              </div>
              <textarea name="description" value={exp.description} onChange={e => handleChange(idx, e)} className="w-full p-2 border rounded text-sm" placeholder="Description/Bullets" rows={3}></textarea>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => onSave(list)} className="bg-black text-white px-6 py-2 rounded font-semibold">Save Experiences</button>
    </div>
  );
}
