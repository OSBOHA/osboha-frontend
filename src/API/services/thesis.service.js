import { data } from "jquery";
import { api } from "../Intercepter";

class ThesisService {
    async getThesisById(id){
        try{
            const thesis = await api.post(`/thesis/show`, {thesis_id: id})
            return thesis.data;
        }catch(error){
            return error;
        }
    }

    async getThesisByBookId(id){
        try{
            const thesis = await api.post(`/thesis/listBookThesis`, {book_id: id});
            return thesis.data;
        }catch(error){
            return error;
        }
    }

    async getThesisByUser(id){
        try{
            const thesis = await api.post(`/thesis/listUserThesis`, {user_id: id});
            return thesis.data;
        }catch(error){
            return error;
        }
    }

    async getThesisByWeek(id){
        try{
            const thesis = await api.post(`/thesis/listWeekThesis`, {week_id: id})
            return thesis.data;
        }catch(error){
            return error;
        }
    }
}

export default new ThesisService()