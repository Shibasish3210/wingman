import React, { useState, useEffect, useRef } from "react";
import Chat from "../../assets/header/chat.svg";
import Send from "../../assets/shared/send.svg";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState([]);
	const messagesEndRef = useRef(null);
	const [input, setInput] = useState("");

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	const addMessage = (sender, text) => {
		setMessages((prevMessages) => [
			...prevMessages,
			{ id: Date.now(), sender, text },
		]);
	};

	const handleUserMessage = async (text) => {
		addMessage("You", text);
		setIsLoading(true);
		try {
			const result = await model.generateContent(text);
			addMessage("Assistant", result.response.text());
		} catch (error) {
			console.error(error);
		}
		setIsLoading(false);
	};

	const handleEnterKey = (e) => {
		if (e.key === "Enter") {
			handleSend();
		}
	};
	const handleEscapeKey = (e) => {
		if (e.key === "Escape") {
			toggleChat();
		}
	};

	const handleSend = () => {
		if (input.trim() === "") {
			return;
		}
		handleUserMessage(input);
		setInput("");
	};

	useEffect(() => {
		window.addEventListener("keydown", handleEnterKey);
		return () => {
			window.removeEventListener("keydown", handleEnterKey);
			window.removeEventListener("keydown", handleEscapeKey);
		};
	}, []);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div>
			<button
				onKeyDown={handleEscapeKey}
				onMouseDown={toggleChat}
				className="fixed outline-none bottom-5 right-5 bg-blue-500 text-white rounded-full w-15 h-15 text-2xl cursor-pointer"
			>
				<img
					className="success-primary-filter w-14 h-14"
					src={Chat}
					alt="Chat"
				/>
			</button>
			{isOpen && (
				<div className="fixed p-4 z-10 bottom-24 right-5 w-80 h-100 border border-[#DCDFE4] rounded-lg shadow-2xl bg-success_light text-text_secondary flex flex-col">
					<h2 className="text-lg font-semibold text-success_dark m-2 border-b border-success_dark pb-2">
						Welcome to WingMan
					</h2>
					<div className="flex-col gap-4 flex p-2 overflow-y-scroll h-80 no-scrollbar">
						{messages.map((msg) => {
							const isUser =
								msg.sender === "You"
									? "text-right"
									: "text-left";
							return (
								<div
									key={msg.id}
									className={isUser + " w-full"}
								>
									<small className="text-text_primary text-[10px] ">
										{msg.sender}
									</small>
									<p className="rounded-md p-2 text-sm h-fit border border-[#DCDFE4] bg-[#FFF3C6] ">
										{msg.text}
									</p>
								</div>
							);
						})}
						{isLoading && (
							<div className="loadingMessage text-sm  rounded-md p-2">
								<small className="text-text_primary text-[10px] ">
									Assistant
								</small>
								<p className="rounded-md p-2 text-sm h-fit border border-[#DCDFE4] bg-[#FFF3C6] ">
									Thinking...
								</p>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>
					<div className="flex p-2">
						<input
							type="text"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
							className="flex-1 p-2 border border-[#DCDFE4] rounded outline-none ring ring-opacity-0 focus:ring focus:ring-opacity-100"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSend();
								} else if (e.key === "Escape") {
									toggleChat();
								}
							}}
						/>
						<button
							onClick={handleSend}
							className="p-2 ml-2 bg-success_primary rounded"
						>
							<img
								src={Send}
								className="w-8 h-8 success-dark-filter"
								alt="send"
							/>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatBot;
