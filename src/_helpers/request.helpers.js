import {Platform} from 'react-native';
import {getStorageValue} from "./storage.helpers";
const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export function get(url, headers) {
  return getStorageValue('AUTH_TOKEN').then(token =>  {
    headers = Object.assign({}, HEADERS, headers);
    if(token) {
      headers = Object.assign(headers, {
          'x-access-token': token
        });
    }
    return fetch(url, {headers})
      .then((res) => {
        const statusCode = res.status;
        const data = res.json();
        return Promise.all([statusCode, data]);
      });
  })
}

export function post(url, body, headers) {
  return getStorageValue('AUTH_TOKEN').then(token =>  {
        headers = Object.assign({}, HEADERS, headers);
        if(token) {
          console.log('HDV token post: ', token);
          headers = Object.assign(headers, {
            'x-access-token': token
          });
        }
        return fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: new Headers(headers)
        }).then((res) => {
          const statusCode = res.status;
          const data = res.json();
          return Promise.all([statusCode, data]);
        });
  })
}

export function put(url, body, headers) {
    headers = Object.assign({}, HEADERS, headers);
    return new Promise((resolve, reject) => {
        ajax.put(url, body, headers).subscribe(response => {
            return resolve(response.response);
        }, err => {
            return reject({
                status: err.xhr.status,
                response: err.xhr.response
            });
        });
    });
}

export function patch(url, body, headers) {
    headers = Object.assign({}, HEADERS, headers);
    return new Promise((resolve, reject) => {
        ajax.patch(url, body, headers).subscribe(response => {
            return resolve(response.response);
        }, err => {
            return reject({
                status: err.xhr.status,
                response: err.xhr.response
            });
        });
    });
}

export function remove(url, headers) {
    headers = Object.assign({}, HEADERS, headers);
    return fetch(url, {
        method: 'delete',
        headers: new Headers(headers)
    }).then((res) => {
        const statusCode = res.status;
        const data = res.json();
        return Promise.all([statusCode, data]);
    });
}

export async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (location) => {
                // latitude: location.coords.latitude,
                // longitude: location.coords.longitude
                //latitude: 6.951304,
                // longitude: 79.8752162
                resolve({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
            },
            (error) => {
                reject(error);
            },
            Platform.OS === 'android' ? null : {enableHighAccuracy: true, timeout: 100000, maximumAge: 1000}
        );

    });
}
