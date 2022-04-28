import { toast } from "react-toastify";
import actionTypes from './actionTypes';

import {createNewLessonListService,
    getAllLessonLists,
    deleteLessonListService,
    editLessonListService,
    getLessonListHomeService
} from '../../services/lessonListService';


//lesson list
export const createNewLessonList = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewLessonListService(data);
            if(res && res.errCode === 0){
                toast.success("Create a new lesson list succeed!")
                dispatch(saveLessonListSuccess())
            }else{
                dispatch(saveLessonListFailed());
            }
        } catch(e) {
            dispatch(saveLessonListFailed());
            console.log('saveLessonListFailed error', e)
        }
    }
}

export const saveLessonListSuccess = () => ({
    type: actionTypes.CREATE_LESSON_LIST_SUCCESS
})

export const saveLessonListFailed = () => ({
    type: actionTypes.CREATE_LESSON_LIST_FAILD
})

export const fetchAllLessonListsStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllLessonLists("ALL");
            console.log('check res: ', res)
            let res1 = await getLessonListHomeService('');
            console.log('check res1 get lesson list: ', res1)

            if(res && res.errCode === 0){
                dispatch(fetchAllLessonListsSuccess(res.lessonLists.reverse()))
            }else{
                toast.error("Fetch all lesson lists error!");
                dispatch(fetchAllLessonListsFailed());
            }
        } catch(e) {
            toast.error("Fetch all lesson lists error!");
            dispatch(fetchAllLessonListsFailed());
            console.log('fetchAllLessonListsStart error', e)
        }
    }
}

export const fetchAllLessonListsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_LESSON_LISTS_SUCCESS,
    lessonLists: data
})

export const fetchAllLessonListsFailed = () => ({
    type: actionTypes.FETCH_ALL_LESSON_LISTS_FAILD
})


export const deleteALessonList = (lessonListId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteLessonListService(lessonListId);
            if(res && res.errCode === 0){
                toast.success("Delete the lesson list succeed!")
                dispatch(deleteLessonListSuccess())
                dispatch(fetchAllLessonListsStart())
            }else{
                toast.error("Delete the lesson list error!")
                dispatch(deleteLessonListFailed());
            }
        } catch(e) {
            toast.error("Delete the lesson list error!")
            dispatch(deleteLessonListFailed());
            console.log('deleteLessonListFailed error', e)
        }
    }
}

export const deleteLessonListSuccess = () => ({
    type: actionTypes.FETCH_ALL_LESSON_LISTS_SUCCESS,
})

export const deleteLessonListFailed = () => ({
    type: actionTypes.FETCH_ALL_LESSON_LISTS_FAILD,
})

export const editALessonList = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editLessonListService(data);
            if(res && res.errCode === 0){
                toast.success("Update the lesson list succeed!")
                dispatch(editLessonListSuccess())
                dispatch(fetchAllLessonListsStart())
            }else{
                toast.error("Update the lesson list error!")
                dispatch(editLessonListFailed());
            }
        } catch(e) {
            toast.error("Update the lesson list error!")
            dispatch(editLessonListFailed());
            console.log('editLessonListFailed error', e)
        }
    }
}

export const editLessonListSuccess = () => ({
    type: actionTypes.EDIT_LESSON_LIST_SUCCESS,
})

export const editLessonListFailed = () => ({
    type: actionTypes.EDIT_LESSON_LIST_FAILD,
})


export const fetchTopLessonList = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getLessonListHomeService('');
            console.log('check res lesson list: ', res)
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_TOP_LESSON_LISTS_SUCCESS,
                    dataLessonLists: res.data
                })
            }else {
                dispatch({
                    type: actionTypes.FETCH_TOP_LESSON_LISTS_FAILD,
                })
            }

        } catch(e) {
            console.log('FETCH_TOP_LESSON_LISTS_FAILD: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_LESSON_LISTS_FAILD,
            })
        }
    }
}