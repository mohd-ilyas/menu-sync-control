
import React from 'react';
import { MenuItem } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
  isTV?: boolean;
  className?: string;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  onToggle, 
  onDelete, 
  isTV = false,
  className = '' 
}) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg border border-gray-200 p-6 
      ${isTV ? 'min-h-[120px] mb-6' : 'min-h-[80px] mb-4'}
      transition-all duration-200 hover:shadow-xl
      ${className}
    `}>
      <div className="flex items-center justify-between h-full">
        {/* Item Name */}
        <div className="flex-1 mr-4">
          <h3 className={`
            font-bold text-gray-800 
            ${isTV ? 'text-3xl' : 'text-lg'}
          `}>
            {item.name}
          </h3>
        </div>

        {/* Status Buttons */}
        <div className="flex items-center gap-4">
          {/* Not Available Button */}
          <button
            onClick={() => onToggle(item.id)}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${isTV ? 'text-xl px-8 py-4' : 'text-base'}
              ${!item.isAvailable 
                ? 'bg-red-500 text-white shadow-lg animate-pulse' 
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
              }
            `}
            disabled={item.isAvailable}
          >
            Not Available
          </button>

          {/* Available Button */}
          <button
            onClick={() => onToggle(item.id)}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200
              ${isTV ? 'text-xl px-8 py-4' : 'text-base'}
              ${item.isAvailable 
                ? 'bg-green-500 text-white shadow-lg animate-pulse' 
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
              }
            `}
            disabled={!item.isAvailable}
          >
            Available
          </button>

          {/* Delete Button (Mobile Only) */}
          {!isTV && onDelete && (
            <button
              onClick={() => onDelete(item.id)}
              className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
