import ResultCard from '../sub_components/Result_card';
import ResultContainer from '../sub_components/Result_container';
import categories from '../config/Categories';
import React from 'react';
function return_data(all_data){
    let category = categories[0];
    let all_jsx = all_data[category].items.map(single_song => {
        return <ResultCard data = {single_song} key = {single_song.uri}/>
    });
    return all_jsx;
}

export default return_data;