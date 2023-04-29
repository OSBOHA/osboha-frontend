import { api } from '../Intercepter'
class GroupService {
    async createGroup(groupForm) {
        try {
            const response = await api.post(`/group/create`, groupForm, {
                headers: { "Content-type": "multipart/form-data" },
            });
            return response.data.data
        } catch (error) {
            return error;
        }
    }
    async getAll() {
        try {
            const groups = await api.get('/group');
            return await groups.data;
        } catch (error) {
            return error
        }
    }

    async getById(group_id) {
        try {
            const group = await api.get(`group/show/${group_id}`);
            return group.data.data;
        } catch (error) {
            return error;
        }
    }

    async getBooks(group_id) {
        try {
            const books = await api.get(`group/books/${group_id}`);
            return books.data.data;
        } catch (error) {
            return error;
        }
    }

    async getAllGroupExceptions(group_id) {
        try {
            const groupExceptions = await api.get(`group/group-exceptions/${group_id}`);
            return groupExceptions.data.data;
        } catch (error) {
            return error
        }
    }
    async exceptionsFilter(filter, group_id) {
        try {
            const exceptions = await api.get(`group/exceptions-filter/${filter}/${group_id}`);
            return exceptions.data.data;
        } catch (error) {
            return error;
        }
    }

    async BasicMarksView(group_id) {
        try {
            const BasicMarksView = await api.get(`group/basic-mark-view/${group_id}`);
            return BasicMarksView.data.data;
        } catch (error) {
            return error
        }
    }
    async AllAchievements(group_id, week_filter) {
        try {
            const response = await api.get(`group/all-achievements/${group_id}/${week_filter}`);
            return response.data.data;
        } catch (error) {
            return error
        }
    }
    async AchievementAsPages(group_id, week_filter) {
        try {
            const response = await api.get(`group/achievement-as-pages/${group_id}/${week_filter}`);
            return response.data.data;
        } catch (error) {
            return error
        }
    }
    async searchForAmbassadorAchievement(ambassador_name, group_id, week_filter) {
        try {
            const response = await api.get(`group/search-for-ambassador-achievement/${ambassador_name}/${group_id}/${week_filter}`);
            return response.data.data;
        } catch (error) {
            return error
        }
    }
    async searchForAmbassador(ambassador_name, group_id) {
        try {
            const response = await api.get(`group/search-for-ambassador/${ambassador_name}/${group_id}`);
            return response.data.data;
        } catch (error) {
            return error
        }
    }

    async createLeaderRequest(request) {
        try {
            const response = await api.post(`/group/create-leader-request`, request, {
                headers: { "Content-type": "multipart/form-data" },
            });
            return response.data.data
        } catch (error) {
            return error;
        }
    }

    async lastLeaderRequest(group_id) {
        try {
            const response = await api.get(`group/last-leader-request/${group_id}`);
            return response.data.data;
        } catch (error) {
            return error
        }
    }


    async deleteById(group_id) {
        try {
            return await api.delete(`/group/delete/${group_id}`);
        } catch (error) {
            return error;
        }
    }

    async update(id) {
        // try{
        //     return await api.post(`/group/update`, id);
        // }catch(error){
        //     return error;
        // }
    }

    async getGroupByType(typeId) {
        try {
            const groups = await api.post('/group/GroupByType', { type_id: typeId });
            return groups.data
        } catch (error) {
            return error
        }
    }
    async userGroups() {
        try {
            const groups = await api.get('/group/user-groups');
            return groups.data.data
        } catch (error) {
            return error
        }
    }

    /*
    **** Need to discuss ****
    async addMember(body) {
        try {
            const groups = await api.post('/user-group/', body);
            return groups.data
        } catch (error) {
            return error.response.data.data
        }
    }
    */
}

export default new GroupService()