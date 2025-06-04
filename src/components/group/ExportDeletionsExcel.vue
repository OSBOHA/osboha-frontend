<template>
    <button class="btn btn-success mb-3" @click="exportToExcel">
        تحميل كـ Excel
    </button>
</template>

<script>
import * as XLSX from 'xlsx';
import { MONTHS_NUMBERS } from "@/utilities/constants";

export default {
    name: 'ExportDeletionsButton',
    props: {
        deletions: {
            type: Object,
            required: true,
        },
        deleted_by: {
            type: String,
            required: true,
        }
    },
    data() { return { MONTHS_NUMBERS }; },
    methods: {
        exportToExcel() {
            const collect = (records) => {
                return records.map(record => {
                    const admins = record.group?.group_administrators || [];
                    const getByType = (type) => {
                        const found = admins.find(u => u.pivot?.user_type === type);
                        return found ? `${found.name} ${found.last_name}` : '-';
                    };

                    return {
                        'تم الحذف بواسطة': `${record.deleted_by?.name || ''} ${record.deleted_by?.last_name || ''}`,
                        'تم الحذف من': `${record.group?.name || ''}`,
                        'المستشار': getByType('consultant'),
                        'الموجه': getByType('advisor'),
                        'المراقب': getByType('supervisor'),
                        'القائد': getByType('leader'),
                        'السفير المكرر': `${record.user?.name || ''} ${record.user?.last_name || ''}`,
                        'مكرر في': record.duplicate_in || '-'
                    };
                });
            };

            const data = [
                ...collect(this.deletions.by_me || []),
                ...collect(this.deletions.by_children || []),
                ...collect(this.deletions.by_grandchildren || [])
            ];

            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Deleted");

            const today = new Date();
            const monthIndex = today.getMonth() + 1;
            const paddedMonth = monthIndex.toString().padStart(2, "0");
            const year = today.getFullYear();
            const monthName = MONTHS_NUMBERS[paddedMonth];
            const fileName = `حذف_السفراء_بواسطة_${this.deleted_by}_لـ شهر${monthName}_${year}.xlsx`;
            XLSX.writeFile(workbook, fileName);

        },
    },
};
</script>