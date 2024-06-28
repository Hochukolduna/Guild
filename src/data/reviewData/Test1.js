import { useState } from 'react';
import Modal from "/workspaces/Guild/src/components/modal/modal.js";
import Rev from '/workspaces/Guild/src/data/reviewData/reviewData.js'
import "/workspaces/Guild/src/components/modal/modal.css";

export default () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalParams, setModalParams] = useState({ imageRew: '', name: '', obzor: '', grade: '', who: '', date: '' });
    const handleModalOpen = (imageREW, name, obzor, grade, who, date) => {
        setModalParams({ imageREW, name, obzor, grade, who, date });
        setModalActive(true);
    };
    return (
        <div>
            <Rev/>
        <Modal active = {modalActive} setActive = {setModalActive} image={modalParams.imageREW} name={modalParams.name} obzor={modalParams.obzor} grade={modalParams.grade} who={modalParams.who} date={modalParams.date}/>
    </div>
)
}
