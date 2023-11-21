import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface EventData {
  eventName: string;
  attendees: number;
  price: number;
  type: string;
}

type UseEventSelectionHook = (
  initialEvent: EventData,
) => [EventData, Dispatch<SetStateAction<EventData>>];

const useEventSelection: UseEventSelectionHook = (initialEvent) => {
  const [selectedEvent, setSelectedEvent] = useState<EventData>(initialEvent);

  // Cargar datos desde el localStorage al inicio
  useEffect(() => {
    const storedEvent = localStorage.getItem('selectedEvent');
    if (storedEvent) {
      setSelectedEvent(JSON.parse(storedEvent));
    }
  }, []);

  // Guardar en el localStorage cuando cambia el evento seleccionado
  useEffect(() => {
    localStorage.setItem('selectedEvent', JSON.stringify(selectedEvent));
  }, [selectedEvent]);

  return [selectedEvent, setSelectedEvent];
};

export default useEventSelection;
