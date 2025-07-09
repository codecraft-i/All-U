import React, { useState, useRef, useEffect } from 'react';
import './Contact.css'

// Davlatlar ro'yxati - bu arrayni backenddan olishni rejalashtiryapsiz
const PhoneNumberInput = ({ phone, setPhone }) => {
  const [countries, setCountries] = useState([]); // API'dan keladigan davlatlar
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const dropdownRef = useRef(null);

  // API orqali davlatlar ro'yxatini olish
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://stfconsulting.uz/site/api/contact-countries/');
        const data = await response.json();
        console.log(data); // Ma'lumotlarni tekshirib chiqing
        setCountries(data);
        setSelectedCountry(data[0]); // Dastlabki davlatni tanlash
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Qidiruvda faqat mos keluvchi davlatlarni ko'rsatish
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Davlatni tanlash
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setPhone(`${country.code}`);
    setSearchQuery('');
    setIsDropdownOpen(false);
    setError('');
  };

  // Telefon raqamini maskalash
  const applyMask = (value, mask) => {
    if (!mask) {
      console.error('Mask is undefined or missing for the selected country');
      return value; // Agar mask bo'lmasa, raqamni bo'lib chiqmasdan qaytaring
    }

    let digits = value.replace(/\D/g, '');
    let masked = '';
    let digitIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '#') {
        if (digitIndex < digits.length) {
          masked += digits[digitIndex];
          digitIndex++;
        }
      } else {
        if (digitIndex < digits.length) {
          masked += mask[i];
        }
      }
    }

    return masked;
  };

  // Telefon raqamini o'zgartirish
  const handlePhoneChange = (e) => {
    const inputDigits = e.target.value.replace(/\D/g, '');
    const maxLength = selectedCountry ? selectedCountry.length : 0;

    if (inputDigits.length > maxLength) return;

    if (inputDigits.length < maxLength) {
      setError(`Raqam soni kam: ${maxLength - inputDigits.length} ta raqam yetmayapti`);
    } else {
      setError('');
    }

    const mask = selectedCountry?.mask || '##########'; // Default mask if missing
    const formatted = applyMask(inputDigits, mask);
    setPhone(`${selectedCountry?.code}${inputDigits}`);
  };

  // Dropdownni ochish/yopish
  const handleClickCountryList = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Telefon raqamini ko'rsatish
  const displayPhone = () => {
    const raw = phone.replace(selectedCountry?.code, '');
    const mask = selectedCountry?.mask || '##########'; // Default mask if missing
    return applyMask(raw, mask);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!selectedCountry) {
    return <div>Loading...</div>; // Yoki loading komponenti ko'rsatish
  }

  return (
    <div>
      <div className="phone-container">
      <div className="selected-country" onClick={handleClickCountryList}>
        <img
          src={`https://flagcdn.com/w40/${selectedCountry.flag}.png`}
          alt="flag"
          className="phone-flag"
        />
        <span>{selectedCountry.code}</span>
      </div>

      <input
        type="text"
        value={displayPhone()}
        onChange={handlePhoneChange}
        placeholder={selectedCountry.mask.replace(/#/g, '0')}
      />

      {isDropdownOpen && (
        <div className="phone-dropdown" ref={dropdownRef}>
          {/* Qidiruv maydoni faqat dropdown ochiq bo'lsa ko'rsatiladi */}
          <input
            type="text"
            placeholder="Search country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="phone-search"
            autoFocus
          />

          {/* Filtrlash va dropdownda ko‘rsatilayotgan davlatlar */}
          {filteredCountries.map((country) => (
            <div
              key={country.code}
              className="phone-dropdown-item"
              onClick={() => handleSelectCountry(country)}
            >
              <img
                src={`https://flagcdn.com/w40/${country.flag}.png`}
                alt="flag"
                className="phone-flag"
              />
              <span>{country.name} ({country.code})</span>
            </div>
          ))}
        </div>
      )}
    </div>
    {error && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '4px' }}>{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
