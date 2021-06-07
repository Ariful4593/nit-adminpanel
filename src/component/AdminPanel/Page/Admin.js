import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faUser, faUserFriends, faDollarSign } from '@fortawesome/free-solid-svg-icons';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CountUp from 'react-countup';
const headerData = [
    { id: 1, title: 'Student', subtitle: '3000', icon: faUserGraduate, font: '#3CB878', bgColor: '#D1F3E0' },
    { id: 2, title: 'Teachers', subtitle: '2250', icon: faUser, font: '#3F7AFC', bgColor: '#E1F1FF' },
    { id: 3, title: 'Parents', subtitle: '5690', icon: faUserFriends, font: '#FFA536', bgColor: '#FFF2D8' },
    { id: 4, title: 'Earnings', subtitle: '193000', icon: faDollarSign, font: '#FFEAEA', bgColor: '#FF8383' },
]
const Admin = () => {
    // const handleOnDragEnd = (result) =>{
    //     if(!result.destination) return;
    //     const items = Array.from(characters);
    //     const [recordedItem] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, recordedItem)
    //     setCharacters(items)
    //     // console.log(result)
    // }
    return (
        // <div  className="drag col-md-3 mt-4">
        //     <DragDropContext onDragEnd={handleOnDragEnd} >
        //         <Droppable droppableId="characters">
        //             {
        //                 provided => (
        //                     <div  {...provided.droppableProps} ref={provided.innerRef}>
        //                         {
        //                             characters.map((item, index) => {
        //                                 return (
        //                                     <Draggable key={item.id} draggableId={item.title} index={index}>
        //                                         {
        //                                             (provided) => (
        //                                                 <div className="" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
        //                                                     <div className="row shadow p-3 ml-1 bg-white rounded">
        //                                                         <div className="col-md-6 p-0" style={{ fontSize: '70px', textAlign: 'center', borderRadius: '60px', backgroundColor: `${item.bgColor}`, color: `${item.font}` }}>
        //                                                             <FontAwesomeIcon style={{ fontSize: '45px', marginBottom: '8px' }} icon={item.icon} />
        //                                                         </div>
        //                                                         <div className="col-md-6" style={{ padding: '25px 0px 0px 15px' }}>
        //                                                             <h5 className="card-title">{item.title}</h5>
        //                                                             <h4 className="card-subtitle mb-2 text-muted">{<CountUp start={1} end={parseInt(item.subtitle)} />}</h4>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             )
        //                                         }

        //                                     </Draggable>
        //                                 )
        //                             })
        //                         }
        //                         {provided.placeholder}
        //                     </div>
        //                 )
        //             }

        //         </Droppable>
        //     </DragDropContext>
        // </div>
        <>
            {
                headerData.map(item => {
                    return (
                        <div className="col-md-3 mt-4" key={item.id}>
                            <div className="row shadow p-3 ml-1 bg-white rounded">
                                <div className="col-md-6 p-0" style={{ fontSize: '70px', textAlign: 'center', borderRadius: '60px', backgroundColor: `${item.bgColor}`, color: `${item.font}` }}>
                                    <FontAwesomeIcon style={{ fontSize: '45px', marginBottom: '8px' }} icon={item.icon} />
                                </div>
                                <div className="col-md-6" style={{ padding: '25px 0px 0px 15px' }}>
                                    <h5 className="card-title">{item.title}</h5>
                                    <h4 className="card-subtitle mb-2 text-muted">{<CountUp start={1} end={parseInt(item.subtitle)} /> }</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            

        </>

    );
};

export default Admin;