<template>
    <div class="row">
        <div v-if="rejected" class="alert alert-danger">
            <h4>تم رفض انجازك للاسباب التالية</h4>
            <p>{{ rejectedMsg }}</p>
        </div>
        <div v-else-if="retard" class="alert alert-danger">
            <h4>لديك انجاز يجب يجب اعادته</h4>
            <div v-if="retardTheses.length > 0" class="">
                <h5>الأطروحات</h5>
                <ul>
                    <li v-for="(value, key) in retardTheses" :key="key">
                        الأطروحة : {{ value }}
                    </li>
                </ul>
            </div>
            <div v-if="retardQuestions.length > 0" class="">
                <h5>الأسئلة</h5>
                <ul>
                    <li v-for="(value, key) in retardQuestions" :key="key">
                        السؤال : {{ value }}
                    </li>
                </ul>
            </div>
            <div v-if="retardGeneralInformations" class="">
                <h5>التلخيص العام</h5>
            </div>
        </div>

    </div>
</template>
<script>

export default {
    name: "Steps",
    props: {
        rejected: {
            type: Boolean,
        },
        rejectedMsg: {
            type: String,
        },
        retard: {
            type: Boolean,
        },
        retardTheses: {
            type: [Object],
        },
        retardQuestions: {
            type: [Object],
        },
        retardGeneralInformations: {
            type: [Object],
        },
    },

}

</script>