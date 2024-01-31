import { create } from 'zustand'
import {createBearSlice} from './persistSlice'
import {createGameSlice} from './gameSlice'
import { persist, createJSONStorage } from 'zustand/middleware'

export const usePersistStore = create(
    persist(
      (...a) => ({
        ...createBearSlice(...a),
        ...createGameSlice(...a),
      }),
      { name: 'bound-store' },
    ),
  )