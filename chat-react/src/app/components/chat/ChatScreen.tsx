import React from 'react';
import {useForm} from 'react-hook-form';
import chatFormInputType from '../../types/chat-form-input';
import useChat from '../../hooks/useChat';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    message: yup.string().required().min(3),
});

const ChatScreen = () => {

    const {register, handleSubmit, errors, reset} = useForm<chatFormInputType>({
        resolver: yupResolver(schema),
    });

    const {sendMessage, chatMessages} = useChat('1');


    const onSubmit = (data: chatFormInputType) => {
        sendMessage(data.message);
        reset();
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                    <div className="col-sm-6 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <input
                                        type="text"
                                        name="message"
                                        className="form-control"
                                        autoComplete="off"
                                        ref={register}
                                    />
                                    <small className="text-danger">
                                        {errors.message?.message}
                                    </small>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <button
                                        className="btn btn-sm btn-info btn-block"
                                        type="submit"
                                    >
                                        hola
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <ul>
                    <li>
                        {
                            chatMessages.map(
                                (msg, index) => (
                                    <li
                                        key={index}
                                    >
                                        <b>{msg.senderId}</b>: {msg.message}
                                    </li>
                                )
                            )
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ChatScreen;
