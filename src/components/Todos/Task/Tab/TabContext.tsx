import { ReactNode, FC, createContext, useState } from "react";

interface ITabContextValue {
    value: string;
    onChangeTab: (value: string) => void;
}

const initialValueContext: ITabContextValue = {
    value: '',
    onChangeTab: () => { } 
};

const TabContext = createContext<ITabContextValue>(initialValueContext);

interface ITabContextProps {
    children: ReactNode;
}

const TabProvider: FC<ITabContextProps> = ({ children }) => {
    const [value, setValue] = useState<string>('');

    const onChangeTab = (tabName: string) => {
        setValue(tabName);
    };

    const valueCtx: ITabContextValue = {
        value,
        onChangeTab
    };

    return (
        <TabContext.Provider value={valueCtx}>
            {children}
        </TabContext.Provider>
    );
};

export { TabContext, TabProvider };
