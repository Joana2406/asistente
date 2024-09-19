import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define el tipo de la configuración de voz e idioma
interface VoiceSettings {
  language: string;
  voice: string;
}

// Define el tipo del contexto
interface VoiceSettingsContextType {
  settings: VoiceSettings;
  setSettings: (settings: VoiceSettings) => void;
}

// Crea el contexto con valores predeterminados
const VoiceSettingsContext = createContext<VoiceSettingsContextType | undefined>(undefined);

export const VoiceSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<VoiceSettings>({ language: 'en', voice: 'default' });

  return (
    <VoiceSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </VoiceSettingsContext.Provider>
  );
};

// Hook para usar el contexto
export const useVoiceSettings = (): VoiceSettingsContextType => {
  const context = useContext(VoiceSettingsContext);
  if (context === undefined) {
    throw new Error('useVoiceSettings must be used within a VoiceSettingsProvider');
  }
  return context;
};
