<template>
    <table class="table inline-grid w-100">
        <thead>
            <tr class="text-center">
                <th scope="col">تم الحذف من</th>
                <th scope="col">المستشار</th>
                <th scope="col">الموجه</th>
                <th scope="col">المراقب</th>
                <th scope="col">القائد</th>
                <th scope="col">السفير المكرر</th>
                <th scope="col">مكرر في</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="record in records" :key="record.id" class="text-center">
                <td>
                    <span> {{ record.group.name }}</span>
                </td>
                <td>
                    <template v-if="getUserByRole(record.group.group_administrators, 'consultant')">
                        <span role="button" class="text-primary cursor-pointer" style="text-decoration: underline;"
                            @click="$emit('viewAs', getUserByRole(record.group.group_administrators, 'consultant').id)">
                            {{ getUserByRole(record.group.group_administrators, 'consultant').name }}
                            {{ getUserByRole(record.group.group_administrators, 'consultant').last_name }}
                        </span>
                    </template>
                    <span v-else>-</span>
                </td>

                <td>
                    <template v-if="getUserByRole(record.group.group_administrators, 'advisor')">
                        <span role="button" class="text-primary cursor-pointer" style="text-decoration: underline;"
                            @click="$emit('viewAs', getUserByRole(record.group.group_administrators, 'advisor').id)">
                            {{ getUserByRole(record.group.group_administrators, 'advisor').name }}
                            {{ getUserByRole(record.group.group_administrators, 'advisor').last_name }}
                        </span>
                    </template>
                    <span v-else>-</span>
                </td>

                <td>
                    <template v-if="getUserByRole(record.group.group_administrators, 'supervisor')">
                        <span>
                            {{ getUserByRole(record.group.group_administrators, 'supervisor').name }}
                            {{ getUserByRole(record.group.group_administrators, 'supervisor').last_name }}
                        </span>
                    </template>
                    <span v-else>-</span>
                </td>

                <td>
                    <template v-if="getUserByRole(record.group.group_administrators, 'leader')">
                        <span>
                            {{ getUserByRole(record.group.group_administrators, 'leader').name }}
                            {{ getUserByRole(record.group.group_administrators, 'leader').last_name }}
                        </span>
                    </template>
                    <span v-else>-</span>
                </td>

                <td>
                    <span v-if="record.user">
                        {{ record.user.name }} {{ record.user.last_name }}
                    </span>
                    <span v-else>-</span>
                </td>

                <td>{{ record.duplicate_in }}</td>

            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "DeletionsTable",
    props: ['records'],
    methods: {
        getUserByRole(users, type) {
            return users?.find(u => u.pivot?.user_type === type) || null;
        }
    }
}
</script>