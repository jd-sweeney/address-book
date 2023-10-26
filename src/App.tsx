import { useState } from 'react';
import { NextUIProvider, User as UserComponent } from '@nextui-org/react';

import SideBar from './components/SideBar';
import ActionsList from './components/shared/ActionsList';
import UserProfile from './components/UserProfile';
import Panel from './components/shared/Panel';

import useFetch from './hooks/useFetch';

import User from './types/User';

const App = () => {
  const [selectedItem, setSelectedItem] = useState<User | undefined>();

  const { data } = useFetch<User[]>('http://localhost:8080/api/people', []);

  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background h-[calc(100vh)] flex">
        <SideBar>
          <ActionsList<User[], User>
            list={data}
            Component={UserComponent}
            onSelect={(item) => setSelectedItem(item)}
            filterProp="name"
            sortProp="name"
          />
        </SideBar>
        <Panel>
          {selectedItem ? <UserProfile user={selectedItem} /> : <></>}
        </Panel>
      </main>
    </NextUIProvider>
  );
};

export default App;
