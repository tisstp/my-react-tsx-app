import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import rootReducer from './root-reducers';


export default function configureAppStore() {
  const storeConfig: ConfigureStoreOptions = {
    reducer: rootReducer
  };

  return configureStore(storeConfig);
}
