import {useEffect, useRef, useState} from 'react';
import * as io from 'socket.io-client';
import {environment} from '../../environment/config';

type messageBody = { message: string, senderId: string };

const useChat = (room: string) => {

    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [messages, setMessages] = useState<messageBody[]>([]);
    const [messagesExt, setExtMessages] = useState<messageBody[]>([]);
    const serverGateway = useRef<SocketIOClient.Socket>();

    useEffect(
        () => {
            // @ts-ignore
            serverGateway.current = io(environment.urlGateway);

            const server = serverGateway.current as SocketIOClient.Socket;

            server.on(
                'connect',
                () => {
                    setIsConnected(true);
                }
            );

            server.on(
                'disconnect',
                () => {
                    setIsConnected(false);
                }
            );


            server.on(
                'seEmitioMensaje',
                (data: messageBody) => {
                    setExtMessages(msg => [data, ...msg]);
                }
            );

            server.emit(
                'unirseASala',
                room,
                (res: string) => {
                    console.log(res);
                }
            );

            return () => {
                server.emit(
                    'dejarSala',
                    room,
                    (res: string) => {
                        console.log(res);
                    }
                )
                server.disconnect();
            }

        }, [room]
    );

    const sendMessage = (msg: string) => {
        serverGateway.current?.emit(
            'enviarMensaje',
            {
                message: msg,
                room,
                senderId: serverGateway.current?.id,
            },
            (data: messageBody) => {
                setMessages(msg => [data, ...msg]);
            }
        );
    }

    return {
        isConnected,
        chatMessages: [...messages, ...messagesExt],
        sendMessage,
    }
}

export default useChat;
