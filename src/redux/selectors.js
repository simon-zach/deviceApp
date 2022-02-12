import { createSelector } from "reselect";

export const data = (state) => state.devices.data

export const getAllDevicesSelector = createSelector(
    data,
    data => data
  )