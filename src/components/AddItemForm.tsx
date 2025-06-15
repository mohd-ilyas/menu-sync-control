
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddItemFormProps {
  onAdd: (name: string) => void;
  className?: string;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd, className = '' }) => {
  const [name, setName] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
      setIsExpanded(false);
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className={`
          w-full bg-blue-500 text-white rounded-xl p-4 
          flex items-center justify-center gap-2 
          hover:bg-blue-600 transition-colors duration-200
          ${className}
        `}
      >
        <Plus className="w-5 h-5" />
        <span className="font-semibold">Add New Menu Item</span>
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 ${className}`}>
      <div className="flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter menu item name..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autoFocus
          maxLength={50}
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => {
            setIsExpanded(false);
            setName('');
          }}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
