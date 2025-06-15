
import { useState, useEffect, useCallback } from 'react';
import { MenuItem } from '../types/menu';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'restaurant-menu-items';

export const useMenuStore = () => {
  const [items, setItems] = useState<MenuItem[]>([]);

  // Load items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        setItems(parsedItems.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt)
        })));
      } catch (error) {
        console.error('Error loading menu items from storage:', error);
        // Initialize with default items if storage is corrupted
        initializeDefaultItems();
      }
    } else {
      initializeDefaultItems();
    }
  }, []);

  // Save items to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const initializeDefaultItems = () => {
    const defaultItems: MenuItem[] = [
      {
        id: uuidv4(),
        name: 'Grilled Chicken Sandwich',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Vegetarian Pizza',
        isAvailable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Caesar Salad',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Fish and Chips',
        isAvailable: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Beef Burger',
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    setItems(defaultItems);
  };

  const addItem = useCallback((name: string) => {
    const newItem: MenuItem = {
      id: uuidv4(),
      name: name.trim(),
      isAvailable: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setItems(prev => [...prev, newItem]);
    return newItem;
  }, []);

  const toggleItem = useCallback((id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, isAvailable: !item.isAvailable, updatedAt: new Date() }
        : item
    ));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateItems = useCallback((newItems: MenuItem[]) => {
    setItems(newItems);
  }, []);

  return {
    items,
    addItem,
    toggleItem,
    deleteItem,
    updateItems
  };
};
