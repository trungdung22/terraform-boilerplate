import { SessionStatus } from "../common";

export interface SessionModel {
    id: number, 
    name: string, 
    status: SessionStatus, 
    createBy: string, 
    from: Date, 
    to: Date
}