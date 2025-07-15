import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: 'car' | 'bike' | 'luxury';
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  seats: number;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  location: string;
  images: string[];
  features: string[];
  rating: number;
  reviews: number;
  available: boolean;
  sellerId: string;
  description: string;
  mileage: number;
  engineSize: string;
  color: string;
  approved: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  createdAt: string;
}

interface VehicleState {
  vehicles: Vehicle[];
  bookings: Booking[];
  wishlist: string[];
  isLoading: boolean;
}

type VehicleAction = 
  | { type: 'SET_VEHICLES'; payload: Vehicle[] }
  | { type: 'ADD_VEHICLE'; payload: Vehicle }
  | { type: 'UPDATE_VEHICLE'; payload: Vehicle }
  | { type: 'DELETE_VEHICLE'; payload: string }
  | { type: 'ADD_BOOKING'; payload: Booking }
  | { type: 'UPDATE_BOOKING'; payload: Booking }
  | { type: 'ADD_TO_WISHLIST'; payload: string }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: VehicleState = {
  vehicles: [],
  bookings: [],
  wishlist: [],
  isLoading: false,
};

// Mock vehicle data
const mockVehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Toyota Camry 2023',
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    type: 'car',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    pricePerDay: 45,
    pricePerWeek: 280,
    pricePerMonth: 1100,
    location: 'New York',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'GPS', 'Bluetooth', 'USB Charging', 'Backup Camera'],
    rating: 4.5,
    reviews: 128,
    available: true,
    sellerId: '2',
    description: 'Comfortable and reliable sedan perfect for city driving and long trips.',
    mileage: 28,
    engineSize: '2.5L',
    color: 'Silver',
    approved: true,
  },
  {
    id: '2',
    name: 'BMW X5 2023',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 7,
    pricePerDay: 120,
    pricePerWeek: 800,
    pricePerMonth: 3200,
    location: 'Los Angeles',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606016159991-8b5d5c6c0e7b?w=800&h=600&fit=crop',
    ],
    features: ['Leather Seats', 'Premium Sound', 'Panoramic Roof', 'Heated Seats', 'Navigation'],
    rating: 4.8,
    reviews: 85,
    available: true,
    sellerId: '2',
    description: 'Luxury SUV with premium features and exceptional performance.',
    mileage: 22,
    engineSize: '3.0L',
    color: 'Black',
    approved: true,
  },
  {
    id: '3',
    name: 'Honda Civic 2022',
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    type: 'car',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 5,
    pricePerDay: 35,
    pricePerWeek: 220,
    pricePerMonth: 850,
    location: 'Chicago',
    images: [
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
    ],
    features: ['AC', 'Bluetooth', 'USB Charging', 'Safety Package'],
    rating: 4.3,
    reviews: 95,
    available: true,
    sellerId: '2',
    description: 'Efficient and sporty compact car ideal for daily commuting.',
    mileage: 32,
    engineSize: '2.0L',
    color: 'Blue',
    approved: true,
  },
  {
    id: '4',
    name: 'Harley Davidson Street 750',
    brand: 'Harley Davidson',
    model: 'Street 750',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 65,
    pricePerWeek: 400,
    pricePerMonth: 1500,
    location: 'Miami',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    ],
    features: ['ABS', 'Digital Display', 'LED Lights', 'Comfortable Seat'],
    rating: 4.6,
    reviews: 42,
    available: true,
    sellerId: '2',
    description: 'Iconic cruiser motorcycle perfect for weekend adventures.',
    mileage: 18,
    engineSize: '750cc',
    color: 'Black',
    approved: true,
  },
  {
    id: '5',
    name: 'Tesla Model S 2024',
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    type: 'luxury',
    fuelType: 'electric',
    transmission: 'automatic',
    seats: 5,
    pricePerDay: 150,
    pricePerWeek: 1000,
    pricePerMonth: 4000,
    location: 'San Francisco',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop',
    ],
    features: ['Autopilot', 'Premium Interior', 'Supercharging', 'Glass Roof', 'Premium Audio'],
    rating: 4.9,
    reviews: 156,
    available: true,
    sellerId: '2',
    description: 'Revolutionary electric luxury sedan with cutting-edge technology.',
    mileage: 405,
    engineSize: 'Electric',
    color: 'Pearl White',
    approved: true,
  },
  {
    id: '6',
    name: 'Mercedes-Benz C-Class 2023',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    pricePerDay: 95,
    pricePerWeek: 650,
    pricePerMonth: 2600,
    location: 'New York',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    ],
    features: ['MBUX System', 'LED Headlights', 'Wireless Charging', 'Premium Sound', 'Ambient Lighting'],
    rating: 4.7,
    reviews: 89,
    available: true,
    sellerId: '2',
    description: 'Elegant luxury sedan with sophisticated German engineering.',
    mileage: 25,
    engineSize: '2.0L Turbo',
    color: 'Obsidian Black',
    approved: true,
  },
  {
    id: '7',
    name: 'Ford Mustang GT 2023',
    brand: 'Ford',
    model: 'Mustang GT',
    year: 2023,
    type: 'car',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 4,
    pricePerDay: 85,
    pricePerWeek: 550,
    pricePerMonth: 2200,
    location: 'Las Vegas',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop',
    ],
    features: ['V8 Engine', 'Sport Suspension', 'Performance Package', 'Brembo Brakes', 'Track Apps'],
    rating: 4.4,
    reviews: 73,
    available: true,
    sellerId: '2',
    description: 'Iconic American muscle car with thrilling performance.',
    mileage: 16,
    engineSize: '5.0L V8',
    color: 'Race Red',
    approved: true,
  },
  {
    id: '8',
    name: 'Yamaha R1 2023',
    brand: 'Yamaha',
    model: 'YZF-R1',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 75,
    pricePerWeek: 480,
    pricePerMonth: 1800,
    location: 'Los Angeles',
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
    ],
    features: ['Traction Control', 'Quick Shifter', 'Launch Control', 'Slide Control', 'Wheelie Control'],
    rating: 4.8,
    reviews: 34,
    available: true,
    sellerId: '2',
    description: 'High-performance superbike for adrenaline seekers.',
    mileage: 14,
    engineSize: '998cc',
    color: 'Team Yamaha Blue',
    approved: true,
  },
  {
    id: '9',
    name: 'Audi Q7 2023',
    brand: 'Audi',
    model: 'Q7',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 7,
    pricePerDay: 110,
    pricePerWeek: 750,
    pricePerMonth: 3000,
    location: 'Miami',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    ],
    features: ['Virtual Cockpit', 'Matrix LED', 'Air Suspension', 'Bang & Olufsen', 'Quattro AWD'],
    rating: 4.6,
    reviews: 67,
    available: true,
    sellerId: '2',
    description: 'Premium SUV combining luxury, technology, and performance.',
    mileage: 20,
    engineSize: '3.0L TFSI',
    color: 'Glacier White',
    approved: true,
  },
  {
    id: '10',
    name: 'Chevrolet Corvette 2023',
    brand: 'Chevrolet',
    model: 'Corvette',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 2,
    pricePerDay: 180,
    pricePerWeek: 1200,
    pricePerMonth: 4800,
    location: 'Miami',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop',
    ],
    features: ['Mid-Engine', 'Performance Data Recorder', 'Magnetic Ride Control', 'Bose Audio', 'Carbon Fiber'],
    rating: 4.9,
    reviews: 45,
    available: true,
    sellerId: '2',
    description: 'America\'s supercar with mid-engine design and incredible performance.',
    mileage: 15,
    engineSize: '6.2L V8',
    color: 'Torch Red',
    approved: true,
  },
  {
    id: '11',
    name: 'Kawasaki Ninja ZX-10R',
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 80,
    pricePerWeek: 520,
    pricePerMonth: 2000,
    location: 'Chicago',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
    ],
    features: ['KTRC', 'KLCM', 'KQSS', 'Ohlins Suspension', 'Brembo Brakes'],
    rating: 4.7,
    reviews: 28,
    available: true,
    sellerId: '2',
    description: 'Track-focused superbike with race-proven technology.',
    mileage: 13,
    engineSize: '998cc',
    color: 'Lime Green',
    approved: true,
  },
  {
    id: '12',
    name: 'Range Rover Evoque 2023',
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    pricePerDay: 105,
    pricePerWeek: 700,
    pricePerMonth: 2800,
    location: 'San Francisco',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
    ],
    features: ['Terrain Response', 'ClearSight', 'Meridian Audio', 'Pivi Pro', 'All-Wheel Drive'],
    rating: 4.5,
    reviews: 52,
    available: true,
    sellerId: '2',
    description: 'Compact luxury SUV with distinctive design and capability.',
    mileage: 21,
    engineSize: '2.0L Turbo',
    color: 'Narvik Black',
    approved: true,
  },
  {
    id: '13',
    name: 'Porsche 911 Carrera 2023',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 4,
    pricePerDay: 200,
    pricePerWeek: 1350,
    pricePerMonth: 5400,
    location: 'Los Angeles',
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    ],
    features: ['PDK Transmission', 'Sport Chrono', 'PASM', 'Porsche Communication', 'Sport Exhaust'],
    rating: 4.9,
    reviews: 38,
    available: true,
    sellerId: '2',
    description: 'Legendary sports car icon with timeless design and performance.',
    mileage: 18,
    engineSize: '3.0L Twin-Turbo',
    color: 'Guards Red',
    approved: true,
  },
  {
    id: '14',
    name: 'Ducati Panigale V4',
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 90,
    pricePerWeek: 600,
    pricePerMonth: 2300,
    location: 'Las Vegas',
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    ],
    features: ['Desmodromic Valves', 'Cornering ABS', 'DTC EVO', 'DWC EVO', 'Öhlins Suspension'],
    rating: 4.8,
    reviews: 31,
    available: true,
    sellerId: '2',
    description: 'Italian superbike masterpiece with V4 engine excellence.',
    mileage: 12,
    engineSize: '1103cc V4',
    color: 'Ducati Red',
    approved: true,
  },
  {
    id: '15',
    name: 'Jeep Wrangler Unlimited 2023',
    brand: 'Jeep',
    model: 'Wrangler Unlimited',
    year: 2023,
    type: 'car',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 5,
    pricePerDay: 70,
    pricePerWeek: 450,
    pricePerMonth: 1800,
    location: 'Denver',
    images: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop',
    ],
    features: ['4x4 Capability', 'Removable Doors', 'Fold-Down Windshield', 'Rock Rails', 'Skid Plates'],
    rating: 4.4,
    reviews: 92,
    available: true,
    sellerId: '2',
    description: 'Ultimate off-road adventure vehicle with iconic design.',
    mileage: 18,
    engineSize: '3.6L V6',
    color: 'Bright White',
    approved: true,
  },
  {
    id: '16',
    name: 'Lexus RX 350 2023',
    brand: 'Lexus',
    model: 'RX 350',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    pricePerDay: 90,
    pricePerWeek: 600,
    pricePerMonth: 2400,
    location: 'Seattle',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop',
    ],
    features: ['Lexus Safety System', 'Mark Levinson Audio', 'Panoramic Roof', 'Heated/Cooled Seats', 'Wireless Charging'],
    rating: 4.6,
    reviews: 78,
    available: true,
    sellerId: '2',
    description: 'Refined luxury SUV with exceptional comfort and reliability.',
    mileage: 23,
    engineSize: '3.5L V6',
    color: 'Atomic Silver',
    approved: true,
  },
  {
    id: '17',
    name: 'Honda CBR1000RR-R',
    brand: 'Honda',
    model: 'CBR1000RR-R',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 85,
    pricePerWeek: 550,
    pricePerMonth: 2100,
    location: 'Austin',
    images: [
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
    ],
    features: ['Honda Selectable Torque Control', 'Wheelie Control', 'Launch Control', 'Öhlins Suspension', 'Brembo Brakes'],
    rating: 4.7,
    reviews: 26,
    available: true,
    sellerId: '2',
    description: 'Track-bred superbike with MotoGP-derived technology.',
    mileage: 13,
    engineSize: '999cc',
    color: 'Grand Prix Red',
    approved: true,
  },
  {
    id: '18',
    name: 'Volkswagen Golf GTI 2023',
    brand: 'Volkswagen',
    model: 'Golf GTI',
    year: 2023,
    type: 'car',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 5,
    pricePerDay: 55,
    pricePerWeek: 350,
    pricePerMonth: 1400,
    location: 'Portland',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=600&fit=crop',
    ],
    features: ['Turbo Engine', 'Sport Suspension', 'Performance Brakes', 'Digital Cockpit', 'Plaid Seats'],
    rating: 4.5,
    reviews: 64,
    available: true,
    sellerId: '2',
    description: 'Hot hatch legend with perfect balance of performance and practicality.',
    mileage: 24,
    engineSize: '2.0L Turbo',
    color: 'Tornado Red',
    approved: true,
  },
  {
    id: '19',
    name: 'Cadillac Escalade 2023',
    brand: 'Cadillac',
    model: 'Escalade',
    year: 2023,
    type: 'luxury',
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 8,
    pricePerDay: 140,
    pricePerWeek: 950,
    pricePerMonth: 3800,
    location: 'Dallas',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606016159991-8b5d5c6c0e7b?w=800&h=600&fit=crop',
    ],
    features: ['38-inch Curved OLED', 'Super Cruise', 'AKG Audio', 'Magnetic Ride Control', 'Night Vision'],
    rating: 4.7,
    reviews: 56,
    available: true,
    sellerId: '2',
    description: 'Full-size luxury SUV with commanding presence and advanced technology.',
    mileage: 16,
    engineSize: '6.2L V8',
    color: 'Shadow Metallic',
    approved: true,
  },
  {
    id: '20',
    name: 'Suzuki GSX-R1000R',
    brand: 'Suzuki',
    model: 'GSX-R1000R',
    year: 2023,
    type: 'bike',
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    pricePerDay: 78,
    pricePerWeek: 500,
    pricePerMonth: 1900,
    location: 'Phoenix',
    images: [
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop',
    ],
    features: ['Motion Track Brake System', 'Launch Control', 'Suzuki Drive Mode Selector', 'Showa Suspension', 'Brembo Brakes'],
    rating: 4.6,
    reviews: 33,
    available: true,
    sellerId: '2',
    description: 'Pure-bred racing machine with legendary GSX-R heritage.',
    mileage: 14,
    engineSize: '999cc',
    color: 'Metallic Triton Blue',
    approved: true,
  },
];

const VehicleContext = createContext<{
  state: VehicleState;
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  updateVehicle: (vehicle: Vehicle) => void;
  deleteVehicle: (id: string) => void;
  bookVehicle: (booking: Omit<Booking, 'id'>) => void;
  addToWishlist: (vehicleId: string) => void;
  removeFromWishlist: (vehicleId: string) => void;
  getUserBookings: (userId: string) => Booking[];
  getSellerVehicles: (sellerId: string) => Vehicle[];
} | null>(null);

function vehicleReducer(state: VehicleState, action: VehicleAction): VehicleState {
  switch (action.type) {
    case 'SET_VEHICLES':
      return { ...state, vehicles: action.payload };
    case 'ADD_VEHICLE':
      return { ...state, vehicles: [...state.vehicles, action.payload] };
    case 'UPDATE_VEHICLE':
      return {
        ...state,
        vehicles: state.vehicles.map(v => v.id === action.payload.id ? action.payload : v)
      };
    case 'DELETE_VEHICLE':
      return {
        ...state,
        vehicles: state.vehicles.filter(v => v.id !== action.payload)
      };
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload] };
    case 'UPDATE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.map(b => b.id === action.payload.id ? action.payload : b)
      };
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(id => id !== action.payload) };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(vehicleReducer, initialState);

  useEffect(() => {
    // Initialize with mock data
    dispatch({ type: 'SET_VEHICLES', payload: mockVehicles });
    
    // Load saved wishlist
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      JSON.parse(savedWishlist).forEach((id: string) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: id });
      });
    }
  }, []);

  const addVehicle = (vehicleData: Omit<Vehicle, 'id'>) => {
    const newVehicle: Vehicle = {
      ...vehicleData,
      id: Date.now().toString(),
    };
    dispatch({ type: 'ADD_VEHICLE', payload: newVehicle });
  };

  const updateVehicle = (vehicle: Vehicle) => {
    dispatch({ type: 'UPDATE_VEHICLE', payload: vehicle });
  };

  const deleteVehicle = (id: string) => {
    dispatch({ type: 'DELETE_VEHICLE', payload: id });
  };

  const bookVehicle = (bookingData: Omit<Booking, 'id'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
    };
    dispatch({ type: 'ADD_BOOKING', payload: newBooking });
  };

  const addToWishlist = (vehicleId: string) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: vehicleId });
    const updatedWishlist = [...state.wishlist, vehicleId];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (vehicleId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: vehicleId });
    const updatedWishlist = state.wishlist.filter(id => id !== vehicleId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const getUserBookings = (userId: string) => {
    return state.bookings.filter(booking => booking.userId === userId);
  };

  const getSellerVehicles = (sellerId: string) => {
    return state.vehicles.filter(vehicle => vehicle.sellerId === sellerId);
  };

  return (
    <VehicleContext.Provider value={{
      state,
      addVehicle,
      updateVehicle,
      deleteVehicle,
      bookVehicle,
      addToWishlist,
      removeFromWishlist,
      getUserBookings,
      getSellerVehicles,
    }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle() {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
}