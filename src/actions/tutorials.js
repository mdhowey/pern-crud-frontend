import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS
} from "./types";

import TutorialDataService from "../services/tutorial.service";

// POST new tutorial to front end
export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ title, description });

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// GET all tutorials for front end
export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// PUT update tutorial for front end
export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await TutorialDataService.update(id, data);

    dispatch({
      type: UPDATE_TUTORIAL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// DELETE tutorial by ID for front end
export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await TutorialDataService.delete(id);

    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

// DELETE all tutorials for front end
export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_TUTORIALS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// GET tutorials by title for front end
export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const res = await TutorialDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};