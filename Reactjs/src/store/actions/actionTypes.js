const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //topic
    ADD_TOPIC_SUCCESS: 'ADD_TOPIC_SUCCESS',

    CREATE_TOPIC_SUCCESS: 'CREATE_TOPIC_SUCCESS',
    CREATE_TOPIC_FAILD: 'CREATE_TOPIC_FAILD',

    EDIT_TOPIC_SUCCESS: 'EDIT_TOPIC_SUCCESS',
    EDIT_TOPIC_FAILD: 'EDIT_TOPIC_FAILD',

    DELETE_TOPIC_SUCCESS: 'DELETE_TOPIC_SUCCESS',
    DELETE_TOPIC_FAILD: 'DELETE_TOPIC_FAILD',

    FETCH_ALL_TOPICS_SUCCESS: 'FETCH_ALL_TOPICS_SUCCESS',
    FETCH_ALL_TOPICS_FAILD: 'FETCH_ALL_TOPICS_FAILD',

    FETCH_TOP_TOPICS_SUCCESS: 'FETCH_TOP_TOPICS_SUCCESS',
    FETCH_TOP_TOPICS_FAILD: 'FETCH_TOP_TOPICS_FAILD',


    //lesson list
    ADD_LESSON_LIST_SUCCESS: 'ADD_LESSON_LIST_SUCCESS',

    CREATE_LESSON_LIST_SUCCESS: 'CREATE_LESSON_LIST_SUCCESS',
    CREATE_LESSON_LIST_FAILD: 'CREATE_LESSON_LIST_FAILD',
    
    EDIT_LESSON_LIST_SUCCESS: 'EDIT_LESSON_LIST_SUCCESS',
    EDIT_LESSON_LIST_FAILD: 'EDIT_LESSON_LIST_FAILD',
    
    DELETE_LESSON_LIST_SUCCESS: 'DELETE_LESSON_LIST_SUCCESS',
    DELETE_LESSON_LIST_FAILD: 'DELETE_LESSON_LIST_FAILD',
    
    FETCH_ALL_LESSON_LISTS_SUCCESS: 'FETCH_ALL_LESSON_LISTS_SUCCESS',
    FETCH_ALL_LESSON_LISTS_FAILD: 'FETCH_ALL_LESSON_LISTS_FAILD',
    
    FETCH_TOP_LESSON_LISTS_SUCCESS: 'FETCH_TOP_LESSON_LISTS_SUCCESS',
    FETCH_TOP_LESSON_LISTS_FAILD: 'FETCH_TOP_LESSON_LISTS_FAILD',

    //lesson
    ADD_LESSON_SUCCESS: 'ADD_LESSON_SUCCESS',

    CREATE_LESSON_SUCCESS: 'CREATE_LESSON_SUCCESS',
    CREATE_LESSON_FAILD: 'CREATE_LESSON_FAILD',
    
    EDIT_LESSON_SUCCESS: 'EDIT_LESSON_SUCCESS',
    EDIT_LESSON_FAILD: 'EDIT_LESSON_FAILD',
    
    DELETE_LESSON_SUCCESS: 'DELETE_LESSON_SUCCESS',
    DELETE_LESSON_FAILD: 'DELETE_LESSON_FAILD',
    
    FETCH_ALL_LESSONS_SUCCESS: 'FETCH_ALL_LESSONS_SUCCESS',
    FETCH_ALL_LESSONS_FAILD: 'FETCH_ALL_LESSONS_FAILD',
    
    FETCH_TOP_LESSONS_SUCCESS: 'FETCH_TOP_LESSONS_SUCCESS',
    FETCH_TOP_LESSONS_FAILD: 'FETCH_TOP_LESSONS_FAILD',


    //vocab
    ADD_VOCAB_SUCCESS: 'ADD_VOCAB_SUCCESS',

    CREATE_VOCAB_SUCCESS: 'CREATE_VOCAB_SUCCESS',
    CREATE_VOCAB_FAILD: 'CREATE_VOCAB_FAILD',
    
    EDIT_VOCAB_SUCCESS: 'EDIT_VOCAB_SUCCESS',
    EDIT_VOCAB_FAILD: 'EDIT_VOCAB_FAILD',
    
    DELETE_VOCAB_SUCCESS: 'DELETE_VOCAB_SUCCESS',
    DELETE_VOCAB_FAILD: 'DELETE_VOCAB_FAILD',
    
    FETCH_ALL_VOCABS_SUCCESS: 'FETCH_ALL_VOCABS_SUCCESS',
    FETCH_ALL_VOCABS_FAILD: 'FETCH_ALL_VOCABS_FAILD',
    
    FETCH_TOP_VOCABS_SUCCESS: 'FETCH_TOP_VOCABS_SUCCESS',
    FETCH_TOP_VOCABS_FAILD: 'FETCH_TOP_VOCABS_FAILD',

    //lesson item
    ADD_LESSON_ITEM_SUCCESS: 'ADD_LESSON_ITEM_SUCCESS',

    CREATE_LESSON_ITEM_SUCCESS: 'CREATE_LESSON_ITEM_SUCCESS',
    CREATE_LESSON_ITEM_FAILD: 'CREATE_LESSON_ITEM_FAILD',
    
    EDIT_LESSON_ITEM_SUCCESS: 'EDIT_LESSON_ITEM_SUCCESS',
    EDIT_LESSON_ITEM_FAILD: 'EDIT_LESSON_ITEM_FAILD',

    DELETE_LESSON_ITEM_SUCCESS: 'DELETE_LESSON_ITEM_SUCCESS',
    DELETE_LESSON_ITEM_FAILD: 'DELETE_LESSON_ITEM_FAILD',
    
    FETCH_ALL_LESSON_ITEMS_SUCCESS: 'FETCH_ALL_LESSON_ITEMS_SUCCESS',
    FETCH_ALL_LESSON_ITEMS_FAILD: 'FETCH_ALL_LESSON_ITEMS_FAILD',
    
    FETCH_TOP_LESSON_ITEMS_SUCCESS: 'FETCH_TOP_LESSON_ITEMS_SUCCESS',
    FETCH_TOP_LESSON_ITEMS_FAILD: 'FETCH_TOP_LESSON_ITEMS_FAILD',


    //question
    ADD_QUESTION_SUCCESS: 'ADD_QUESTION_SUCCESS',

    CREATE_QUESTION_SUCCESS: 'CREATE_QUESTION_SUCCESS',
    CREATE_QUESTION_FAILD: 'CREATE_QUESTION_FAILD',
    
    EDIT_QUESTION_SUCCESS: 'EDIT_QUESTION_SUCCESS',
    EDIT_QUESTION_FAILD: 'EDIT_QUESTION_FAILD',
    
    DELETE_QUESTION_SUCCESS: 'DELETE_QUESTION_SUCCESS',
    DELETE_QUESTION_FAILD: 'DELETE_QUESTION_FAILD',
    
    FETCH_ALL_QUESTIONS_SUCCESS: 'FETCH_ALL_QUESTIONS_SUCCESS',
    FETCH_ALL_QUESTIONS_FAILD: 'FETCH_ALL_QUESTIONS_FAILD',
    
    FETCH_TOP_QUESTIONS_SUCCESS: 'FETCH_TOP_QUESTIONS_SUCCESS',
    FETCH_TOP_QUESTIONS_FAILD: 'FETCH_TOP_QUESTIONS_FAILD',

    CREATE_CHOISE_ANSWER_SUCCESS: 'CREATE_CHOISE_ANSWER_SUCCESS',
    CREATE_CHOISE_ANSWER_FAILD: 'CREATE_CHOISE_ANSWER_FAILD',

    //search
    FETCH_ALL_SEARCH_VOCABS_FAILD: 'FETCH_ALL_SEARCH_VOCABS_FAILD',
    FETCH_ALL_SEARCH_VOCABS_SUCCESS: 'FETCH_ALL_SEARCH_VOCABS_SUCCESS',

    //search topic
    FETCH_ALL_SEARCH_LESSON_LISTS_SUCCESS: 'FETCH_ALL_SEARCH_LESSON_LISTS_SUCCESS',
    FETCH_ALL_SEARCH_LESSON_LISTS_FAILD: 'FETCH_ALL_SEARCH_LESSON_LISTS_FAILD',

    //search word meaning to vocab
    FETCH_ALL_WORD_MEANING_VOCABS_SUCCESS: 'FETCH_ALL_WORD_MEANING_VOCABS_SUCCESS',
    FETCH_ALL_WORD_MEANING_VOCABS_FAILD: 'FETCH_ALL_WORD_MEANING_VOCABS_FAILD',


    // admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILD: 'FETCH_GENDER_FAILD',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILD: 'FETCH_ROLE_FAILD',

    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILD: 'CREATE_USER_FAILD',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILD: 'EDIT_USER_FAILD',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILD: 'DELETE_USER_FAILD',

    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILD: 'FETCH_ALL_USERS_FAILD',


})

export default actionTypes;