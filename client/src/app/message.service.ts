import {Injectable} from "@angular/core"


@Inject()
export class MessageService {
	messages: string[] = []

	add(message: string){
		this.messages.push(message)
	}

	clear(){
		this.messages = []
	}
}