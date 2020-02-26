import React from 'react';

export const changePicture = (direction, elem) => {
    if (direction === "R") {
        let first = elem.state.ListImage[0];
        let NewList = [];
        for (let index = 1; index < elem.state.ListImage.length; index++) {
            NewList.push(elem.state.ListImage[index]);
        }
        NewList.push(first);
        elem.setState({
            ListImage: NewList,
        });
    } else if (direction === "L") {
        let last = elem.state.ListImage[elem.state.ListImage.length-1];
        let NewList = [last];
        for (let index = 0; index < elem.state.ListImage.length-1; index++) {
            NewList.push(elem.state.ListImage[index]);
        }
        elem.setState({
            ListImage: NewList,
        });
    }
}