const logger = ({ getState }) => next => action => {
    console.log(`ACTION: ${action.type}`);
    console.log('STATE', getState());
    next(action);
};

export {
    logger
};
