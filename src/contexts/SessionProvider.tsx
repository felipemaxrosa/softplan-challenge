import { createContext, PropsWithChildren, useContext } from 'react';
import { User } from '../models/interfaces';
import { useAppSelector } from '../store';
import { selectActiveUser } from '../store/selectors';

interface SessionContextData {
  activeUser?: User;
}

export const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData
);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const activeUser = useAppSelector(selectActiveUser);

  const providerValue = {
    activeUser,
  };

  return (
    <SessionContext.Provider value={providerValue}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
