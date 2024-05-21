import axios from "axios";
import { GET_BOOKING_API_ROUTE, REMOVE_BOOKING_API_ROUTE,  SAVE_BOOKING_API_ROUTE,  UPDATE_BOOKING_API_ROUTE } from "../constants/ApiConstants";

export function saveBooking(bookingData){
    return axios.post(SAVE_BOOKING_API_ROUTE,bookingData)
}

export function fetchAllBooking(){
    return axios.get(GET_BOOKING_API_ROUTE);
}

export function removeBooking(bookId){
    return axios.delete(`${REMOVE_BOOKING_API_ROUTE}/${bookId}`);
}

export function fetchBookingtById(bookId){
    return axios.get(`${GET_BOOKING_API_ROUTE}/${bookId}`);
}

export function updateBooking(bookingData){
    return axios.put(`${UPDATE_BOOKING_API_ROUTE}/${bookingData.id}`, bookingData);
} 